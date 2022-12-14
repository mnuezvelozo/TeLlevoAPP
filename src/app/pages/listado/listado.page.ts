import { agregarPasajero } from './../../interfaces/viajes';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { listaviajes, Viajes } from 'src/app/interfaces/viajes';
import { FirestoreService } from './../../services/firestore.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { InteractionService } from '../../services/interaction.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

    
  @Input() viajes: Viajes;
    items: Viajes [] = [];

  constructor( private storage:Storage,private router:Router, public firebase:FirestoreService, private alertController:AlertController, private auth: AuthService, private interaction: InteractionService) { }

  ngOnInit(){

    this.getItems();

    /*
    this.firebase.getCollection().subscribe(datos=>
      {
         this.listado.push(...datos);
         console.log(this.listado);
      })
    */
     //this.listado= this.firebase.getCollection();
     //this.listado.push(...algo);
     //console.log("WTF!!!!");
     //console.log(this.listado);
     //console.log(this.listado[0]);

     /*console.log("LISTAR LA COSA");
     console.log(algo[0]);
     console.log("FIN DE LA COSA");*/
  }

  getItems() {
    const enlace = 'Viajes';
    this.firebase.getCollectionChanges<Viajes>(enlace).subscribe( res => {
          this.items = res;
    }  )
  }

/*async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Viaje Solicitado Correctamente',
    buttons: ['OK'],
  });

  await alert.present();
  }*/

  /*async agregarpasajero() {
    const path = 'Viajes/' + this.viajes.id + '/pasajeros';
    const uid = await this.auth.getUid();
    const data: agregarPasajero = {
      uid,
      user: null,
      fecha: new Date(),
      estado: true
    }
    this.firebase.creatDoc(data, path, uid);
    this.interaction.presentToast('Viaje Solicitado');
  }*/

  async agregar() {
    this.interaction.presentToast('Viaje Solicitado');
    const path = 'Viajes/' + this.viajes.id + '/pasajeros/';
    const uid = await this.auth.getUid();
    const data: agregarPasajero = {
      uid,
      user: null,
      fecha: new Date(),
      estado: true
    }
    this.firebase.creatDoc(data, path, uid);
  }
}

