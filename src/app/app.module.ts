import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumoComponent } from './pages/resumo/resumo.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { EstudosComponent } from './pages/estudos/estudos.component';
import { IdiomasComponent } from './pages/idiomas/idiomas.component';
import { ContatosComponent } from './pages/contatos/contatos.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
