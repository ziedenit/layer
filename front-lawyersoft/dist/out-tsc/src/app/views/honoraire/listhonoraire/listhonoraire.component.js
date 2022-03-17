import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ListhonoraireComponent = class ListhonoraireComponent {
    constructor(affaireservice, honoraireservice, confirmationService, messageService, route, router, sanitizer) {
        this.affaireservice = affaireservice;
        this.honoraireservice = honoraireservice;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.msgs = [];
        this.first = 0;
        this.affaireId = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        console.log("this.totaldepense", this.totaldepense);
        this.honoraireservice.findByType().subscribe((res) => {
            this.listHonnoraire = res;
            console.log(this.listHonnoraire);
        });
        this.cols = [
            { header: 'Référence' },
            { header: 'Affaire' },
            { header: 'Date' },
            { header: 'Dépense' },
            { header: 'Reste' },
            { header: 'Type affaire' },
            { header: 'Intervenant' },
        ];
        this.items = [
            { label: 'Honoraires' },
            { label: 'Liste des honoraires' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    generaterapport(a) {
        console.log("idhonoraire", a.honnoraireId);
        // tslint:disable-next-line: deprecation
        this.honoraireservice.generateReport(a.honnoraireId).subscribe((data) => {
            console.log("generateReportbyGet ...");
            console.log(data);
            let blob = new Blob([this.response.data], { type: "application/pdf" });
            var downloadLink = document.createElement("a");
            var url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = "rapportHonoraire.pdf";
            // document.body.appendChild(downloadLink);
            downloadLink.click();
            /*var doc = new jsPDF();
            console.log(doc);
            var mediaType = 'application/pdf';
            const blob = new Blob([data], { type: 'application/octet-stream' });
            var filename = 'test.pdf';
      
            doc.save(filename, blob);*/
            /*const blob = new Blob([data], { type: 'application/octet-stream' });
      
            this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        */
        });
    }
};
__decorate([
    Input("totaldepense")
], ListhonoraireComponent.prototype, "totaldepense", void 0);
ListhonoraireComponent = __decorate([
    Component({
        selector: 'app-listhonoraire',
        templateUrl: './listhonoraire.component.html',
        styleUrls: ['./listhonoraire.component.css']
    })
], ListhonoraireComponent);
export { ListhonoraireComponent };
//# sourceMappingURL=listhonoraire.component.js.map