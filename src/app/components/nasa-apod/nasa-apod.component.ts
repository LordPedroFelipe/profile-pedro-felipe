import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BehaviorSubject, EMPTY, Observable, catchError, finalize, switchMap, tap } from 'rxjs';
import { Apod } from 'src/app/models/apod.model';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.scss']
})
export class NasaApodComponent implements OnInit {
  readonly dateControl = new FormControl<Date | null>(new Date());

  readonly apod$ = new BehaviorSubject<Apod | null>(null);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  readonly error$ = new BehaviorSubject<string | null>(null);
  readonly imageLoading$ = new BehaviorSubject<boolean>(true);
  readonly imageError$ = new BehaviorSubject<boolean>(false);
  readonly safeVideoUrl$ = new BehaviorSubject<SafeResourceUrl | null>(null);

  constructor(
    private nasaService: NasaService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.buscarImagem();

    this.dateControl.valueChanges
      .pipe(
        switchMap((date) => {
          if (!date) {
            return EMPTY;
          }

          return this.carregarImagem(this.formatDate(date));
        })
      )
      .subscribe();
  }

  buscarImagem(): void {
    const currentDate = this.dateControl.value;
    this.carregarImagem(currentDate ? this.formatDate(currentDate) : undefined).subscribe();
  }

  carregarImagem(data?: string): Observable<Apod> {
    this.loading$.next(true);
    this.error$.next(null);
    this.apod$.next(null);
    this.imageLoading$.next(true);
    this.imageError$.next(false);
    this.safeVideoUrl$.next(null);

    return this.nasaService.getApodByDate(data).pipe(
      tap((apod) => {
        this.apod$.next(apod);

        if (apod.media_type === 'video') {
          this.safeVideoUrl$.next(this.sanitizer.bypassSecurityTrustResourceUrl(apod.url));
        }

        if (apod.media_type === 'other') {
          this.imageLoading$.next(false);
        }
      }),
      finalize(() => this.loading$.next(false)),
      catchError(() => {
        this.error$.next('NASA_COMPONENT.IMG_ERROR');
        this.imageLoading$.next(false);
        return EMPTY;
      })
    );
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  onMediaLoad(): void {
    this.imageLoading$.next(false);
    this.imageError$.next(false);
  }

  onMediaError(): void {
    this.imageLoading$.next(false);
    this.imageError$.next(true);
  }
}
