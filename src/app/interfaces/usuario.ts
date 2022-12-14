export interface Usuario {
    nombre:string;
    correo: string;
    telefono: number;
    carrera: string;
    password:string;
    uid: string;
    perfil: 'visitante' | 'admin',
}