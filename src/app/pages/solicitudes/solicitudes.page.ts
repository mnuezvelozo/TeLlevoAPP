import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  constructor( private crud:CrudService, private storage:Storage) { }

  ngOnInit() {


  }



}
