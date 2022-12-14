import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { listaviajes, Viajes } from '../interfaces/viajes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  listado:listaviajes[]=[];
  viaje:Viajes;

  creatDoc<tipo>(data: tipo, enlance: string, id: string ) {
      const ref = this.firestore.collection<tipo>(enlance);
    return ref.doc(id).set(data);
  }


  getCollectionChanges<tipo>(enlace: string): Observable<tipo[]> {
    const ref = this.firestore.collection<tipo>(enlace);
    return ref.valueChanges();
  }
    /*const collection = this.firestore.collection<tipo>(path);
    return collection.valueChanges();*/

    //console.log('Estoy por leer una coleccion');
/*
    this.firestore.collection('Viajes').valueChanges().subscribe((res) => {

      console.log('res -> ',res);
      //
      res.forEach(element => {
        cosas.push(element);
      });

    });
*/
    /*return this.firestore.collection<Viajes>('Viajes').valueChanges().subscribe((res) => {

      console.log('res -> ',res);
      //
      res.forEach(element => {
        this.viaje.destino=element.destino;
        this.viaje.detallevehiculo=element.detallevehiculo;
        
      });

    });
    //return res;
  }
  */
  
  creatId(){
    return this.firestore.createId();
  }

  getDoc<tipo>(path: string, id:string ) {
    return this.firestore.collection(path).doc<tipo>(id).valueChanges()
  }


  
}
