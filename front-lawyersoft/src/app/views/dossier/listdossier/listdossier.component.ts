import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DossierService } from 'src/app/services/dossier.service';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { Dossier } from 'src/app/entitie/Dossier';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-listdossier',
  templateUrl: './listdossier.component.html',
  styleUrls: ['./listdossier.component.css']
})

export class ListdossierComponent implements OnInit {


  constructor(private affaireservice: AffaireService, private dossierservice: DossierService, private router: Router,
    private confirmationService: ConfirmationService, private messageService: MessageService, private route: ActivatedRoute) { }

  submitted = false;
  listDossier: Dossier[];
  listAffaire: Affaire;
  affaireid: any;
  dossierid: any;
  cols: any[];
  msgs: Message[] = [];
  selectedDossier: Dossier;
  first: number = 0;
  displayBasic: boolean;
  displayBasic1: boolean;
  dossier: Dossier;

  isValidFormSubmitted = false;
  affaire: Affaire;


  dossierForm = new FormGroup({
    nom: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    dateCreation: new FormControl(Date.now()),
    affaireId: new FormControl(),
  });

  dossierForm1 = new FormGroup({
    dossierId: new FormControl(null, Validators.required),
    nom: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    dateCreation: new FormControl(Date.now()),
    affaireId: new FormControl(),
  });


  findAllByAffaire() {
    this.affaireid = this.route.snapshot.paramMap.get('id');

    this.dossierservice.findAllByAffaire(this.affaireid).subscribe((resultat: []) => {
      this.listDossier = resultat;
      console.log(this.listDossier);
    });
  }

  ngOnInit(): void {

    this.findAllByAffaire();

    this.affaireservice.getAffairebyid(this.affaireid).subscribe(affaire => {
      this.affaire = affaire;

    });

    this.cols = [
      { header: 'Nom' },
      { header: 'Déscription' },

    ];

  }


  showBasicDialog() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasic = true;

  }

  showBasicDialogupdate(id: number) {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasic1 = true;


    this.dossierservice.getDossierbyid(id)
      .subscribe(data => {
        this.dossier = data;
        this.dossierForm1.setValue(data);
      }, error => console.log(error));


  }

  resetDossierForm() {
    this.dossierForm.reset();
    this.submitted = false;

  }

  updateDossier(): void {

    console.log(this.dossierForm1.value);

    this.dossierservice.updateDossier(this.dossierForm1.value)
      .subscribe(data => {
        this.showInfo();
        this.listDossier.push(data);
        this.displayBasic1 = false;
        this.findAllByAffaire();

      });
  }


  adddossier(): void {

    this.submitted = true;
    console.log("valueform" + this.dossierForm.value);
    if (this.dossierForm.valid) {
      console.log(this.dossierForm.value);
      this.dossierForm.value.affaireId = this.affaire;
      this.dossierservice.addDossier(this.dossierForm.value).subscribe(data => {
        this.showSuccess();
        console.log(data);
        this.displayBasic = false;
        this.listDossier.push(data);
      });
    }
  }



  get f() { return this.dossierForm.controls; }



  showChange(event) {
    console.log(event);
    console.log(this.dossierForm.value);
  }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Dossier ajouté avec succès' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Message', detail: 'Dossier modifié avec succès' });
  }


  confirm2(id: any) {
    console.log("id dossier" + id);
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer ? ',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {

        this.dossierservice.deleteDossier(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.listDossier.findIndex(el => el['dossierId'] == id);
              this.listDossier.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Dossier supprimé avec succès' });
            },
            error => console.log(error));


      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
