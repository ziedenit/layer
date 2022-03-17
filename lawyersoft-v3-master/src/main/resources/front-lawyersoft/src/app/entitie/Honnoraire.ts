import { Affaire } from './Affaire';
import { Consultation } from './Consultation';

export class Honnoraire {
    honnoraireId: number;
    titre: string;
    montant: number;
    reste: number;
    dateHonnoraire: Date;
    type: string;
    affaireId: Affaire;
    consultationId: Consultation;
}
