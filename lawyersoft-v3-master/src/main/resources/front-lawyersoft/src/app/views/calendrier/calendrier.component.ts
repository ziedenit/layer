import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MenuItem } from 'primeng/api';
import { Consultation } from 'src/app/entitie/Consultation';
import { ConsultationService } from 'src/app/services/consultation.service';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  events: any[];
  options: any;
  header: any;
  items: MenuItem[];
  home: MenuItem;
  listConsultation: Consultation[];
  date_value: number = Date.now();
  consultation: Consultation;
  link;
  date: Date;
  datefor: any;
  constructor(
    private consultationService: ConsultationService,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {

    this.consultationService.getListConsultation().subscribe((res: Consultation[]) => {
      this.listConsultation = res;
      //  for (this.link of this.listConsultation) {

      for (this.link of this.listConsultation) {

        console.log(this.link .dateDebut, this.link .titre);


       /* this.events = [


          {
            title: this.link.titre,
            start: this.link.dateDebut,


          },

          {
            "title": "re",
            "start": "2020-03-07",
            "end": "2020-03-10"
          },
          {
            "title": "Long Event",
            "start": "2020-03-07",
            "end": "2020-03-11"
          },

        ];
*/
      }




    });


    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: this.date_value,

      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      isMultipleDay: true,


    },

      this.items = [
        { label: 'Calendrier' },
      ];

    this.home = { icon: 'pi pi-home' };
  }
}


