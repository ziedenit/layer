import { Auxiliaire } from './../../../entitie/Auxiliaire';
import { AuxiliaireService } from './../../../services/auxiliaire.service';
import { TypeauxiliaireService } from './../../../services/typeauxiliaire.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, MenuItem } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateauxiliaire',
  templateUrl: './updateauxiliaire.component.html',
  styleUrls: ['./updateauxiliaire.component.css']
})

export class UpdateauxiliaireComponent implements OnInit {

  submitted = false;
  listTypeAuxiliaire: [];
  idAuxiliaire: any;
  items: MenuItem[];
  home: MenuItem;

  auxiliaireForm = new FormGroup({
    auxiliaireId: new FormControl(null),
    nom: new FormControl(null, Validators.required),
    prenom: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gouvernorat: new FormControl(null, Validators.required),
    ville: new FormControl(null, Validators.required),
    adresse: new FormControl(null, Validators.required),
    telephone: new FormControl(null, [Validators.required, Validators.max(99999999)]),
    typeauxiliaireId: new FormControl(null, Validators.required)
  });

  auxiliaire: Auxiliaire;

  constructor(private typeauxiliaireService: TypeauxiliaireService, private auxiliaireService: AuxiliaireService,
              private messageService: MessageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.typeauxiliaireService.getListTypeAuxiliaire().subscribe((typeAux: []) => {

      this.listTypeAuxiliaire = typeAux;
    });

    this.idAuxiliaire = this.route.snapshot.paramMap.get('id');

    this.auxiliaireService.getAuxiliairebyid(this.idAuxiliaire).subscribe(auxiliaire => {
      console.log('aux', auxiliaire);
      this.auxiliaire = auxiliaire;
      this.auxiliaireForm.setValue(auxiliaire);
    });
    this.items = [
      {label:'Auxiliaire'},
      {label:'Modifier'},
  ];

    this.home = {icon: 'pi pi-home'};

  }

  get f() { return this.auxiliaireForm.controls; }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Mise a jours effectué avec succès' });
  }

  updateAuxiliaire() {
    if (this.auxiliaireForm.valid) {
      this.submitted = false;
      this.auxiliaireService.updateAuxiliaire(this.auxiliaireForm.value).subscribe(auxiliaire => {
        this.showSuccess();
        this.router.navigateByUrl('/auxiliaire');
      })
    } else {
      this.submitted = true;
    }
  }


  resetAuxiliaireForm() {
    this.auxiliaireForm.setValue(this.auxiliaire);
    this.submitted = false;
  }

}
