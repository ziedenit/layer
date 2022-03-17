import { Component, OnInit } from '@angular/core';
import { Audiance } from 'src/app/entitie/Audiance';
import { PhaseService } from 'src/app/services/phase.service';
import { AudianceService } from 'src/app/services/audiance.service';
import { Rendezvous } from 'src/app/entitie/rendezvous';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { Tache } from 'src/app/entitie/Tache';
import { TacheService } from 'src/app/services/tache.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { count } from 'rxjs/operators';
import { Consultation } from 'src/app/entitie/Consultation';
import { ConsultationService } from 'src/app/services/consultation.service';
import { Lecteurjugement } from 'src/app/entitie/Lecteurjugement';
import { LecteurjugementService } from 'src/app/services/lecteurjugement.service';
import { LecteurjugementComponent } from '../phase/lecteurjugement/lecteurjugement.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  data2: any;
  data3: any;
  items: MenuItem[];
  home: MenuItem;
  month: any;
  count: number = 0;
  today = new Date();
  nbretache = 0;
  nbreaudiance = 0;
  nbreredv = 0;
  nbreconsrdv = 0;
  nbreconstaf = 0;
  nbreconsfav = 0;
  nbreconsfavfalse = 0;

  listConsultation: Consultation[];
  listLecteurjugement: Lecteurjugement[];



  constructor(
    private phaseservice: PhaseService,
    private audianceService: AudianceService,
    private rendezvousService: RendezvousService,
    private tacheService: TacheService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private consultationService: ConsultationService,
    private lecteurjugementservice: LecteurjugementService

  ) {

  }

  ngOnInit(): void {

    this.month = (new Date().getMonth() + 1).toString();
    console.log("this.month", this.month);

    this.consultationService.getListConsultationByType("rdv").subscribe((res: Consultation[]) => {
      this.listConsultation = res;
      this.listConsultation.forEach(elem => {

        if ((new Date(elem.dateDebut).getMonth() + 1).toString() == this.month) {

          console.log("consultation", elem);
          this.nbreconsrdv++;
          console.log(this.nbreconsrdv)

        }

      });


      // this.nbreconsrdv = this.listConsultation.length;


      this.consultationService.getListConsultationByType("taf").subscribe((res: Consultation[]) => {
        this.listConsultation = res;

        this.listConsultation.forEach(elem => {

          if ((new Date(elem.dateDebut).getMonth() + 1).toString() == this.month) {

            console.log("consultation", elem);
            this.nbreconstaf++;
            console.log(this.nbreconstaf)

          }

        });

        // this.nbreconstaf = this.listConsultation.length;


        this.data2 = {

          datasets: [{
            data: [
              this.nbreconsrdv,
              this.nbreconstaf
            ],
            backgroundColor: [
              "#4BC0C0",
              "#FF6384",

            ],
            label: 'My dataset'
          }],
          labels: [

            "Rendez-vous",
            "Travaille a faire"

          ]
        }

      });

    });



    this.lecteurjugementservice.getListByFavorable(false).subscribe((res: Lecteurjugement[]) => {
      this.listLecteurjugement = res;
      this.nbreconsfavfalse = this.listLecteurjugement.length;
      console.log("nbreconsfav", this.nbreconsfavfalse);

      this.lecteurjugementservice.getListByFavorable(true).subscribe((res: Lecteurjugement[]) => {
        this.listLecteurjugement = res;
        this.nbreconsfav = this.listLecteurjugement.length;
        console.log("nbreconsfav", this.nbreconsfav);


        this.data3 = {
          labels: ['Favorable', 'Non favorable'],
          datasets: [
            {
              data: [this.nbreconsfav, this.nbreconsfavfalse],
              backgroundColor: [
                "#36A2EB",
                "#FF6384",

              ],
              hoverBackgroundColor: [
                "#36A2EB",
                "#FF6384",

              ]
            }]
        };

      });
    });

    this.items = [
      { label: 'Statistiques' },
    ];

    this.home = { icon: 'pi pi-home' };

  }

}
