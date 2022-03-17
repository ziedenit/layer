import { Component, OnInit, Input } from '@angular/core';
import { Lecteurjugement } from 'src/app/entitie/lecteurjugement';
import { LecteurjugementService } from 'src/app/services/lecteurjugement.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { AffaireDto } from 'src/app/dto/AffaireDto';
import { Affaire } from 'src/app/entitie/Affaire';
import { AffaireService } from 'src/app/services/affaire.service';


@Component({
  selector: 'app-addjugement',
  templateUrl: './addjugement.component.html',
  styleUrls: ['./addjugement.component.css']
})
export class AddjugementComponent implements OnInit {

  @Input("displayBasic") displayBasic: boolean;

  @Input("lecteur")
  lecteur: any;

  @Input("phaseId")
  phaseId: any;



  submitted = false;
  fichierid: any;
  dossierid: any;
  cols: any[];
  msgs: Message[] = [];
  first: number = 0;
  value: any;
  isValidFormSubmitted = false;
  uploadedFiles: any[] = [];
  lecteurjugement: Lecteurjugement;

  selectedFiles: FileList;
  currentFileUpload: File;

  phase: Phase = new Phase();
  affaire: Affaire = new Affaire();

  Phase: any;
  Affaire: any;
  etat: string;
  nom: string;

  //affairedto: AffaireDto = new AffaireDto();



  lecteurjugementForm = new FormGroup({
    description: new FormControl(null, Validators.required),
    date: new FormControl(Date.now()),
    favorable: new FormControl(),
    file: new FormControl(null, Validators.required),
    fileName: new FormControl(),
    fileDownloadUri: new FormControl(),
    fileType: new FormControl(),
    size: new FormControl(),
    phaseId: new FormControl(null, Validators.required),
  });

  constructor(
    private lecteurjugementService: LecteurjugementService, private router: Router,
    private confirmationService: ConfirmationService,
    private affaireservice: AffaireService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private phaseservice: PhaseService, ) { }

  ngOnInit(): void {
    console.log("add", this.lecteur);



  }

  showBasicDialog() {
    // tslint:disable-next-line: no-unused-expression
    this.displayBasic = true;
    console.log("add", this.lecteur);

  }

  myUploader(event) {
    console.log(event);
    for (let file of event.files) {
      console.log(file)

    }
  }

  onUpload(event) {
    console.log("event");
    console.log(event);
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

  }

  get f() { return this.lecteurjugementForm.controls; }

  showChange(event) {
    console.log(event);
    console.log(this.lecteurjugementForm.value);
  }


  addlecteurjugement() {
    this.submitted = true;

    //this.lecteurjugementForm.valid  &&
    if (this.uploadedFiles.length != 0) {

      let file = this.uploadedFiles[0];

      console.log("file", file);

      this.lecteurjugementService.addLecteurjugement(file, this.lecteurjugementForm.value.favorable,
        this.lecteurjugementForm.value.description, this.phaseId).subscribe(data => {

         // console.log("favorabel", this.lecteurjugementForm.value.favorable)

          if (this.etat === 'Archivé') {
            this.phaseservice.getPhasebyid(this.phaseId).subscribe(res => {
              this.Phase = res;
              this.Affaire = this.Phase.affaireId;
              this.Affaire.etatavant = this.Affaire.etat;
              this.Affaire.etat = this.etat;
              this.affaireservice.updateAffaire(this.Affaire).subscribe(data => {
              });
            });

          } else {
            this.phaseservice.getPhasebyid(this.phaseId).subscribe(res => {
              this.Phase = res;
              this.Phase.current = false;
              this.phaseservice.updatePhase(this.Phase).subscribe(data => {
              });
              this.phase.nom = this.nom;
              this.phase.dateDebut = new Date();
              this.phase.affaireId = this.Phase.affaireId;
              this.phase.current = true;
              this.phaseservice.addPhase(this.phase).subscribe(data => {
              });

            });
          }
          //this.showSuccess();
          this.displayBasic = false;

        });


    }
  }
}
