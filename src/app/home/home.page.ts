/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public curso1 = {nome: 'Administração', valor: 'R$ 5000'};
public curso2 = {nome: 'Biologia', valor: 'R$ 15000'};
public curso3 = {nome: 'Cozinha', valor: 'R$ 5300'};
public curso4 = {nome: 'Direito', valor: 'R$ 25000'};

  constructor(public alertController: AlertController, public navCtrl: NavController) {}

  async exibirAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sua escolha é:',
      subHeader: '',
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
  }
  verificaSelecionado(valor: any){
    let mensagem: string;
    mensagem=valor.detail.value;
    this.exibirAlerta(mensagem);
  }
}
