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
import { SelectItem } from 'primeng/api';
import { MultiSelect } from 'primeng/multiselect/public_api';


@Component({
  selector: 'app-updateencours',
  templateUrl: './updateencours.component.html',
  styleUrls: ['./updateencours.component.css']
})
export class UpdateencoursComponent implements OnInit {
  submitted = false;
  listTypeaffaire: [];
  listIntervenant: Intervenant[];
  listAuxiliaire: Auxiliaire[];
  listUser: User[];
  listAffaire: Affaire[];
  idAffaire: any;
  items: MenuItem[];
  home: MenuItem;


  etats = [
    { label: 'En cours', value: 'En cours' },
    { label: 'Pré-contentitieux', value: 'Pré-contentitieux' },
  ];

  isValidFormSubmitted = false;
  affaire: Affaire;

  affaireForm = new FormGroup({
    affaireId: new FormControl(null),
    titre: new FormControl(null, Validators.required),
    reference: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    etat: new FormControl(null, Validators.required),
    etatavant: new FormControl(null, Validators.required),
    dateCreation: new FormControl(Date.now()),
    dateCloture: new FormControl(Date.now()),
    typeaffaireId: new FormControl(null, Validators.required),
    intervenant: new FormControl(null, Validators.required),
    auxiliaire: new FormControl(null, Validators.required),
    user: new FormControl(null, Validators.required),
  });


  constructor(
    private affaireservice: AffaireService,
    private typeaffaireservice: TypeaffaireService,
    private messageService: MessageService,
    private router: Router,
    private intervenantService: IntervenantService,
    private auxiliaireService: AuxiliaireService,
    private userService: UserService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {


    this.typeaffaireservice.getListTypeAffaire().subscribe((resultat: []) => {
      this.listTypeaffaire = resultat;

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

    this.idAffaire = this.route.snapshot.paramMap.get('id');

    this.affaireservice.getAffairebyid(this.idAffaire).subscribe(affaire => {
      console.log('aux', affaire);
      this.affaire = affaire;
      this.affaireForm.setValue(affaire);
    });

    this.items = [
      {label:'Affaire'},
      {label:'En cours'},
      {label:'Modifier'},

  ];

    this.home = {icon: 'pi pi-home'};

  }

  get f() { return this.affaireForm.controls; }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Mise a jours effectué avec succès' });
  }


  updateAffaire() {
    if (this.affaireForm.valid) {
      this.submitted = false;
      this.affaireservice.updateAffaire(this.affaireForm.value).subscribe(auxiliaire => {
        this.showSuccess();
        this.router.navigateByUrl('/affaire/encours');

      });
    } else {
      this.submitted = true;
    }
  }


  resetAffaireForm() {
    this.affaireForm.setValue(this.affaire);
    this.submitted = false;
  }
}
