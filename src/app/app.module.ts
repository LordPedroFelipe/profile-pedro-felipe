import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosselImagensComponent } from './components/carrossel-imagens/carrossel-imagens.component';
import { MenuComponent } from './components/menu/menu.component';
import { NasaApodComponent } from './components/nasa-apod/nasa-apod.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { EstudosComponent } from './pages/estudos/estudos.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { HomeComponent } from './pages/home/home.component';
import { IdiomasComponent } from './pages/idiomas/idiomas.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ResumoComponent } from './pages/resumo/resumo.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DownloadCvComponent } from './components/download-cv/download-cv.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ResumoComponent,
    PerfilComponent,
    ExperienciaComponent,
    EstudosComponent,
    IdiomasComponent,
    ContatosComponent,
    CarrosselImagensComponent,
    NasaApodComponent,
    DownloadCvComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
