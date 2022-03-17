import { Component, OnInit } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { TypeAffaire } from 'src/app/entitie/TypeAffaire';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-precontentieux',
  templateUrl: './precontentieux.component.html',
  styleUrls: ['./precontentieux.component.css']
})
export class PrecontentieuxComponent implements OnInit {

  listAffaire: Affaire[];
  cols: any[];
  msgs: Message[] = [];
  selectedAffaire: Affaire;
  first: number = 0;
  items: MenuItem[];
  home: MenuItem;
  idAffaire: any;
  affaire: Affaire;


  constructor(private affaireservice: AffaireService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router) { }


  ngOnInit(): void {


    this.findAllByEtat('Pré-contentitieux');

    this.cols = [
      { header: 'Référence' },
      { header: 'Titre affaire' },
      { header: 'Avocats' },
      { header: 'Date du dépot' },
    ];

    this.items = [
      { label: 'Affaire' },
      { label: 'Liste des affaires Pré-contentitieux' },
    ];

    this.home = { icon: 'pi pi-home' };
  }

  // tslint:disable-next-line: no-unused-expression
  // tslint:disable-next-line: align
  // tslint:disable-next-line: ban-types
  public findAllByEtat(etat: String) {

    let bool: boolean;

    this.affaireservice.findAllByEtat(etat).subscribe((res: Affaire[]) => {
      this.listAffaire = res;
      console.log(this.listAffaire);
    });

    return bool;

  }

  updateetat(id: any) {

    console.log("idaffaire" + this.idAffaire);

    this.affaireservice.getAffairebyid(id).subscribe(affaire => {
      console.log('affairegetetat', affaire);

      this.affaire = affaire;
      affaire.etatavant = affaire.etat;
      console.log(" affaire.etatavant " + affaire.etatavant);

      affaire.etat = "Archivé";

      console.log('affaireetatarchivé', affaire);

      this.affaireservice.updateAffaire(affaire).subscribe(auxiliaire => {
        console.log('affaireupdate', affaire);
        this.showSuccess();
      });


    });
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Affaire a été archivée avec succès' });
  }


  confirm2(id: any) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer' + this.listAffaire.findIndex(el => el['reference']),
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {

        this.affaireservice.deleteAffaire(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.listAffaire.findIndex(el => el['affaireid'] == id);
              this.listAffaire.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Affaire supprimé avec succès' });
            },
            error => console.log(error));


      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
