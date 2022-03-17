import { Phase } from './Phase';

export class Lecteurjugement {
  lecteurjugementId?: number;
  description: string;
  date: Date;
  favorable: boolean;
  fileName: string;
  fileDownloadUri?: string;
  fileType: string;
  size: string;
  phaseId: Phase;
}
