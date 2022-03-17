import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { Rendezvous } from 'src/app/entitie/rendezvous';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrls: ['./update-rdv.component.css'],
  providers: [MessageService]

})
export class UpdateRdvComponent implements OnInit {


  submitted = false;
  listPhase: Phase[];
  items: MenuItem[];
  home: MenuItem;
  rendezvous: Rendezvous;
  phaseId: any;
  listRendezvous: Rendezvous[];



  @Input('displayBasicupdate') displayBasicupdate: boolean;

  @Input('idrendezvous')
  idrendezvous: any;


  etat = [
    /*{ label: 'En cours', value: 'En cours' },*/
    { label: 'Cloturé', value: 'Cloturé' },
    { label: 'Reporter', value: 'Reporter' },
  ];
  constructor(private phaseservice: PhaseService,
              private rendezvousservice: RendezvousService,
              private messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute) {
                this.phaseId = this.route.snapshot.paramMap.get('id');

              }


  rendezvousForm = new FormGroup({
    idrendezvous: new FormControl(null, Validators.required),
    etat: new FormControl(null, Validators.required),
    daterendezvous: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    phaseId: new FormControl(),
  });


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.rendezvousForm.setValue(changes.idrendezvous.currentValue)
    console.log(changes.idrendezvous.currentValue)

  }


  FindAllRdvByPhase() {

    this.rendezvousservice.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listAudiance", resultat);
      this.rendezvousservice.listRendezvous = resultat;
    });
  }

  ngOnInit(): void {

    this.idrendezvous = this.route.snapshot.paramMap.get('id');

    if (this.idrendezvous != null) {

    this.rendezvousservice.getRendezvousbyid(this.idrendezvous).subscribe(rendezvous => {
      console.log('rendezvous', rendezvous);
      this.rendezvous = rendezvous;
      this.rendezvousForm.setValue(rendezvous);
    });
  }
    this.items = [
      { label: 'Phase' },
      { label: 'Opération' },
      { label: 'Rendez-Vous' },
      { label: 'Modifier' },
    ];

    this.home = { icon: 'pi pi-home' };

  }

  showBasicDialogupdate() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicupdate = true;

  }
  showChange(event) {
    console.log(event);
    console.log(this.rendezvousForm.value);
  }


  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
  }

  updateRendez() {
    if (this.rendezvousForm.valid) {
      this.submitted = false;
      this.rendezvousservice.updateRendezvous(this.rendezvousForm.value).subscribe(rdv => {
        this.showInfo();
        this.displayBasicupdate = false;
        // tslint:disable-next-line: no-unused-expression
         this.FindAllRdvByPhase();

      });
    } else {
      this.submitted = true;
    }
  }

  /*resetAudianceForm() {
    this.rendezvousForm.setValue(this.rendezvous);
    this.submitted = false;
  }*/

}
