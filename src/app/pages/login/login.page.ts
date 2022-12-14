import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from '../../services/firestore.service';
import { Usuario } from '../../interfaces/usuario';
import { InteractionService } from 'src/app/services/interaction.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /*usuario={
    username:'',
    password:''
  };*/

  credenciales = {
    correo : null,
    password: null
  }

  //itemusuario: Usuario [] = [];

  constructor(private storage:Storage, private router:Router, public database: FirestoreService, private interaction: InteractionService, private auth: AuthService) { }

  ngOnInit() {
  }

  async login () {
    //this.interaction.presentLoading('ingresando...')
    console.log('credenciales ->', this.credenciales)
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch( error => {
          console.log('error');
          //this.interaction.closeLoading();
          this.interaction.presentToast('Usuario o contraseña invalidos')
    })
    if (res) {
      console.log('res -> ', res);
      //this.interaction.closeLoading();
      this.interaction.presentToast('Ingresado con exito')
      this.router.navigate(['/home'])
      this.storage.set('sesion',this.credenciales.correo)
    }
  }

  /*onSubmit()
  {
    this.validarusuario();
    this.getItems();
  }

  async validarusuario()
  {
    let usr= await this.storage.get(this.usuario.username);
    if(usr!=null)
    {
      console.log(usr);
      this.storage.set('sesion',this.usuario.username);
      this.router.navigate(['/home']);
    }
    else{
      console.log("Usuario no registado");
      const alert = await this.alertController.create({
        header: "Usuario no registrado",
        buttons: [
          {
            text: "ok"
          }
        ]
      });
      await alert.present();
    }
  }

  getItems() {
    const enlace = 'Items';
    this.database.getCollectionChanges<Usuario>(enlace).subscribe( res => {

      console.log(res);
          this.itemusuario = res;
    }  )
}*/


}
