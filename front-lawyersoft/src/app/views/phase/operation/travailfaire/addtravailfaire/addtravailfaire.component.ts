import { Component, OnInit, Input } from '@angular/core';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { Tache } from 'src/app/entitie/Tache';
import { TacheService } from 'src/app/services/tache.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-addtravailfaire',
  templateUrl: './addtravailfaire.component.html',
  styleUrls: ['./addtravailfaire.component.css'],
  providers: [MessageService]

})
export class AddtravailfaireComponent implements OnInit {


  activeIndex: number = 1;

  items: MenuItem[];
  cols: any[];
  cols1: any[];
  cols2: any[];
  msgs: Message[] = [];
  first: number = 0;
  home: MenuItem;
  @Input("displayBasicadd") displayBasicadd: boolean;
  submitted = false;
  affaireId: any;
  phase: Phase;
  @Input("phaseId")
  phaseId: any;


  listTache: Tache[];
  tache: Tache;
  selectedTache: Tache;
  idTache: any;

  statuts = [
    { label: 'Pour entendre les témoins', value: 'Pour entendre les témoins' },
    { label: 'Pour notre réplique', value: 'Pour notre réplique' },
    { label: 'Lecture de jugement', value: 'Lecture de jugement' },

  ];

  etat = [
    /*  { label: 'En cours', value: 'En cours' },
    { label: 'Cloturé', value: 'Cloturé' },
    { label: 'Reporter', value: 'Reporter' },**/
  ];

  isValidFormSubmitted = false;



  constructor(
    private phaseservice: PhaseService,
    private tacheService: TacheService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) { }


  tacheForm = new FormGroup({
    titre: new FormControl(null, Validators.required),
    dateDebut: new FormControl(null, Validators.required),
    phaseId: new FormControl(),

  });




  ngOnInit(): void {
    console.log("addphaseid", this.phaseId)


    this.phaseservice.getPhasebyid(this.phaseId).subscribe(phase => {
      this.phase = phase;

    });
  }

  showBasicDialogadd() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicadd = true;
  }

  resetTacheForm() {
    this.tacheForm.reset();
    this.submitted = false;

  }

  showChange1(event) {
    console.log(event);
    console.log(this.tacheForm.value);
  }


  showSuccess2() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Ajout Travaille a faire effectué avec succès' });
  }



  FindAllTacheByPhase() {
    this.tacheService.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listTache", resultat);
      this.tacheService.listTache = resultat;
    });
  }


  addtache(): void {
    console.log("valueform");

    this.submitted = true;

    if (this.tacheForm.valid) {
      console.log(this.tacheForm.value);


      // this.audianceForm.value.audianceId = this.audiance;
      this.tacheForm.value.phaseId = this.phase;

      this.tacheService.addTache(this.tacheForm.value).subscribe(data => {
        this.showSuccess2();
        console.log(data);
        this.displayBasicadd = false;
        this.tacheService.listTache.push(data);
        this.FindAllTacheByPhase()


      });

    }
  }

  get f1() {
    return this.tacheForm.controls;
  }
}
