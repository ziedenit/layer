import { Component, OnInit } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { TypeAffaire } from 'src/app/entitie/TypeAffaire';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-encours',
  templateUrl: './encours.component.html',
  styleUrls: ['./encours.component.css']
})
export class EncoursComponent implements OnInit {

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
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.affaireservice.findAllByEtat('En cours').subscribe((res: Affaire[]) => {
      this.listAffaire = res;
      console.log(this.listAffaire);
    });

    this.cols = [
      { header: 'Référence' },
      { header: 'Titre' },
      { header: 'Date Création' },
      { header: 'Avocats' },
      { header: 'Type Affaire' },

    ];

    this.items = [
      { label: 'Affaire' },
      { label: 'Liste des affaires En cours' },
    ];

    this.home = { icon: 'pi pi-home' };
  }

  updateetat(id: any) {

    console.log("idaffaire" + this.idAffaire);

    this.affaireservice.getAffairebyid(id).subscribe(affaire => {
      console.log('affairegetetat', affaire);

      this.affaire = affaire;
      affaire.etatavant = affaire.etat;
      console.log(" affaire.etatavant "+ affaire.etatavant );

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
      message: 'Êtes-vous sûr de vouloir supprimer',
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
