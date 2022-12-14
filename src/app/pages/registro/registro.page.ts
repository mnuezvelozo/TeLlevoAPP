import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: Usuario = {
    nombre: null,
    correo: null,
    telefono: null,
    carrera: null,
    password:null,
    uid: null,
    perfil: 'visitante'
}

  constructor(private storage:Storage,private router:Router, private auth: AuthService, public database:FirestoreService, private interaction: InteractionService) { }


  ngOnInit() {
  }

  onSubmit()
  {
    this.guardarstorage();
    this.registrar();
  }

  async registrar () {
    this.interaction.presentLoading('registrando...')
    console.log('datos ->', this.datos);
    const res = await this.auth.registrarUser(this.datos).catch( error => {
      this.interaction.closeLoading();
      this.interaction.presentToast('error');
      console.log('error');
    })
    if (res){
        console.log('exito al crear usuario');
        const path = 'Usuarios';
        const id = res.user.uid;
        this.datos.uid = id;
        this.datos.password = null
        await this.database.creatDoc(this.datos, path, id)
        this.interaction.closeLoading();
        this.interaction.presentToast('Registrado correctamente')
        this.router.navigate(['/login'])
    }

  }

  /*onSubmit()
  {
    console.log(this.usuario);
    this.guardar();
    this.guardarfirestore();
    
  }

  guardarfirestore(){
    const data = this.usuario;
    data.id = this.database.creatId();
    const enlace = 'Clientes';
    this.database.creatDoc<Usuario>(data, enlace, data.id)
  }


  async guardar()
  {
    let existe=await this.storage.get(this.usuario.username);

    if(existe==null)
    {
      await this.storage.set(this.usuario.username,this.usuario);
      console.log("Usuario creado");
      const alert = await this.alertController.create({
        header: 'Usuario Registrado correctamente',
        buttons: [
          {
            text: 'ok',
          },
        ],
      });
  
      await alert.present();
      this.router.navigate(['/login']);
    }
    else{
      console.log("Usuario ya existe"); /*preguntar mañana al profe como mostrarlo en pantalla
      const alert = await this.alertController.create({
        header: "Nombre de usuario ya registrado",
        buttons: [
          {
            text: "ok"
          }
        ]
      });
      await alert.present();
    }
  }*/

  guardarstorage(){
    //this.storage.get
    this.storage.set(this.datos.nombre,this.datos);
  }
}
