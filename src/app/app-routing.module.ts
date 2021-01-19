import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorFelinosComponent } from './components/buscador-felinos/buscador-felinos.component';
import { FotosFelinasComponent } from './components/fotos-felinas/fotos-felinas.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'buscador-felinos', component: BuscadorFelinosComponent },
  { path: 'fotos-felinas', component: FotosFelinasComponent },
  { path: '',   redirectTo: '/buscador-felinos', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
