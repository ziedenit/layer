import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { TribunalService } from 'src/app/services/tribunal.service';
import { Tribunal } from 'src/app/entitie/Tribunal';
import { Router, ActivatedRoute } from '@angular/router';
import { TypetribunauxService } from 'src/app/services/typetribunaux.service';
import { MessageService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-updatetribunaux',
  templateUrl: './updatetribunaux.component.html',
  styleUrls: ['./updatetribunaux.component.css'],

})
export class UpdatetribunauxComponent implements OnInit {

  id: any;

  submitted = false;
  listTypeTribunaux: [];
  isValidFormSubmitted = false;
  tribunal: Tribunal;

  items: MenuItem[];
  home: MenuItem;

  tribunalForm = new FormGroup({
    tribunalId: new FormControl(null),
    gouvernorat: new FormControl(null, Validators.required),
    ville: new FormControl(null, Validators.required),
    adresse: new FormControl(null, Validators.required),
    nom: new FormControl(null, Validators.required),
    telephone: new FormControl(null, [Validators.required, Validators.max(99999999)]),
    typetribunalId: new FormControl(null, Validators.required)
  });

  // tslint:disable-next-line: max-line-length
  constructor(private tribunalService: TribunalService, private route: ActivatedRoute, private typetribunalService: TypetribunauxService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {

    this.typetribunalService.getListTypeTribunaux().subscribe((resultat: []) => {
      this.listTypeTribunaux = resultat;

    });

    this.tribunal = new Tribunal();

    this.id = this.route.snapshot.paramMap.get('id');

    this.tribunalService.getTribunauxbyid(this.id)
      .subscribe(data => {
        this.tribunal = data;

        this.tribunalForm.setValue(data);

      }, error => console.log(error));

    this.items = [
      { label: 'Tribunaux' },
      { label: 'Mofidier' },
    ];

    this.home = { icon: 'pi pi-home' };
  }


  updateTribunaux(): void {

    console.log(this.tribunalForm.value);


    console.log(this.tribunalForm.value);

    this.tribunalService.updateTribunaux(this.tribunalForm.value)
      .subscribe(data => {

        this.showSuccess();
        this.router.navigateByUrl('/tribunaux');

      });
  }


  get f() { console.log(this.tribunalForm.controls); return this.tribunalForm.controls; }

  resetAuxiliaireForm() {
    this.tribunalForm.setValue(this.tribunal);
    this.submitted = false;
  }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Mise a jours effectué avec succès' });
  }




}
