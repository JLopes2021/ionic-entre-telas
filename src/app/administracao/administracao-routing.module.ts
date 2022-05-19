import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministracaoPage } from './administracao.page';

const routes: Routes = [
  {
    path: '',
    component: AdministracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracaoPageRoutingModule {}
