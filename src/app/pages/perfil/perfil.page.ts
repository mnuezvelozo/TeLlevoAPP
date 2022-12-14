import { FirestoreService } from 'src/app/services/firestore.service';
import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

uid: string = null;
info: Usuario = null;

  constructor(private router:Router, private storage:Storage, public database: FirestoreService, private authservice: AuthService) { }

  async ngOnInit() {
    console.log('estoy en mi perfil');
    this.uid = await this.authservice.getUid();
    console.log('uid -> ', this.uid)
    this.getInfoUser();
  }

  getInfoUser() {
    const path = 'Usuarios';
    const id = this.uid;
    this.database.getDoc<Usuario>(path, id).subscribe(res => {
      if (res) {
        this.info = res;
      }
        console.log('datos son ->', res)
    })
  }


 /* mostrarperfil(){
    const enlace = 'Usuarios';
    this.database.getCollectionChanges<Usuario>(enlace).subscribe( res => {

      console.log(res);
          this.items = res;
    }  )
  }*/
  
}
