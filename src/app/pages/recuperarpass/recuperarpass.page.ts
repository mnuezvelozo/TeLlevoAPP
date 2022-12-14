import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recuperarpass',
  templateUrl: './recuperarpass.page.html',
  styleUrls: ['./recuperarpass.page.scss'],
})
export class RecuperarpassPage implements OnInit {

  constructor(public authService: AuthService  ) { }

  ngOnInit() {
  }

}
