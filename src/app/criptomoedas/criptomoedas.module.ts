import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CriptomoedasRoutingModule } from './criptomoedas-routing.module';
import { CriptomoedasComponent } from './criptomoedas/criptomoedas.component';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    CriptomoedasComponent
  ],
  imports: [
    CommonModule,
    CriptomoedasRoutingModule,
    AppMaterialModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }]
})
export class CriptomoedasModule { }
