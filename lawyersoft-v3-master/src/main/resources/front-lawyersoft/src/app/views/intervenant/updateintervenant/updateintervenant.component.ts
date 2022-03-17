import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { Router, ActivatedRoute  } from '@angular/router';
import { TypeintervenantService } from 'src/app/services/typeintervenant.service';
import { MessageService, MenuItem } from 'primeng/api';


@Component({
  selector: 'app-updateintervenant',
  templateUrl: './updateintervenant.component.html',
  styleUrls: ['./updateintervenant.component.css']
})
export class UpdateintervenantComponent implements OnInit {


  submitted = false;
  listTypeIntervenant: [];
  intervenantid: any;
  items: MenuItem[];
  home: MenuItem;

  intervenantForm = new FormGroup({
    intervenantid: new FormControl(null),
    cin: new FormControl(null, [Validators.required, Validators.max(999999999)]),
    nom: new FormControl(null, Validators.required),
    prenom: new FormControl(null, Validators.required),
    dateNaissance: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gouvernorat: new FormControl(null, Validators.required),
    ville: new FormControl(null, Validators.required),
    adresse: new FormControl(null, Validators.required),
    codePostal: new FormControl(null, [Validators.required, Validators.max(9999)]),
    profession: new FormControl(null, Validators.required),
    telephone: new FormControl(null, [Validators.required, Validators.max(99999999)]),
    typeintervenantId: new FormControl(null, Validators.required)
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
      console.log('intervenant', data.dateNaissance);
      this.intervenant = data;
      this.intervenantForm.setValue(data);
    }, error => console.log(error));

    this.items = [
      {label:'Intervenant'},
      {label:'Modifier'},
  ];

    this.home = {icon: 'pi pi-home'};

  }
  get f() { return this.intervenantForm.controls; }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Mise a jours effectué avec succès' });
  }

  updateIntervenant() {
    if (this.intervenantForm.valid) {
      this.submitted = false;
      this.intervenantService.updateIntervenant(this.intervenantForm.value).subscribe(intervenant => {
        this.showSuccess();
        this.router.navigateByUrl('/intervenant');
      });
    } else {
      this.submitted = true;
    }
  }

  resetIntervenantForm() {
    this.intervenantForm.setValue(this.intervenant);
    this.submitted = false;
  }




}
