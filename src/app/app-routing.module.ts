import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { EstudosComponent } from './pages/estudos/estudos.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { IdiomasComponent } from './pages/idiomas/idiomas.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'resumo', pathMatch: 'full' },
  { path: 'profile', component: PerfilComponent },
  { path: 'experience', component: ExperienciaComponent },
  { path: 'studies', component: EstudosComponent },
  { path: 'languages', component: IdiomasComponent },
  { path: 'contacts', component: ContatosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
