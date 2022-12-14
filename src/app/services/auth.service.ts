import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../interfaces/usuario';
import { InteractionService } from './interaction.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private authfirebase: AngularFireAuth, private interaction: InteractionService) { }

  login(correo: string, password: string) {
   return this.authfirebase.signInWithEmailAndPassword(correo, password)
  }

  logut() {
    this.authfirebase.signOut();
  }

  registrarUser(datos: Usuario) {
  return this.authfirebase.createUserWithEmailAndPassword(datos.correo, datos.password);
  }

  stateUser() {
  return this.authfirebase.authState
  }

    // Recuperar contraseña
  PasswordRecover(passwordResetEmail) {
    return this.authfirebase
    .sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
    this.interaction.presentToast('se ha enviado un correo a tu email para restablecer tu contraseña')
      })
        .catch((error) => {
          window.alert(error);
        });
    }

  async getUid() {
  const user = await this.authfirebase.currentUser;
  return user.uid;
  }
}
