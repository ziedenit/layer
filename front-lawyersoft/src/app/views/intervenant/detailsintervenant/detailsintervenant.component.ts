import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { Router, ActivatedRoute  } from '@angular/router';
import { TypeintervenantService } from 'src/app/services/typeintervenant.service';
import { MessageService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-detailsintervenant',
  templateUrl: './detailsintervenant.component.html',
  styleUrls: ['./detailsintervenant.component.css']
})
export class DetailsintervenantComponent implements OnInit {

  submitted = false;
  listTypeIntervenant: [];
  intervenantid: any;
  items: MenuItem[];
  home: MenuItem;


  intervenantForm = new FormGroup({
    intervenantid: new FormControl(null),
    cin: new FormControl(),
    nom: new FormControl(),
    prenom: new FormControl(),
    dateNaissance: new FormControl(),
    email: new FormControl(),
    gouvernorat: new FormControl(),
    ville: new FormControl(),
    adresse: new FormControl(),
    codePostal: new FormControl(),
    profession: new FormControl(),
    telephone: new FormControl(),
    typeintervenantId: new FormControl()
  });

  intervenant: Intervenant;


  constructor(private typeintervenantservice: TypeintervenantService, private intervenantService: IntervenantService,
              private messageService: MessageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.typeintervenantservice.getListTypeIntervenant().subscribe((typeintervenant: []) => {

      this.listTypeIntervenant = typeintervenant;
    });

    this.intervenantid = this.route.snapshot.paramMap.get('id');

    this.intervenantService.getIntervenantbyid(this.intervenantid).subscribe(data => {
      this.intervenant = data;
      this.intervenantForm.setValue(data);
    }, error => console.log(error));

    this.items = [
      {label:'Intervenant'},
      {label:'Détails'},

  ];

    this.home = {icon: 'pi pi-home'};
  }

  get f() { return this.intervenantForm.controls; }


}
