import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { Tache } from 'src/app/entitie/Tache';
import { TacheService } from 'src/app/services/tache.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatetravailfaire',
  templateUrl: './updatetravailfaire.component.html',
  styleUrls: ['./updatetravailfaire.component.css']
})
export class UpdatetravailfaireComponent implements OnInit {
  submitted = false;
  listTache: Tache[];
  items: MenuItem[];
  home: MenuItem;
  idtache: any;
  tache: Tache;
  phaseId: any;

  @Input('displayBasicupdate') displayBasicupdate: boolean;

  @Input('idTache')
  idTache: any;


  etat = [
   /* { label: 'En cours', value: 'En cours' },*/
    { label: 'Cloturé', value: 'Cloturé' },
    { label: 'Reporter', value: 'Reporter' },
  ];

  isValidFormSubmitted = false;


  constructor(private phaseservice: PhaseService,
    private tacheservice: TacheService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute) {
      this.phaseId = this.route.snapshot.paramMap.get('id');

    }

  tacheForm = new FormGroup({
    idTache: new FormControl(null, Validators.required),
    titre: new FormControl(null, Validators.required),
    etat: new FormControl(null, Validators.required),
    dateDebut: new FormControl(null, Validators.required),
    phaseId: new FormControl(),
  });


  findAllbyphase() {
    this.phaseId = this.route.snapshot.paramMap.get('id');

    //  console.log("affaireid" + this.affaireId);

    this.tacheservice.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listTache", resultat);
      this.listTache = resultat;
    })
  }

   // tslint:disable-next-line: use-lifecycle-interface
   ngOnChanges(changes: SimpleChanges): void {
    this.tacheForm.setValue(changes.idTache.currentValue)
    console.log(changes.idTache.currentValue)

  }

  FindAlltacheByPhase() {

    this.tacheservice.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listAudiance", resultat);
      this.tacheservice.listTache = resultat;
    });
  }

  ngOnInit(): void {

    //this.idtache = this.route.snapshot.paramMap.get('id');

    if (this.idTache != null) {

    this.tacheservice.getTachebyid(this.idtache).subscribe(tache => {
      console.log('tache', tache);
      this.tache = tache;
      this.tacheForm.setValue(tache);
    });
  }

    this.items = [
      { label: 'Phase' },
      { label: 'Opération' },
      { label: 'Travaille à faire' },
      { label: 'Modifier' },
    ];

    this.home = { icon: 'pi pi-home' };

  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
  }


  updateTache() {
    if (this.tacheForm.valid) {
      this.submitted = false;
      this.tacheservice.updateTache(this.tacheForm.value).subscribe(tache => {
        this.showInfo();
        this.displayBasicupdate = false;
        this.FindAlltacheByPhase();
      });
    } else {
      this.submitted = true;
    }
  }


  resetTacheForm() {
    this.tacheForm.setValue(this.tache);
    this.submitted = false;
  }
}
