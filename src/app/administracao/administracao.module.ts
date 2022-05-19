import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministracaoPageRoutingModule } from './administracao-routing.module';

import { AdministracaoPage } from './administracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministracaoPageRoutingModule
  ],
  declarations: [AdministracaoPage]
})
export class AdministracaoPageModule {}
