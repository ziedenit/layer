import { Dossier } from './Dossier';

export class Fichier {
  fichierId?: number;
  nom: string;
  description: string;
  dateCreation: Date;
  dossierid: Dossier;
  fileName: string;
  fileDownloadUri?: string;
  fileType: string;
  size: string;
}
