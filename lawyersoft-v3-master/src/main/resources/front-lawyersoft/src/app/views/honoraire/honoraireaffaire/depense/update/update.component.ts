import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { HonoraireService } from 'src/app/services/honoraire.service';
import { Honnoraire } from 'src/app/entitie/Honnoraire';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


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
  affaireId: any;



  submitted = false;
  listAffaire: Affaire;

  isValidFormSubmitted = false;


  @Input('displayBasicupdatedepense') displayBasicupdatedepense: boolean;

  @Input('honoraireId')
  honoraireId: any;
  @Output() totalDepense = new EventEmitter();

  honoraireForm = new FormGroup({
    honnoraireId: new FormControl(null, Validators.required),
    titre: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
    montant: new FormControl(null, Validators.required),
    reste: new FormControl(),
    dateHonnoraire: new FormControl(null, Validators.required),
    affaireId: new FormControl(null, Validators.required),
    consultationId: new FormControl(null, Validators.required),

  });


  constructor(
    private affaireservice: AffaireService,
    private honoraireservice: HonoraireService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

    this.affaireId = this.route.snapshot.paramMap.get('id');

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    this.honoraireForm.setValue(changes.honoraireId.currentValue)
    //console.log(changes.honoraireId.currentValue)

  }

    FindAllbyaffairetype(){

    this.honoraireservice.findByAffaireType(this.affaireId, 'depense').subscribe(resultat => {
      this.honoraireservice.listHonnorairedepense = resultat;
    });

  }

  ngOnInit(): void {

    if (this.honoraireId != null) {
      //console.log("eeee", this.idAudiance)
      this.honoraireservice.getHonorairebyid(this.honoraireId).subscribe(honnoraire => {
        console.log('honnoraire', honnoraire);
        this.honnoraire = honnoraire;
        this.honoraireForm.setValue(honnoraire);
      });
    }
  }


  showBasicDialogupdate() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicupdatedepense = true;

  }

  showChange(event) {
    console.log(event);
    console.log(this.honoraireForm.value);
  }


  get f() { return this.honoraireForm.controls; }


  updatedepense() {

    this.submitted = false;
    this.honoraireservice.updateHonoraire(this.honoraireForm.value).subscribe(data => {
      this.showInfo();
      this.totalDepense.emit(data.montant);
      this.displayBasicupdatedepense = false;
      // tslint:disable-next-line: no-unused-expression
      this.FindAllbyaffairetype();
    });

  }


  resetHonoraireForm() {
    this.honoraireForm.setValue(this.honnoraire);
    this.submitted = false;
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
  }

}
