import { Component, OnInit } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { TypeAffaire } from 'src/app/entitie/TypeAffaire';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-archiver',
  templateUrl: './archiver.component.html',
  styleUrls: ['./archiver.component.css']
})
export class ArchiverComponent implements OnInit {

  listAffaire: Affaire[];
  affaire: Affaire;
  cols: any[];
  msgs: Message[] = [];
  selectedAffaire: Affaire;
  first: number = 0;
  items: MenuItem[];
  home: MenuItem;
  idAffaire: any;


  constructor(
    private affaireservice: AffaireService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private router: Router,
  ) { }


  // tslint:disable-next-line: ban-types
  public findAllByEtat(etat: String) {

    let bool: boolean;

    this.affaireservice.findAllByEtat(etat).subscribe((res: Affaire[]) => {
      this.listAffaire = res;
      console.log(this.listAffaire);
    });
    return bool;
  }


  ngOnInit(): void {

    this.findAllByEtat('Archivé');


    this.cols = [
      { header: 'Référence' },
      { header: 'Titre' },
      { header: 'Date Création' },
      { header: 'Type Affaire' },

    ];

    this.items = [
      { label: 'Affaire' },
      { label: 'Liste des affaires archivées' },
    ];

    this.home = { icon: 'pi pi-home' };
  }



  updateetat(id: any) {

    console.log("idaffaire" + this.idAffaire);

    this.affaireservice.getAffairebyid(id).subscribe(affaire => {
      this.affaire = affaire;
      affaire.etat = affaire.etatavant;
      console.log("affaire.etat" + affaire.etat);
      console.log('affaireupdate', affaire);

      this.affaireservice.updateAffaire(affaire).subscribe(auxiliaire => {
        console.log('affaireupdate', affaire);
        this.showSuccess();
      });


    });
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Affaire a été restaurée avec succès' });
  }

}
