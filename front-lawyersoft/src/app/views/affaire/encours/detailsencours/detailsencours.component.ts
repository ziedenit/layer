import { Component, OnInit } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { TypeaffaireService } from 'src/app/services/typeaffaire.service';
import { MessageService, MenuItem } from 'primeng/api';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { Auxiliaire } from 'src/app/entitie/Auxiliaire';
import { AuxiliaireService } from 'src/app/services/auxiliaire.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entitie/User';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';


@Component({
  selector: 'app-detailsencours',
  templateUrl: './detailsencours.component.html',
  styleUrls: ['./detailsencours.component.css']
})
export class DetailsencoursComponent implements OnInit {


  listTypeaffaire: [];
  listIntervenant: Intervenant[];
  listAuxiliaire: Auxiliaire[];
  listUser: User[];
  idAffaire: any;
  items: MenuItem[];
  home: MenuItem;


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

  affaire: Affaire;
  phase : Phase;


  constructor(
    private affaireservice: AffaireService,
    private typeaffaireservice: TypeaffaireService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private intervenantService: IntervenantService,
    private auxiliaireService: AuxiliaireService,
    private userService: UserService,
    private phaseservice: PhaseService
  ) { }

  ngOnInit(): void {

    this.idAffaire = this.route.snapshot.paramMap.get('id');

    this.phaseservice.findAllAffaire(this.idAffaire).subscribe(phase => {
      this.phase = phase;
      console.log("phase",this.phase);
    });

    this.intervenantService.getListIntervenant().subscribe((res: Intervenant[]) => {
      this.listIntervenant = res;
      console.log(this.listIntervenant);
    });

    this.auxiliaireService.getListAuxiliaire().subscribe((aux: Auxiliaire[]) => {
      this.listAuxiliaire = aux;
      console.log(this.listAuxiliaire);

    });

    this.userService.getListUser().subscribe((aux: User[]) => {
      this.listUser = aux;
      console.log(this.listUser);
    });

    this.typeaffaireservice.getListTypeAffaire().subscribe((typeaffaire: []) => {

      this.listTypeaffaire = typeaffaire;
    });


    this.idAffaire = this.route.snapshot.paramMap.get('id');


    this.affaireservice.getAffairebyid(this.idAffaire).subscribe(affaire => {
      console.log('affaire', affaire);
      this.affaire = affaire;
      this.affaireForm.setValue(affaire);
    });

    this.items = [
      {label:'Affaire'},
      {label:'En cours'},
      {label:'Détails'},

  ];

    this.home = {icon: 'pi pi-home'};
  }

  }




