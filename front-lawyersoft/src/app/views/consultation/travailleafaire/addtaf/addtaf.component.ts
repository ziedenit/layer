import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'src/app/services/consultation.service';
import { Consultation } from 'src/app/entitie/Consultation';
import { MessageService } from 'primeng/api';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entitie/User';
import { SelectItem } from 'primeng/api';
import { MultiSelect } from 'primeng/multiselect/public_api';

@Component({
  selector: 'app-addtaf',
  templateUrl: './addtaf.component.html',
  styleUrls: ['./addtaf.component.css'],
  styles: [`
  .ui-grid label {
      display: inline-block;
      margin: 3px 0px 0px 4px;
  }
`]
})
export class AddtafComponent implements OnInit {

  date_value: number = Date.now();

  item: string;


  submitted = false;
  listIntervenant: Intervenant[];
  listUser: { label: any, value: any }[] = [];

  etat = [
   /* { label: 'En cours', value: 'En cours' },
    { label: 'Cloturé', value: 'Cloturé' },
    { label: 'Reporter', value: 'Reporter' },*/
  ];


  isValidFormSubmitted = false;
  consultation: Consultation = new Consultation();

  tafForm = new FormGroup({
    titre: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    dateDebut: new FormControl(null, Validators.required),
    type: new FormControl('taf'),
    adresse: new FormControl(null, Validators.required),
    user: new FormControl(null, Validators.required),
  });

  constructor(
    private consultationservice: ConsultationService,
    private messageService: MessageService,
    private router: Router,
    private intervenantService: IntervenantService,
    private userService: UserService
  ) { }

  ngOnInit(): void {


    this.userService.getListUser().subscribe((user: User[]) => {
      user.forEach(user => {
        this.listUser.push({ label: user.nom + " " + user.prenom, value: user })
      })

    });

  }

  resetRdvForm() {
    this.tafForm.reset();
    this.submitted = false;
  }

  addtaf(): void {
    console.log("ss");
    this.submitted = true;
    console.log(this.tafForm.value);
    if (this.tafForm.valid) {



      this.consultationservice.addConsultation(this.tafForm.value).subscribe(data => {
        this.showSuccess();
        this.router.navigateByUrl('/taf');
        console.log(data);
      });
    }
  }

  get f() { return this.tafForm.controls; }

  showChange(event) {
    console.log(event);
    console.log(this.tafForm.value);
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Travail à faire ajouté avec succès' });
  }

}
