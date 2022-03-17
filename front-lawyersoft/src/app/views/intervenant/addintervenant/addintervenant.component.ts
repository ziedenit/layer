import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { TypeintervenantService } from 'src/app/services/typeintervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { TypeIntervenant } from 'src/app/entitie/TypeIntervenant';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService, MenuItem } from 'primeng/api';


@Component({
  selector: 'app-addintervenant',
  templateUrl: './addintervenant.component.html',
  styleUrls: ['./addintervenant.component.css']
})
export class AddintervenantComponent implements OnInit {

  submitted = false;
  listTypeIntervenant: [];
  intervenantForm = new FormGroup({
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

  items: MenuItem[];
  home: MenuItem;

  constructor(private Typeintervenantservice: TypeintervenantService, private intervenantService: IntervenantService,
              private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.Typeintervenantservice.getListTypeIntervenant().subscribe((typeinter: []) => {
      this.listTypeIntervenant = typeinter;
    });

    this.items = [
      {label:'Intervenant'},
      {label:'Ajouter'},

  ];

    this.home = {icon: 'pi pi-home'};
  }

  resetIntervenantForm() {
    this.intervenantForm.reset();
    this.submitted = false;

  }

  addIntervenant(): void {
    this.submitted = true;
    console.log(this.intervenantForm)

    if (this.intervenantForm.valid) {
      console.log(this.intervenantForm.value);
      this.intervenantService.addIntervenant(this.intervenantForm.value).subscribe(data => {
        this.showSuccess();
        this.router.navigateByUrl('/intervenant');
        console.log(data);
      });
    }
  }

  get f() { return this.intervenantForm.controls; }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Intervenant ajouté avec succès' });
  }




}
