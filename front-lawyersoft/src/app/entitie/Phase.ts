import { Tribunal } from './Tribunal';
import { Affaire } from './Affaire';

export class Phase {
    phaseId: number;
    titre: string;
    nom: string;
    referencetribunal: string;
    dateDebut: Date;
    dateFin: Date;
    current: Boolean;
    affaireId: Affaire;
    tribunalId: Tribunal;
}
