import { AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Viajes } from '../../interfaces/viajes';

@Component({
  selector: 'app-registroauto2',
  templateUrl: './registroauto2.page.html',
  styleUrls: ['./registroauto2.page.scss'],
})
export class Registroauto2Page implements OnInit {

  viajes: Viajes={
    nombrechofer: '',
    patentevehiculo: '',
    detallevehiculo: '',
    destino: '',
    disponibilidad: '',
    horasalida: null,
    precio: null,
    fono: null,
    id: '',
}

  constructor(private router:Router, private storage:Storage, public database: FirestoreService, private alertController:AlertController) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.viajes)
    this.presentAlert();
    this.guardarfirestore();
    this.guardarstorage();
    this.router.navigate(['/home'])
  }
        
    async presentAlert() {
      let alert = await this.alertController.create({
        header: "Viaje registrado correctamente",
        buttons: [
          {
            text: "ok"
          }
        ]
      });
      await alert.present();
    }

  guardarfirestore(){
    const data = this.viajes;
    data.id = this.database.creatId();
    const enlace = 'Viajes';
    this.database.creatDoc<Viajes>(data, enlace, data.id)
  }

  guardarstorage(){
    //this.storage.get
    this.storage.set(this.viajes.id,this.viajes);
  }
  
}
