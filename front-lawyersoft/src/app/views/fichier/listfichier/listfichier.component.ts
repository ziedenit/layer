import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DossierService } from 'src/app/services/dossier.service';
import { FichierService } from 'src/app/services/fichier.service';
import { Dossier } from 'src/app/entitie/Dossier';
import { Fichier } from 'src/app/entitie/Fichier';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { FichierUpload } from 'src/app/entitie/fichier-upload';

@Component({
  selector: 'app-listfichier',
  templateUrl: './listfichier.component.html',
  styleUrls: ['./listfichier.component.css']
})
export class ListfichierComponent implements OnInit {


  submitted = false;
  listFichier: Fichier[];
  fichierid: any;
  dossierid: any;
  cols: any[];
  msgs: Message[] = [];
  selectedFichier: Fichier;
  first: number = 0;
  displayBasic: boolean;
  displayBasic1: boolean;
  dossier: Dossier;

  isValidFormSubmitted = false;
  fichier: Fichier;
  uploadedFiles: any[] = [];

  selectedFiles: FileList;
  currentFileUpload: File;



  fichierForm = new FormGroup({
    nom: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    dateCreation: new FormControl(Date.now()),
    dossierId: new FormControl(),
  });

  fichierForm1 = new FormGroup({
    fichierId: new FormControl(null, Validators.required),
    nom: new FormControl(null, Validators.required),
    file: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    dateCreation: new FormControl(Date.now()),
    dossierId: new FormControl(),
    fileName: new FormControl(),
    fileDownloadUri: new FormControl(),
    fileType: new FormControl(),
    size: new FormControl(),
  });


  constructor(private dossierservice: DossierService, private fichierservice: FichierService, private router: Router,
    private confirmationService: ConfirmationService, private messageService: MessageService, private route: ActivatedRoute) { }


  findAllByDossier() {
    this.dossierid = this.route.snapshot.paramMap.get('id');

    this.fichierservice.findAllByDossier(this.dossierid).subscribe((resultat: []) => {
      this.listFichier = resultat;
      console.log(this.listFichier);
    });
  }

  ngOnInit(): void {

    this.findAllByDossier();

    this.dossierservice.getDossierbyid(this.dossierid).subscribe(dossier => {
      this.dossier = dossier;

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

  myUploader(event) {
    console.log(event);
    for (let file of event.files) {
      console.log(file)

    }
  }

  onUpload(event) {
    console.log("event");
    console.log(event);
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

  }


  addfichier() {


    this.submitted = true;

    if (this.fichierForm.valid && this.uploadedFiles.length != 0) {

      this.dossierid = this.route.snapshot.paramMap.get('id');

      let file = this.uploadedFiles[0];

      console.log("file", file);
      console.log("this.fichierForm.value" + file);

      this.fichierservice.addFichier(file, this.fichierForm.value.nom,
        this.fichierForm.value.description, this.dossierid).subscribe(data => {
          console.log(data);
          this.showSuccess();
          this.displayBasic = false;
          this.findAllByDossier();

        });
    }
  }

  showBasicDialogupdate(id: number) {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasic1 = true;


    this.fichierservice.getFichierbyid(id)
      .subscribe(data => {
        this.dossier = data;
        this.fichierForm1.setValue(data);
      }, error => console.log(error));


  }

  updateFichier(): void {

    console.log(this.fichierForm1.value);

    this.fichierservice.updateFichier(this.fichierForm1.value)
      .subscribe(data => {
        this.showInfo();
        this.listFichier.push(data);
        this.displayBasic1 = false;
        this.findAllByDossier();

      });
  }




  get f() { return this.fichierForm.controls; }

  showChange(event) {
    console.log(event);
    console.log(this.fichierForm.value);
  }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Fichier ajouté avec succès' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Message', detail: 'Fichier modifié avec succès' });
  }


  confirm2(id: any) {
    console.log("id fichier" + id);
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer ? ',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {

        this.fichierservice.deleteFichier(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.listFichier.findIndex(el => el['fichierId'] == id);
              this.listFichier.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Fichier supprimé avec succès' });
            },
            error => console.log(error));


      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
