import { Profil } from './profil';
export class User {
    idUser: number;
    nom: string;
    prenom: string;
    login: string;
    password: string;
    email: Date;
    rib: Date;
    etat: boolean;
    idProfil: Profil;
}
