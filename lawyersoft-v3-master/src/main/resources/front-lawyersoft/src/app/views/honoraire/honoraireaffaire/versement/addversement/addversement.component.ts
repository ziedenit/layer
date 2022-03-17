
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
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
  selector: 'app-addversement',
  templateUrl: './addversement.component.html',
  styleUrls: ['./addversement.component.css']
})
export class AddversementComponent implements OnInit {


  listHonnoraire: Honnoraire[];
  listHonnorairedepense: Honnoraire[];
  honnoraire: Honnoraire;
  selectedHonnoraire: Honnoraire;
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
  @Input("displayBasicaddversement") displayBasicaddversement: boolean;
  // tslint:disable-next-line: no-input-rename
  @Input("affaireId")
  affaireId: any;
  @Output() totalVersement = new EventEmitter();




  honoraireForm = new FormGroup({
    honoraireId: new FormControl(null),
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


  findByAffaireType() {
    this.honoraireservice.findByAffaireType(this.affaireId, 'versement').subscribe(resultat => {
      this.honoraireservice.listHonnoraireversement = resultat;

    });
  }
  ngOnInit(): void {

    this.affaireservice.getAffairebyid(this.affaireId).subscribe(affaire => {
      console.log('affaire', affaire);
      this.affaire = affaire;
    });


  }

  showBasicDialogaddversement() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicaddversement = true;

  }

  resetVersementForm() {
    this.honoraireForm.reset();
    this.submitted = false;

  }

  showChange(event) {
    console.log(event);
    console.log(this.honoraireForm.value);
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Ajout Vérsement effectué avec succès' });
  }

  addversement(): void {


    this.submitted = true;
    console.log("valueform" + this.honoraireForm.value);
    if (this.honoraireForm.valid) {

      console.log(this.honoraireForm.value);

      this.honoraireForm.value.affaireId = this.affaire;
      this.honoraireForm.value.type = 'versement';

      this.honoraireservice.addHonoraire(this.honoraireForm.value).subscribe(data => {
        this.showSuccess();
        this.totalVersement.emit(data.montant);
        this.displayBasicaddversement = false;
        this.honoraireservice.listHonnoraireversement.push(data);
        this.findByAffaireType();
      });
    }
  }

  get f() {
    return this.honoraireForm.controls;
  }

}
