import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { TribunalService } from 'src/app/services/tribunal.service';
import { Tribunal } from 'src/app/entitie/Tribunal';
import { TypetribunauxService } from 'src/app/services/typetribunaux.service';
import { MessageService, MenuItem } from 'primeng/api';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtribunaux',
  templateUrl: './addtribunaux.component.html',
  styleUrls: ['./addtribunaux.component.css']
})
export class AddtribunauxComponent implements OnInit {

  submitted = false;
  listTypeTribunaux: [];
  isValidFormSubmitted = false;
  tribunal: Tribunal = new Tribunal();
  items: MenuItem[];
  home: MenuItem;

  tribunalForm = new FormGroup({
    gouvernorat: new FormControl(null, Validators.required),
    ville: new FormControl(null, Validators.required),
    adresse: new FormControl(null, Validators.required),
    nom: new FormControl(null, Validators.required),
    telephone: new FormControl(null, [Validators.required, Validators.max(99999999)]),
    typetribunalId: new FormControl(null, Validators.required)
  });


  // tslint:disable-next-line: max-line-length
  constructor(private tribunalService: TribunalService, private typetribunalService: TypetribunauxService,
              private messageService: MessageService, private router: Router ) { }

  ngOnInit(): void {
    this.typetribunalService.getListTypeTribunaux().subscribe((resultat: []) => {
      this.listTypeTribunaux = resultat;


    });

    this.items = [
      { label: 'Tribunaux' },
      { label: 'Ajouter' },
    ];

    this.home = { icon: 'pi pi-home' };
  }

  resetTribunalForm() {
    this.tribunalForm.reset();
    this.submitted = false;

  }

  addtribunal(): void {
    this.submitted = true;
    if (this.tribunalForm.valid) {
      console.log(this.tribunalForm.value);
      this.tribunalService.addTribunaux(this.tribunalForm.value).subscribe(data => {
        this.showSuccess();
        this.router.navigateByUrl('/tribunaux');
        console.log(data);
      });
    }
  }

  get f() { console.log(this.tribunalForm.controls); return this.tribunalForm.controls; }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Tribunal ajouté avec succès' });
  }


}
