import { Profil } from './profil';
import { Pages } from './pages';
export class DroitAcces {
    idDroitAcces?: number;
    ajout: boolean = true;
    modif: boolean = true;
    supprime: boolean = true;
    showPage?: boolean = true;
    archiver: boolean = true;
    suiviPhase: boolean = true;
    page?: Pages;
    profile?: Profil;
}
