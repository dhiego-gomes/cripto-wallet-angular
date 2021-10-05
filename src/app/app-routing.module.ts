import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'criptomoedas' },
  {
    path: 'criptomoedas',
    loadChildren: () => import('./criptomoedas/criptomoedas.module').then(m => m.CriptomoedasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
