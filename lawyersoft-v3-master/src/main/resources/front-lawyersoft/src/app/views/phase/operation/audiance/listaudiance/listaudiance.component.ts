import { Component, OnInit, Input } from '@angular/core';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { Audiance } from 'src/app/entitie/Audiance';
import { AudianceService } from 'src/app/services/audiance.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, NumberValueAccessor } from '@angular/forms';
import { StatusAudiance } from 'src/app/entitie/Statusaudiance';
import { StatusAudianceService } from 'src/app/services/Statusaudiance.service';


@Component({
  selector: 'app-listaudiance',
  templateUrl: './listaudiance.component.html',
  styleUrls: ['./listaudiance.component.css']
})
export class ListaudianceComponent implements OnInit {

  activeIndex: number = 1;

  items: MenuItem[];
  cols: any[];


  msgs: Message[] = [];
  first: number = 0;
  home: MenuItem;
  displayBasicadd: boolean;
  displayBasicupdate: boolean;
  submitted = false;
  affaireId: any;
  phase: Phase;
  phaseId: any;

  statusaudiance: StatusAudiance;
  liststatusaudiance: StatusAudiance[];

  listAudiance: Audiance[];
  audiance: Audiance;
  selectedAudiance: Audiance;
  idAudiance: any;


  statuts = [
    { label: 'Pour entendre les témoins', value: 'Pour entendre les témoins' },
    { label: 'Pour notre réplique', value: 'Pour notre réplique' },
    { label: 'Lecture de jugement', value: 'Lecture de jugement' },

  ];

  etat = [
    { label: 'En cours', value: 'En cours' },
    { label: 'Cloturé', value: 'Cloturé' },
    { label: 'Reporter', value: 'Reporter' },
  ];

  isValidFormSubmitted = false;

  constructor(
    private phaseservice: PhaseService,
    public audianceService: AudianceService,
    private statusaudianceService: StatusAudianceService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) {
    this.phaseId = this.route.snapshot.paramMap.get('id');
    //this.idAudiance = this.route.snapshot.paramMap.get('id');

    console.log("phaseId", this.phaseId);
  }


  audianceForm = new FormGroup({
    titre: new FormControl(null, Validators.required),
    etat: new FormControl(null, Validators.required),
    dateAudiance: new FormControl(Date.now()),
    phaseId: new FormControl(),
  });

  FindAllAudianceByPhase() {


    this.audianceService.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listAudiance", resultat);
      this.audianceService.listAudiance = resultat;
    });
  }

  ngOnInit(): void {

    /*this.statusaudianceService.getListStatusAudiance().subscribe((resultat: []) => {
      this.liststatusaudiance = resultat;


    });*/

    this.phaseId = this.route.snapshot.paramMap.get('id');

    //  console.log("affaireid" + this.affaireId);

    this.FindAllAudianceByPhase();

    this.cols = [
      { header: 'Titre' },
      { header: "Date de l'audiance" },
      { header: "Status de l'audiance" },
      { header: "Etat de l'affaire" },

    ];


    this.items = [
      { label: 'Phase' },
      { label: 'Opérations' },
    ];

    this.home = { icon: 'pi pi-home' };


  }

  resetAudianceForm() {
    this.audianceForm.reset();
    this.submitted = false;

  }

  showChange(event) {
    console.log(event);
    console.log(this.audianceForm.value);
  }

  confirm2(id: any) {

    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {

        this.audianceService.deleteAudiance(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.audianceService.listAudiance.findIndex(el => el['idAudiance'] == id);
              this.audianceService.listAudiance.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Audiance supprimé avec succès' });
            },
            error => console.log(error));


      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

  showBasicDialogadd() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicadd = true;

  }

  showBasicDialogupdate(id) {
    console.log("dialog");
    console.log("id", id);

    // tslint:disable-next-line: no-unused-expression
    this.displayBasicupdate = true;
    this.idAudiance = id;
    console.log("idaudiance", this.idAudiance)
  }


}
