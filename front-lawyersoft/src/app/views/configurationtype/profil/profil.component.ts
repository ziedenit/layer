import { DroitaccesService } from './../../../services/droitacces.service';
import { Table } from 'primeng/table/table';
import { MessageService, MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilService } from './../../../services/profil.service';
import { Profil } from './../../../entitie/profil';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  listProfiles: Profil[];

  id: any;

  clonedProfile: { [s: string]: Profil; } = {};

  first: number = 0;

  items: MenuItem[];
  home: MenuItem;

  @ViewChild('table') table: Table;

  // tslint:disable-next-line: variable-name
  //_unsubscribeAll: Subject<any>;

  constructor(private profilService: ProfilService, private route: ActivatedRoute,
    private messageService: MessageService, private droitaccesService: DroitaccesService, private router: Router) {

    //this._unsubscribeAll = new Subject();

  }


  ngOnInit(): void {

    this.profilService.getListProfil().subscribe((resultat: []) => {
      this.listProfiles = resultat;
      console.log(this.listProfiles);

    });

    this.items = [
      { label: 'Configuration' },
      { label: 'Profile' },
    ];

    this.home = { icon: 'pi pi-home' };

  }
  goDroitAcces(idProfil: any) {
    this.droitaccesService.getAllDroitAccesByProfilId(idProfil).subscribe((droits: []) => {
      console.log('droitprofil', droits.length)
      if (droits.length == 0) {
        this.router.navigate(['/adddroitacces/' + idProfil])
      } else {
        this.router.navigate(['/listdroitacces/' + idProfil])
      }
    })

  }
  reset() {
    this.first = 0;
  }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'ajout avec succée' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
  }

  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Info', detail: 'Supprimé avec succée' });
  }
  onRowEditInit(rowData) {

    this.clonedProfile[rowData.idProfil] = { ...rowData };
  }


  onRowEditSave(rowData) {

    if (rowData.idProfil != null) {
      this.updateProfile(rowData);

    } else {
      this.addProfile(rowData);
    }

  }

  onRowEditCancel(rowData, index: number) {

    if (rowData.idProfil != null) {
      this.listProfiles[index] = this.clonedProfile[rowData.idProfil];
    } else {
      this.listProfiles.shift();
    }

  }

  addRow() {

    const profil: Profil = {
      idProfil: null,
      nameProfil: null,
    };

    this.listProfiles.unshift(profil);
    this.table.initRowEdit(profil);
  }

  updateProfile(rowData) {

    this.profilService.updateProfil(rowData)
      .subscribe(data => {
        this.showInfo();
      });

  }

  addProfile(rowData) {
    if (rowData.nameProfil == 'ADMINSTRATEUR LAWYER') {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Nom de profil utilisé reserver au super administrateur' });
    } else {
      this.profilService.addProfil(rowData)
        .subscribe((data: Profil) => {
          this.listProfiles.shift();
          this.listProfiles.unshift(data);
          this.showSuccess();
        });
    }

  }

  showConfirm() {

    this.messageService.clear();
    this.messageService.add({
      key: 'idProfil',
      sticky: true, severity: 'warn',
      summary: 'Voulez-vous supprimer ?',
      detail: 'Confirmation',
    });
  }


  deleteProfile(idProfil) {

    this.profilService.DeleteProfil(idProfil)
      .subscribe(data => {
        let index = this.listProfiles.findIndex(el => el['idProfil'] == idProfil);
        this.listProfiles.splice(index, 1);
        this.showWarn();
      });
    this.messageService.clear('idProfil');
  }

  onReject() {
    this.messageService.clear('idProfil');
  }
}
