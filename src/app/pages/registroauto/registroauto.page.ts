import { Storage } from '@ionic/storage-angular';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../crud.service';
import { nanoid } from "nanoid";


@Component({
  selector: 'app-registroauto',
  templateUrl: './registroauto.page.html',
  styleUrls: ['./registroauto.page.scss'],
})
export class RegistroautoPage {
  nombrechofer = "";
  patentevehiculo = "";
  detallevehiculo = "";
  destino = "";
  disponibilidad = "";
  horasalida = "";
  precio = "";
  fono = "";

  constructor(private router:Router, private storage:Storage, private crud:CrudService, private alertController:AlertController, private activatedRouter:ActivatedRoute) { }

async agregarconKey(txtPatente:HTMLInputElement, txtNombreChofer:HTMLInputElement, txtDetalle:HTMLInputElement, txtDestino:HTMLInputElement, txtDisponibilidad:HTMLInputElement, txtHora:HTMLInputElement, txtPrecio:HTMLInputElement, txtFono:HTMLInputElement)
  {
  const datos = [{"patente": txtPatente.value,
                  "nombre": txtNombreChofer.value,
                  "detalle": txtDetalle.value,
                  "destino": txtDestino.value,
                  "disponibilidad": txtDisponibilidad.value,
                  "hora": txtHora.value,
                  "precio": txtPrecio.value,
                  "fono": txtFono.value,
                  "pasajeros": ["joaquin"]
                  }       
              ];
await this.crud.agregarConKey(datos[0].patente, (datos) ); // agrega el dato al storage
// Limpia las cajas de texto
txtPatente.value = "";
txtNombreChofer.value = "";
txtDetalle.value = "";
txtDestino.value = "";
txtDisponibilidad.value = "";
txtHora.value = "";
txtPrecio.value = "";
txtFono.value = "";

  }

  async presentAlerta() {
    const alert = await this.alertController.create({
      header: 'Viaje Registrado Correctamente',
      buttons: [
        {
          text: 'OK',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
