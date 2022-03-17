import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { Audiance } from 'src/app/entitie/Audiance';
import { AudianceService } from 'src/app/services/audiance.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StatusAudiance } from 'src/app/entitie/Statusaudiance';
import { StatusAudianceService } from 'src/app/services/Statusaudiance.service';

@Component({
  selector: 'app-updateaudiance',
  templateUrl: './updateaudiance.component.html',
  styleUrls: ['./updateaudiance.component.css'],
  providers: [MessageService]
})
export class UpdateaudianceComponent implements OnInit {


  submitted = false;
  listPhase: Phase[];
  items: MenuItem[];
  home: MenuItem;
  audiance: Audiance;
  phaseId: any;
  statusaudiance: StatusAudiance;
  liststatusaudiance: [];
  displayBasic: boolean;
  lecteur: any;

  @Input('displayBasicupdate') displayBasicupdate: boolean;

  @Input('idAudiance')
  idAudiance: any;


  etat = [
   /* { label: 'En cours', value: 'En cours' },*/
    { label: 'Cloturé', value: 'Cloturé' },
    { label: 'Reporter', value: 'Reporter' },
  ];

  isValidFormSubmitted = false;

  constructor(private phaseservice: PhaseService,
    private audianceService: AudianceService,
    private statusaudianceService: StatusAudianceService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute) {
    //this.idAudiance = this.route.snapshot.paramMap.get('id');
    this.phaseId = this.route.snapshot.paramMap.get('id');


  }

  audianceForm = new FormGroup({
    idAudiance: new FormControl(null, Validators.required),
    titre: new FormControl(null, Validators.required),
    etat: new FormControl(null, Validators.required),
    dateAudiance: new FormControl(null, Validators.required),
    phaseId: new FormControl(),
    statusId: new FormControl(null, Validators.required),

  });

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    this.audianceForm.setValue(changes.idAudiance.currentValue)
    console.log(changes.idAudiance.currentValue)

  }

  FindAllAudianceByPhase() {


    this.audianceService.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listAudiance", resultat);
      this.audianceService.listAudiance = resultat;
    });
  }


  ngOnInit(): void {


    this.statusaudianceService.getListStatusAudiance().subscribe((resultat: []) => {
      this.liststatusaudiance = resultat;
      console.log(" this.liststatusaudiance", this.liststatusaudiance)
    });

    //console.log("idaudiance", this.idAudiance)
    if (this.idAudiance != null) {
      //console.log("eeee", this.idAudiance)
      this.audianceService.getAudiancebyid(this.idAudiance).subscribe(audiance => {
        console.log('audiance', audiance);
        this.audiance = audiance;
        this.audianceForm.setValue(audiance);
      });
    }
    this.items = [
      { label: 'Phase' },
      { label: 'Opération' },
      { label: 'Audiance' },
      { label: 'Modifier' },
    ];

    this.home = { icon: 'pi pi-home' };

  }

  showBasicDialogupdate() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicupdate = true;

  }



  showChange(event) {
    console.log(event);
    console.log(this.audianceForm.value);
  }


  get f() { return this.audianceForm.controls; }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
  }






  selectChangeHandler(event: any) {
    //update the ui
    this.lecteur = event.value;
    console.log("lecteur", this.lecteur);

    if (this.lecteur.status === 'Lecture de jugement') {
      this.displayBasic = true;
      console.log("lecteurdisplay", this.lecteur);
      console.log(this.displayBasic);
    }

  }


  updateAudiance() {

    if (this.audianceForm.valid) {
      this.submitted = false;
      this.audianceService.updateAudiance(this.audianceForm.value).subscribe(data => {
        this.showInfo();
        this.displayBasicupdate = false;
        this.FindAllAudianceByPhase()

      });
    } else {
      this.submitted = true;
    }
  }


  resetAudianceForm() {
    this.audianceForm.setValue(this.audiance);
    this.submitted = false;
  }

}
