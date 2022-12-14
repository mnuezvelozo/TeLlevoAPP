import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: String='';
  
  constructor(private storage:Storage,private router:Router, private menu:MenuController, 
              private activatedRouter:ActivatedRoute, private firestore: FirestoreService) {}

ngOnInit()
{
  this.vernombre();
}

  
  cerrarSesion(){
    this.cerrar();
    this.router.navigate(['/login']);

  }

  async cerrar()
  {
    await this.storage.set('sesion',null);


  }

  abrirMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async vernombre()
  {
    this.nombre= await this.storage.get('sesion');
  }


  /*getEstudiantes(){
    this.firestore.getCollection()
  }*/
}
