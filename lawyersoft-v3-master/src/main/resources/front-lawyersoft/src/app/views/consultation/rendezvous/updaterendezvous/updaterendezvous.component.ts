import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'src/app/services/consultation.service';
import { Consultation } from 'src/app/entitie/Consultation';
import { MessageService, MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entitie/User';
import { SelectItem } from 'primeng/api';
import { MultiSelect } from 'primeng/multiselect/public_api';

@Component({
  selector: 'app-updaterendezvous',
  templateUrl: './updaterendezvous.component.html',
  styleUrls: ['./updaterendezvous.component.css']
})
export class UpdaterendezvousComponent implements OnInit {

  submitted = false;
  listIntervenant: Intervenant[];
  listUser: User[];
  listConsultation: Consultation[];
  items: MenuItem[];
  home: MenuItem;
  consultationid: any;

  etat = [
   /* { label: 'En cours', value: 'En cours' },*/
    { label: 'Cloturé', value: 'Cloturé' },
    { label: 'Reporter', value: 'Reporter' },
  ];

  isValidFormSubmitted = false;
  consultation: Consultation;

  rdvForm = new FormGroup({
    consultationId: new FormControl(null),
    titre: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    dateDebut: new FormControl(null, Validators.required),
    etat: new FormControl(null, Validators.required),
    type: new FormControl('rdv'),
    adresse: new FormControl(null, Validators.required),
    intervenant: new FormControl(null, Validators.required),
    user: new FormControl(null, Validators.required),

  });

  constructor(
    private consultationservice: ConsultationService,
    private messageService: MessageService,
    private router: Router,
    private intervenantService: IntervenantService,
    private userService: UserService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.intervenantService.getListIntervenant().subscribe((res: Intervenant[]) => {
      this.listIntervenant = res;
      console.log(this.listIntervenant);

    });

    this.userService.getListUser().subscribe((user: User[]) => {
      this.listUser = user;
      console.log(this.listUser);

    });


    this.consultationid = this.route.snapshot.paramMap.get('id');

    this.consultationservice.getConsultationbyid(this.consultationid).subscribe(consultation => {
      console.log("rdvForm" + this.rdvForm);

      this.consultation = consultation;
      this.rdvForm.setValue(consultation);

      console.log("rdvForm" + this.rdvForm);
    });


    this.items = [
      { label: 'Consultation' },
      { label: 'Rendez-vous' },
      { label: 'Modifier' },

    ];

    this.home = { icon: 'pi pi-home' };

  }

  get f() { return this.rdvForm.controls; }



  updateRdv() {
    if (this.rdvForm.valid) {
      this.submitted = false;
      this.consultationservice.updateConsultation(this.rdvForm.value).subscribe(consultation => {
        this.showSuccess();
        this.router.navigateByUrl('/rendez-vous');

      });
    } else {
      this.submitted = true;
    }
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Mise a jours effectué avec succès' });
  }

  resetRdvForm() {
    this.rdvForm.setValue(this.consultation);
    this.submitted = false;
  }


}
