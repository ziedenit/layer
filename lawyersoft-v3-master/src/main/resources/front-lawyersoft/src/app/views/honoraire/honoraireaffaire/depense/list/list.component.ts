import { Component, OnInit, Input } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { HonoraireService } from 'src/app/services/honoraire.service';
import { Honnoraire } from 'src/app/entitie/Honnoraire';
import { TypeAffaire } from 'src/app/entitie/TypeAffaire';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api'
import { FormGroup, FormControl } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  listHonnoraire: Honnoraire[];
  listHonnorairedepense: Honnoraire[];
  selectedHonnoraire: Honnoraire;
  selectedHonnorairedepense: Honnoraire;
  cols: any[];
  msgs: Message[] = [];
  first: number = 0;
  items: MenuItem[];
  home: MenuItem;
  affaireId: any;
  affaire: Affaire;
  honoraireToUpdate: any;
  honoraire: Honnoraire;
  totaldepense: number = 0;




  isValidFormSubmitted = false;

  displayBasicaddepense: boolean;
  displayBasicupdatedepense: boolean;


  affaireForm = new FormGroup({
    affaireId: new FormControl(null),
    titre: new FormControl(),
    reference: new FormControl(),
    description: new FormControl(),
    intervenant: new FormControl(),
    auxiliaire: new FormControl(),
    user: new FormControl(),
    dateCreation: new FormControl(),
    dateCloture: new FormControl(),
    etat: new FormControl(),
    etatavant: new FormControl(),
    typeaffaireId: new FormControl(),
  });

  honoraireForm = new FormGroup({
    honnoraireId: new FormControl(),
    titre: new FormControl(),
    type: new FormControl(),
    montant: new FormControl(),
    reste: new FormControl(),
    dateHonnoraire: new FormControl(),
    affaireId: new FormControl(),
    consultationId: new FormControl(),

  });

  constructor(
    private affaireservice: AffaireService,
    public honoraireservice: HonoraireService,
    private phaseservice: PhaseService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private intervenantService: IntervenantService,
  ) {
    this.affaireId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    this.cols = [
      { header: 'Titre' },
      { header: 'Date' },
      { header: 'Montant' },

    ];

    this.items = [
      { label: 'Honoraires' },
      { label: 'Liste des honoraires' },
      { label: 'Détails honoraires' },

    ];

    this.home = { icon: 'pi pi-home' };

    this.honoraireservice.findByAffaireType(this.affaireId, 'depense').subscribe(resultat => {
      this.honoraireservice.listHonnorairedepense = resultat;
      resultat.forEach(element => {
        this.totaldepense += element.montant;

      });

      this.honoraireservice.findByaffairetypenull(this.affaireId).subscribe(data => {
        this.honoraire = data;
        this.honoraire.montant = this.totaldepense;
        console.log('this.honoraire.montant', this.honoraire.montant)
        this.honoraireservice.updateHonoraire(this.honoraire).subscribe(data => {
        });

      });


    });

  }
  addTotalDepense(totalDepense) {
    this.totaldepense += totalDepense;
  }
  get f() { return this.honoraireForm.controls; }

  showBasicDialogaddpense() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicaddepense = true;

  }

  showBasicDialogupdatedepense(honnoraire) {
    console.log("dialog");
    console.log("id", honnoraire);

    // tslint:disable-next-line: no-unused-expression
    this.displayBasicupdatedepense = true;
    this.honoraireToUpdate = honnoraire;
    console.log("idaudiance", this.honoraireToUpdate)
  }



  confirm2(id: any) {
    console.log("id dossier" + id);
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer ? ',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {

        this.honoraireservice.deleteHonoraire(id)
          .subscribe(
            data => {

              let index = this.honoraireservice.listHonnorairedepense.findIndex(el => el['honnoraireId'] == id);
              this.honoraireservice.listHonnorairedepense.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Dépense supprimé avec succès' });
            },
            error => console.log(error));


      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
