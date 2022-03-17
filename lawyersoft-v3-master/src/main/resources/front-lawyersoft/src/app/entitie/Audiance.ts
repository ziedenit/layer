import { Phase } from './Phase';
import { StatusAudiance } from './StatusAudiance';

export class Audiance{
    idAudiance: number;
    titre: string;
    dateAudiance: Date;
    etat: string;
    phaseId: Phase;
    statusId: StatusAudiance;
}
