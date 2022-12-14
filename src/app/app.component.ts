import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';//import
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { InteractionService } from './services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  login: boolean = false;
  rol: 'cliente' | 'empresa' = 'empresa';

  constructor(private storage:Storage, private menu:MenuController, private auth: AuthService, public interaction: InteractionService, private router: Router) {

    this.auth.stateUser().subscribe(res => {
      if(res) {
        console.log('esta logueado')
        this.login = true;
        
      } else {
        console.log('no esta logeado')
        this.login = false;
      }
    })
  } //en el costructor

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  cerrar1(){
    this.menu.close('first');
  }

  async cerrar()
  {
    this.auth.logut();
    this.interaction.presentToast('Sesion finalizada con exito');
    this.router.navigate(['/login'])
  }

  async cerrarstorage()
  {
    await this.storage.set('sesion',null);
  }
}
