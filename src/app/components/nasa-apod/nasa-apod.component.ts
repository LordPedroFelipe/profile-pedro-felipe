import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, catchError, EMPTY, switchMap, tap } from 'rxjs';
import { Apod } from 'src/app/models/apod.model';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.scss']
})
export class NasaApodComponent implements OnInit {
  dateControl = new FormControl(); // datepicker control

  apod$ = new BehaviorSubject<Apod | null>(null);
  loading$ = new BehaviorSubject<boolean>(false);
  error$ = new BehaviorSubject<string | null>(null);

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.buscarImagem(); // Carrega a imagem do dia ao iniciar

    this.dateControl.valueChanges
      .pipe(
        tap(() => {
          this.loading$.next(true);
          this.error$.next(null);
        }),
        switchMap(date => {
          if (!date) return EMPTY;
          const formattedDate = this.formatDate(date);
          return this.nasaService.getApodByDate(formattedDate).pipe(
            tap(apod => {
              this.apod$.next(apod);
              this.loading$.next(false);
            }),
            catchError(err => {
              this.error$.next('Erro ao buscar imagem para a data selecionada.');
              this.loading$.next(false);
              return EMPTY;
            })
          );
        })
      )
      .subscribe();
  }

  buscarImagem(): void {
    this.loading$.next(true);
    this.nasaService.getApodByDate().subscribe({
      next: apod => {
        this.apod$.next(apod);
        this.loading$.next(false);
      },
      error: () => {
        this.error$.next('Erro ao buscar imagem do dia.');
        this.loading$.next(false);
      }
    });
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // formato: YYYY-MM-DD
  }
}
