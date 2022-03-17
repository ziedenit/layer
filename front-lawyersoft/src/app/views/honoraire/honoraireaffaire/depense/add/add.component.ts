import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { HonoraireService } from 'src/app/services/honoraire.service';
import { Honnoraire } from 'src/app/entitie/Honnoraire';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api'
import { FormGroup, FormControl } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  listHonnoraire: Honnoraire[];
  listHonnorairedepense: Honnoraire[];
  honnoraire: Honnoraire;
  selectedHonnoraire: Honnoraire;
  selectedHonnorairedepense: Honnoraire;
  selectedHonnoraireversment: Honnoraire;


  listPhase: any;
  phase: Phase;
  selectedPhase: Phase;
  Phaseid: any;



  cols: any[];
  msgs: Message[] = [];
  first: number = 0;
  items: MenuItem[];
  home: MenuItem;
  affaire: Affaire;



  submitted = false;
  listAffaire: Affaire;

  isValidFormSubmitted = false;


  // tslint:disable-next-line: no-input-rename
  @Input("displayBasicaddepense") displayBasicaddepense: boolean;
  // tslint:disable-next-line: no-input-rename
  @Input("affaireId")
  affaireId: any;
  @Output() totalDepense = new EventEmitter();


  honoraireForm = new FormGroup({
    honnoraireId: new FormControl(null),
    titre: new FormControl(),
    montant: new FormControl(),
    dateHonnoraire: new FormControl(),
    affaireId: new FormControl(),
    consultationId: new FormControl(),

  });

  constructor(
    private affaireservice: AffaireService,
    private honoraireservice: HonoraireService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }



  findByAffaireType(){
    this.honoraireservice.findByAffaireType(this.affaireId, 'depense').subscribe(resultat => {
      this.honoraireservice.listHonnorairedepense = resultat;
      console.log("listHonnorairedepense", this.listHonnorairedepense);

    });
  }


  ngOnInit(): void {

    this.affaireservice.getAffairebyid(this.affaireId).subscribe(affaire => {
      console.log('affaire', affaire);
      this.affaire = affaire;
    });


  }

  showBasicDialogaddpense() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicaddepense = true;

  }

  resetDepenseForm() {
    this.honoraireForm.reset();
    this.submitted = false;

  }

  showChange(event) {
    console.log(event);
    console.log(this.honoraireForm.value);
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Ajout Dépense effectué avec succès' });
  }





  addepense(): void {


    this.submitted = true;
    console.log("valueform" + this.honoraireForm.value);
    if (this.honoraireForm.valid) {

      console.log(this.honoraireForm.value);

      this.honoraireForm.value.affaireId =  this.affaire;
      this.honoraireForm.value.type = 'depense';

      this.honoraireservice.addHonoraire(this.honoraireForm.value).subscribe(data => {
        this.showSuccess();
        this.totalDepense.emit(data.montant);
        this.displayBasicaddepense = false;
        this.honoraireservice.listHonnorairedepense.push(data);
        this.findByAffaireType();

      });
    }
  }

  get f() {
    return this.honoraireForm.controls;
  }

}
