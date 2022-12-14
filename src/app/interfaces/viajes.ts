import { Usuario } from 'src/app/interfaces/usuario';
export interface Viajes {
    nombrechofer: string;
    patentevehiculo: string;
    detallevehiculo: string;
    destino: string;
    disponibilidad: string;
    horasalida: string;
    precio: string;
    fono: string;
    id: string;
}

export interface listaviajes {
    lista: Viajes[]
}

export interface agregarPasajero {
    uid: string;
    user: Usuario;
    fecha: any;
    estado:boolean;
}