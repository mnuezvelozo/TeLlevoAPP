import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from './../../services/firestore.service';
import { agregarPasajero } from './../../interfaces/viajes';
import { Component, Input} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { CrudService } from '../../crud.service';
import { Viajes } from 'src/app/interfaces/viajes';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-listadovehiculos',
  templateUrl: './listadovehiculos.page.html',
  styleUrls: ['./listadovehiculos.page.scss'],
})
export class ListadovehiculosPage {

  @Input() viajes: Viajes;
  
  nombrechofer = "";
  patentevehiculo = "";
  detallevehiculo = "";
  destino = "";
  disponibilidad = "";
  horasalida = "";
  precio = "";
  fono = "";
  listado = []
  constructor(private storage:Storage, private router:Router ,private crud:CrudService, private alertController:AlertController, private auth: AuthService, private firestore: FirestoreService, private interaction: InteractionService) { }
  
//   async agregar(txtRut:HTMLInputElement, txtNombre:HTMLInputElement, txtFono:HTMLInputElement)
// {
//   const datos = [{"rut": txtRut.value,
//                   "nombre": txtNombre.value,
//                   "fono": txtFono.value
//                 }];
//   await this.crud.agregar(datos); // agrega el dato al storage
//   // Limpia las cajas de texto
//   txtRut.value = "";
//   txtNombre.value = "";
//   txtFono.value = "";
// }

  // async buscar(txtRut:HTMLInputElement)
  // {
  //   // retorna el valor encontrado (si existe)
  //   const valor = await this.crud.rescatar(txtRut.value);

  //   if (valor != null) {
  //     // muestra el valor encontrado
  //     this.rut = valor[0].rut;
  //     this.nombre = valor[0].nombre;
  //     this.fono = valor[0].fono;

  //     // Limpia las cajas de texto
  //     txtRut.value = "";
  //   }
  //   else {
  //     this.nombre = "";
  //     this.fono = "";
  //     const toast = await this.toast.create({
  //       message: "El rut no fue encontrado",
  //       duration: 2000,
  //       color: "danger",
  //       position: "middle"
  //     });
  //     toast.present();
  //   }
  // }


  // async eliminar()
  // {
  //   let rutEliminar = this.rut
  //   if(rutEliminar.trim().length == 0)
  //   {
  //     const toast = await this.toast.create({
  //       message: "El rut no fue especificado",
  //       duration: 2000,
  //       color : "danger",
  //       position: "middle"
  //     });
  //     toast.present();
  //   }
  //   else
  //   {
  //     const valor = await this.crud.rescatar(rutEliminar)
  //     if(valor == null)
  //     {
  //       const toast = await this.toast.create({
  //         message: 'El rut  ' + rutEliminar + ' no fue encontrado',
  //         duration: 2000,
  //         color : "danger",
  //         position: "middle"
  //       });
  //       toast.present();
  //     }
  //     else
  //     {
  //       this.crud.eliminar(rutEliminar)
  //       const toast = await this.toast.create({
  //         message: 'El rut ' + rutEliminar + 'fue eliminado',
  //         duration: 2000,
  //         color : "danger",
  //         position: "middle"
  //       });
  //       toast.present();
  //     }
  //   }
    
  //   this.nombre = "";
  //   this.fono = "";
  // }

  ngOnInit() {
    //console.log('el input es ->', this.viajes);

  }

async agregarpasajero() {
  const path = 'Viajes/' + this.viajes.id + '/pasajeros';
  const uid = await this.auth.getUid();
  const data: agregarPasajero = {
    uid,
    user: null,
    fecha: new Date(),
    estado: true
  }
  this.firestore.creatDoc(data, path, uid);
  this.interaction.presentToast('Viaje Solicitado');
}



  /*async listar()
  {
    this.listado = this.crud.listar();
  }

  async presentAlerta() {
    const alert = await this.alertController.create({
      header: 'Viaje Solicitado correctamente',
      buttons: [
        {
          text: 'OK',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }*/

}
