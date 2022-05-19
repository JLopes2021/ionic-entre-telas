import { HomePage } from './../home/home.page';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.page.html',
  styleUrls: ['./administracao.page.scss'],
})

export class AdministracaoPage implements OnInit {
  public curso1 = {nome: 'Administração', valor: 'R$ 5000'};
  public curso2 = {nome: 'Biologia', valor: 'R$ 15000'};
  public curso3 = {nome: 'Cozinha', valor: 'R$ 5300'};
  public curso4 = {nome: 'Direito', valor: 'R$ 25000'};
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.navigateBack('home');
  }
}
