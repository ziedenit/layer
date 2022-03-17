import { __decorate } from "tslib";
import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
let CalendrierComponent = class CalendrierComponent {
    constructor(consultationService, datepipe) {
        this.consultationService = consultationService;
        this.datepipe = datepipe;
        this.date_value = Date.now();
    }
    ngOnInit() {
        this.consultationService.getListConsultation().subscribe((res) => {
            this.listConsultation = res;
            //  for (this.link of this.listConsultation) {
            for (this.link of this.listConsultation) {
                console.log(this.link.dateDebut, this.link.titre);
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
};
CalendrierComponent = __decorate([
    Component({
        selector: 'app-calendrier',
        templateUrl: './calendrier.component.html',
        styleUrls: ['./calendrier.component.css']
    })
], CalendrierComponent);
export { CalendrierComponent };
//# sourceMappingURL=calendrier.component.js.map