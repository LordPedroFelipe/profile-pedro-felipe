import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, catchError, EMPTY, Observable, switchMap, tap } from 'rxjs';
import { Apod } from 'src/app/models/apod.model';
import { NasaService } from 'src/app/services/nasa.service';
import { TranslationService } from 'src/app/services/translation.service';

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

  imageLoading$ = new BehaviorSubject<boolean>(true);
  imageError$ = new BehaviorSubject<boolean>(false);


  constructor(
    private nasaService: NasaService,
    private translateService: TranslateService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.dateControl.setValue(new Date());
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
          return this.carregarImagem(formattedDate);
        })
      )
      .subscribe();
  }
  
  buscarImagem(): void {
    this.loading$.next(true);
    this.error$.next(null);
    this.carregarImagem().subscribe(); // busca imagem do dia
  }
  
  carregarImagem(data?: string): Observable<void> {
    this.apod$.next(null);
    this.imageLoading$.next(true);
    this.imageError$.next(false);
  
    return this.nasaService.getApodByDate(data).pipe(
      switchMap(async apod => {
        const lang = this.translateService.currentLang || this.translateService.getDefaultLang();
  
        /*if (lang === 'pt') {
          try {
            const traducao = await this.translationService.traduzirApod(apod.title, apod.explanation);
            apod.title = traducao.title;
            apod.explanation = traducao.explanation;
          } catch {
            this.error$.next('Erro ao traduzir o conteúdo.');
          }
        }*/
  
        this.apod$.next(apod);
        this.loading$.next(false);
        return;
      }),
      catchError(err => {
        const mensagemErro = data
          ? 'Erro ao buscar imagem para a data selecionada.'
          : 'Erro ao buscar imagem do dia.';
        this.error$.next(mensagemErro);
        this.loading$.next(false);
        this.imageLoading$.next(false);
        return EMPTY;
      })
    );
  }  

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // formato: YYYY-MM-DD
  }

  onImageLoad(): void {
    this.imageLoading$.next(false);
    this.imageError$.next(false);
  }
  
  onImageError(): void {
    this.imageLoading$.next(false);
    this.imageError$.next(true);
  }
}
