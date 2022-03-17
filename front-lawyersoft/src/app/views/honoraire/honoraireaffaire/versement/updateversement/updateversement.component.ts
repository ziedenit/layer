import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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
  selector: 'app-updateversement',
  templateUrl: './updateversement.component.html',
  styleUrls: ['./updateversement.component.css']
})
export class UpdateversementComponent implements OnInit {
  listHonnoraire: Honnoraire[];
  listHonnoraireversement: Honnoraire[];
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
  affaireId: any;



  submitted = false;
  listAffaire: Affaire;

  isValidFormSubmitted = false;


  @Input('displayBasicupdateversement') displayBasicupdateversement: boolean;

  @Input('honoraireId')
  honoraireId: any;

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

    this.honoraireservice.findByAffaireType(this.affaireId, 'versement').subscribe(resultat => {
      this.honoraireservice.listHonnoraireversement = resultat;
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
    this.displayBasicupdateversement = true;

  }

  showChange(event) {
    console.log(event);
    console.log(this.honoraireForm.value);
  }


  get f() { return this.honoraireForm.controls; }


  updateversement() {

    this.submitted = false;
    this.honoraireservice.updateHonoraire(this.honoraireForm.value).subscribe(data => {
      this.showInfo();
      this.displayBasicupdateversement = false;
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
