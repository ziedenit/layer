import { Component, OnInit, Input } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { HonoraireService } from 'src/app/services/honoraire.service';
import { Honnoraire } from 'src/app/entitie/Honnoraire';
import { TypeAffaire } from 'src/app/entitie/TypeAffaire';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api'
import { FormGroup, FormControl } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';

@Component({
  selector: 'app-honoraireaffaire',
  templateUrl: './honoraireaffaire.component.html',
  styleUrls: ['./honoraireaffaire.component.css']
})
export class HonoraireaffaireComponent implements OnInit {

  listIntervenant: Intervenant[];
  listHonnoraire: Honnoraire[];
  listHonnorairedepense: Honnoraire[];
  listHonnoraireversement: Honnoraire[];
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
  affaireId: any;
  affaire: Affaire;

  displayBasic1: boolean;


  submitted = false;
  listAffaire: Affaire;
  affaireid: any;

  isValidFormSubmitted = false;

  displayBasicaddepense: boolean;
  displayBasicaddversement: boolean;

  displayBasicupdate: boolean;

  constructor(
    private affaireservice: AffaireService,
    private honoraireservice: HonoraireService,
    private phaseservice: PhaseService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private intervenantService: IntervenantService,

  ) { }


  affaireForm = new FormGroup({
    affaireId: new FormControl(null),
    titre: new FormControl(),
    reference: new FormControl(),
    description: new FormControl(),
    intervenant: new FormControl(),
    auxiliaire: new FormControl(),
    user: new FormControl(),
    dateCreation: new FormControl(),
    dateCloture: new FormControl(),
    etat: new FormControl(),
    etatavant: new FormControl(),
    typeaffaireId: new FormControl(),
  });



  honoraireForm = new FormGroup({
    honoraireId: new FormControl(null),
    titre: new FormControl(),
    montant: new FormControl(),
    dateHonnoraire: new FormControl(),
    affaireId: new FormControl(),
    consultationId: new FormControl(),
    typehonoraireId: new FormControl(),

  });

  ngOnInit(): void {



    this.intervenantService.getListIntervenant().subscribe((res: Intervenant[]) => {
      this.listIntervenant = res;
      console.log(this.listIntervenant);
    });

    this.affaireId = this.route.snapshot.paramMap.get('id');



    //  console.log("affaireid" + this.affaireId);
    this.affaireservice.getAffairebyid(this.affaireId).subscribe(affaire => {
      console.log('affaire', affaire);
      this.affaire = affaire;
      this.affaireForm.setValue(affaire);
    });

    this.honoraireservice.findAllAffaire(this.affaireId).subscribe(resultat => {
      console.log("listHonnoraire", resultat);
      this.listHonnoraire = resultat;
    });



    this.cols = [
      { header: 'Titre' },
      { header: 'Date' },
      { header: 'Montant' },

    ];

    this.items = [
      { label: 'Honoraires' },
      { label: 'Liste des honoraires' },
      { label: 'Détails honoraires' },

    ];

    this.home = { icon: 'pi pi-home' };


  }

}
