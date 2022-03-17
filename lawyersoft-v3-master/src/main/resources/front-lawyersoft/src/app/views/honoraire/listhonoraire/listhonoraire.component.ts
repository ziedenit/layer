import { Component, OnInit, Input } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';
import { Affaire } from 'src/app/entitie/Affaire';
import { HonoraireService } from 'src/app/services/honoraire.service';
import { Honnoraire } from 'src/app/entitie/Honnoraire';
import { TypeAffaire } from 'src/app/entitie/TypeAffaire';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';


declare let jsPDF;


@Component({
  selector: 'app-listhonoraire',
  templateUrl: './listhonoraire.component.html',
  styleUrls: ['./listhonoraire.component.css']
})
export class ListhonoraireComponent implements OnInit {

  listHonnoraire: Honnoraire[];
  honnoraire: Honnoraire;
  selectedHonnoraire: Honnoraire;

  cols: any[];
  msgs: Message[] = [];
  first: number = 0;
  items: MenuItem[];
  home: MenuItem;
  idAffaire: any;
  affaire: Affaire;
  affaireId: any;
  idhonoraire: any;
  fileUrl;
  response: any;

  @Input("totaldepense")
  totaldepense: any;


  constructor(
    private affaireservice: AffaireService,
    private honoraireservice: HonoraireService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.affaireId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    console.log("this.totaldepense", this.totaldepense);


    this.honoraireservice.findByType().subscribe((res: Honnoraire[]) => {
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

}
