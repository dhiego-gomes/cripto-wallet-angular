import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriptomoedasComponent } from './criptomoedas/criptomoedas.component';

const routes: Routes = [
  { path: '', component: CriptomoedasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriptomoedasRoutingModule { }
