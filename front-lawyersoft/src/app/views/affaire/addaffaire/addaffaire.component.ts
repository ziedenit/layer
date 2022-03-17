import { Component, OnInit, ViewChild } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { TypeaffaireService } from 'src/app/services/typeaffaire.service';
import { MessageService } from 'primeng/api';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { Auxiliaire } from 'src/app/entitie/Auxiliaire';
import { AuxiliaireService } from 'src/app/services/auxiliaire.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entitie/User';
import { Tribunal } from 'src/app/entitie/Tribunal';
import { TribunalService } from 'src/app/services/tribunal.service';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { SelectItem } from 'primeng/api';
import { MultiSelect } from 'primeng/multiselect/public_api';
import { AffaireDto } from 'src/app/dto/AffaireDto';
import { Honnoraire } from 'src/app/entitie/Honnoraire';
import { HonoraireService } from 'src/app/services/honoraire.service';


@Component({
  selector: 'app-addaffaire',
  templateUrl: './addaffaire.component.html',
  styleUrls: ['./addaffaire.component.css'],
  styles: [`
  .ui-grid label {
      display: inline-block;
      margin: 3px 0px 0px 4px;
  }
`]

})
export class AddaffaireComponent implements OnInit {

  // tslint:disable-next-line: variable-name

  date_value: number = Date.now();

  item: string;
  val1: string;

  affairedto: AffaireDto = new AffaireDto();

  submitted = false;
  listTypeaffaire: [];
  listIntervenant: { label: any, value: any }[] = [];
  listAuxiliaire: { label: any, value: any }[] = [];
  listUser: { label: any, value: any }[] = [];
  selectedIntervanat: any;
  listTribunal: Tribunal[];

  etats = [
    { label: 'En cours', value: 'En cours' },
    { label: 'Pré-contentitieux', value: 'Pré-contentitieux' },
  ];

  isValidFormSubmitted = false;
  affaire: Affaire = new Affaire();

  affaireForm = new FormGroup({
    titre: new FormControl(null, Validators.required),
    reference: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    etat: new FormControl(null, Validators.required),
    dateCreation: new FormControl(Date.now()),
    typeaffaireId: new FormControl(null, Validators.required),
    intervenant: new FormControl(null, Validators.required),
    auxiliaire: new FormControl(null, Validators.required),
    user: new FormControl(null, Validators.required),

  });

  phase: Phase = new Phase();
  honnoraire: Honnoraire = new Honnoraire();

  get phaseForm(): any { return this.affaireForm.get('phaseForm'); }



  /*phaseForm = new FormGroup({
    nom: new FormControl(null, Validators.required),
    referencetribunal: new FormControl(this.affaireForm.value.reference),
    dateCreation: new FormControl(Date.now()),
    affaireId: new FormControl(null, Validators.required),
    idTribunal: new FormControl(this.affaireForm.value),

  });
*/
  constructor(private affaireservice: AffaireService,
    private typeaffaireservice: TypeaffaireService,
    private messageService: MessageService,
    private router: Router,
    private intervenantService: IntervenantService,
    private auxiliaireService: AuxiliaireService,
    private userService: UserService,
    private tribunalService: TribunalService,
    private honoraireService: HonoraireService,
    private phaseService: PhaseService) {


  }

  ngOnInit(): void {

    this.typeaffaireservice.getListTypeAffaire().subscribe((resultat: []) => {
      this.listTypeaffaire = resultat;

    });

    this.intervenantService.getListIntervenant().subscribe((res: Intervenant[]) => {
      res.forEach(inter => {
        this.listIntervenant.push({ label: inter.nom + " " + inter.prenom, value: inter })
      })
    });

    this.tribunalService.getListTribunaux().subscribe((res: Tribunal[]) => {
      this.listTribunal = res;
      console.log(this.listTribunal);
    });

    this.auxiliaireService.getListAuxiliaire().subscribe((aux: Auxiliaire[]) => {
      //this.listAuxiliaire = aux;
      aux.forEach(auxiliaire => {
        this.listAuxiliaire.push({ label: auxiliaire.nom + " " + auxiliaire.prenom, value: auxiliaire })
      })
      //console.log(this.listAuxiliaire);

    });

    this.userService.getListUser().subscribe((users: User[]) => {
      //this.listUser = aux;
      users.forEach(user => {
        this.listUser.push({ label: user.nom + " " + user.prenom, value: user })
      })
      //console.log(this.listUser);
    });

  }


  resetAffaireForm() {
    this.affaireForm.reset();
    this.submitted = false;
  }

  addaffaire(): void {

    console.log("ss");
    this.submitted = true;
    console.log(this.affaireForm.value);
    if (this.affaireForm.valid) {

      console.log("valid");

      this.affairedto.affaire = this.affaireForm.value;

      this.phase.dateDebut = new Date();
      this.affairedto.phase = this.phase;

      this.honnoraire.dateHonnoraire = new Date();

      this.affairedto.honnoraire = this.honnoraire;

      console.log(this.affairedto)
      if (this.affairedto != null) {
        this.affaireservice.addAffaire(this.affairedto).subscribe(data => {
          this.showSuccess();
          console.log("add");

          this.router.navigateByUrl('/affaire');
          console.log(data);
        });
      }
      /* this.phaseService.addPhase(this.affairedto.phase).subscribe(data => {
         this.showSuccess();
         //this.router.navigateByUrl('/affaire');
         console.log(data);
       });*/
    }
  }

  /* addphase(): void {
     console.log("pahse")
     this.submitted = true;
     console.log(this.phaseForm.value);
     if (this.phaseForm.valid) {



       this.phaseService.addPhase(this.phaseForm.value).subscribe(data => {
         this.showSuccess();
         this.router.navigateByUrl('/affaire');
         console.log(data);
       });
     }
   }*/

  get f() { return this.affaireForm.controls; }


  showChange(event) {
    console.log(event);
    console.log(this.affaireForm.value);
  }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Affaire ajouté avec succès' });
  }


}
