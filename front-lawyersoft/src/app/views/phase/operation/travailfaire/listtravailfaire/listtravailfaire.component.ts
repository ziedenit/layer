import { Component, OnInit } from '@angular/core';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { Tache } from 'src/app/entitie/Tache';
import { TacheService } from 'src/app/services/tache.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-listtravailfaire',
  templateUrl: './listtravailfaire.component.html',
  styleUrls: ['./listtravailfaire.component.css'],
  providers: [MessageService]

})
export class ListtravailfaireComponent implements OnInit {


  items: MenuItem[];
  cols1: any[];
  msgs: Message[] = [];
  first: number = 0;
  home: MenuItem;
  displayBasicadd: boolean;
  displayBasicupdate: boolean;
  submitted = false;
  affaireId: any;
  phase: Phase;
  phaseId: any;


  listTache: Tache[];
  tache: Tache;
  selectedTache: Tache;
  idTache: any;

  isValidFormSubmitted = false;

  constructor(
    private phaseservice: PhaseService,
    public tacheService: TacheService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  )
  {
    this.phaseId = this.route.snapshot.paramMap.get('id');
    console.log("phaseId", this.phaseId);
   }

  tacheForm = new FormGroup({
    titre: new FormControl(null, Validators.required),
    etat: new FormControl(null, Validators.required),
    dateDebut: new FormControl(Date.now()),
    phaseId: new FormControl(),

  });

  FindAllTacheByPhase() {
    this.tacheService.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listTache", resultat);
      this.tacheService.listTache = resultat;
    });
  }

  ngOnInit(): void {
    this.phaseId = this.route.snapshot.paramMap.get('id');

    this.FindAllTacheByPhase();


    this.cols1 = [
      { header: 'Titre' },
      { header: "Date de début" },
      { header: "Etat" },

    ];

    this.items = [
      { label: 'Phase' },
      { label: 'Opérations' },
    ];

    this.home = { icon: 'pi pi-home' };
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
    this.idTache = id;
    console.log("idTache", this.idTache)
  }

  resetTacheForm() {
    this.tacheForm.reset();
    this.submitted = false;

  }


  showChange1(event) {
    console.log(event);
    console.log(this.tacheForm.value);
  }

  confirm3(id: any) {

    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {

        this.tacheService.deleteTache(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.tacheService.listTache.findIndex(el => el['idTache'] == id);
              this.tacheService.listTache.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Tache supprimé avec succès' });
            },
            error => console.log(error));


      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
