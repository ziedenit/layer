import { __decorate } from "tslib";
import { JwtInterceptorService } from './security/jwt-interceptor.service';
import { ErrorInterceptorService } from './security/error-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ContenuComponent } from './layout/contenu/contenu.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './views/login/login.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { TribunauxComponent } from './views/tribunaux/tribunaux.component';
import { AddtribunauxComponent } from './views/tribunaux/addtribunaux/addtribunaux.component';
import { ListtribunauxComponent } from './views/tribunaux/listtribunaux/listtribunaux.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UpdatetribunauxComponent } from './views/tribunaux/updatetribunaux/updatetribunaux.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AuxiliaireComponent } from './views/auxiliaire/auxiliaire.component';
import { AddauxiliaireComponent } from './views/auxiliaire/addauxiliaire/addauxiliaire.component';
import { ListauxiliaireComponent } from './views/auxiliaire/listauxiliaire/listauxiliaire.component';
import { UpdateauxiliaireComponent } from './views/auxiliaire/updateauxiliaire/updateauxiliaire.component';
import { RendezvousComponent } from './views/consultation/rendezvous/rendezvous.component';
import { TravailleafaireComponent } from './views/consultation/travailleafaire/travailleafaire.component';
import { ListrendezvousComponent } from './views/consultation/rendezvous/listrendezvous/listrendezvous.component';
import { AddrendezvousComponent } from './views/consultation/rendezvous/addrendezvous/addrendezvous.component';
import { UpdaterendezvousComponent } from './views/consultation/rendezvous/updaterendezvous/updaterendezvous.component';
import { AddtafComponent } from './views/consultation/travailleafaire/addtaf/addtaf.component';
import { ListtafComponent } from './views/consultation/travailleafaire/listtaf/listtaf.component';
import { UpdatetafComponent } from './views/consultation/travailleafaire/updatetaf/updatetaf.component';
import { TypeaffaireComponent } from './views/configurationtype/typeaffaire/typeaffaire.component';
import { TypeintervenantComponent } from './views/configurationtype/typeintervenant/typeintervenant.component';
import { TypeauxiliaireComponent } from './views/configurationtype/typeauxiliaire/typeauxiliaire.component';
import { TypetribunauxComponent } from './views/configurationtype/typetribunaux/typetribunaux.component';
import { IntervenantComponent } from './views/intervenant/intervenant.component';
import { ListintervenantComponent } from './views/intervenant/listintervenant/listintervenant.component';
import { TooltipModule } from 'primeng/tooltip';
import { AddintervenantComponent } from './views/intervenant/addintervenant/addintervenant.component';
import { UpdateintervenantComponent } from './views/intervenant/updateintervenant/updateintervenant.component';
import { DetailsintervenantComponent } from './views/intervenant/detailsintervenant/detailsintervenant.component';
import { DetailsauxiliaireComponent } from './views/auxiliaire/detailsauxiliaire/detailsauxiliaire.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AffaireComponent } from './views/affaire/affaire.component';
import { AddaffaireComponent } from './views/affaire/addaffaire/addaffaire.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';
import { PrecontentieuxComponent } from './views/affaire/precontentieux/precontentieux.component';
import { EncoursComponent } from './views/affaire/encours/encours.component';
import { DetailsprecontentieuxComponent } from './views/affaire/precontentieux/detailsprecontentieux/detailsprecontentieux.component';
import { UpdateprecontentieuxComponent } from './views/affaire/precontentieux/updateprecontentieux/updateprecontentieux.component';
import { UpdateencoursComponent } from './views/affaire/encours/updateencours/updateencours.component';
import { DetailsencoursComponent } from './views/affaire/encours/detailsencours/detailsencours.component';
import { DossierComponent } from './views/dossier/dossier.component';
import { ListdossierComponent } from './views/dossier/listdossier/listdossier.component';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FichierComponent } from './views/fichier/fichier.component';
import { ListfichierComponent } from './views/fichier/listfichier/listfichier.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ArchiverComponent } from './views/affaire/archiver/archiver.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { CalendrierComponent } from './views/calendrier/calendrier.component';
import { CalendarModule } from 'primeng/calendar';
import { DetailsrendezvousComponent } from './views/consultation/rendezvous/detailsrendezvous/detailsrendezvous.component';
import { DetailstafComponent } from './views/consultation/travailleafaire/detailstaf/detailstaf.component';
import { DatePipe } from '@angular/common';
import { PhaseComponent } from './views/phase/phase.component';
import { ListphaseComponent } from './views/phase/listphase/listphase.component';
import { TabViewModule } from 'primeng/tabview';
import { StepsModule } from 'primeng/steps';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DataViewModule } from 'primeng/dataview';
import { OperationComponent } from './views/phase/operation/operation.component';
import { UpdateaudianceComponent } from './views/phase/operation/audiance/updateaudiance/updateaudiance.component';
import { ChartModule } from 'primeng/chart';
import { HonoraireComponent } from './views/honoraire/honoraire.component';
import { ListhonoraireComponent } from './views/honoraire/listhonoraire/listhonoraire.component';
import { HonoraireaffaireComponent } from './views/honoraire/honoraireaffaire/honoraireaffaire.component';
import { AudianceComponent } from './views/phase/operation/audiance/audiance.component';
import { AddaudianceComponent } from './views/phase/operation/audiance/addaudiance/addaudiance.component';
import { ListaudianceComponent } from './views/phase/operation/audiance/listaudiance/listaudiance.component';
import { TravailfaireComponent } from './views/phase/operation/travailfaire/travailfaire.component';
import { AddtravailfaireComponent } from './views/phase/operation/travailfaire/addtravailfaire/addtravailfaire.component';
import { ListtravailfaireComponent } from './views/phase/operation/travailfaire/listtravailfaire/listtravailfaire.component';
import { UpdatetravailfaireComponent } from './views/phase/operation/travailfaire/updatetravailfaire/updatetravailfaire.component';
import { RdvComponent } from './views/phase/operation/rdv/rdv.component';
import { AddRdvComponent } from './views/phase/operation/Rdv/add-rdv/add-rdv.component';
import { ListRdvComponent } from './views/phase/operation/Rdv/list-rdv/list-rdv.component';
import { UpdateRdvComponent } from './views/phase/operation/Rdv/update-rdv/update-rdv.component';
import { UserComponent } from './views/user/user.component';
import { AdduserComponent } from './views/user/adduser/adduser.component';
import { ListuserComponent } from './views/user/listuser/listuser.component';
import { UpdateuserComponent } from './views/user/updateuser/updateuser.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DepenseComponent } from './views/honoraire/honoraireaffaire/depense/depense.component';
import { ListComponent } from './views/honoraire/honoraireaffaire/depense/list/list.component';
import { AddComponent } from './views/honoraire/honoraireaffaire/depense/add/add.component';
import { UpdateComponent } from './views/honoraire/honoraireaffaire/depense/update/update.component';
import { VersementComponent } from './views/honoraire/honoraireaffaire/versement/versement.component';
import { AddversementComponent } from './views/honoraire/honoraireaffaire/versement/addversement/addversement.component';
import { ListversementComponent } from './views/honoraire/honoraireaffaire/versement/listversement/listversement.component';
import { UpdateversementComponent } from './views/honoraire/honoraireaffaire/versement/updateversement/updateversement.component';
import { StatusaudianceComponent } from './views/configurationtype/statusaudiance/statusaudiance.component';
import { LecteurjugementComponent } from './views/phase/lecteurjugement/lecteurjugement.component';
import { AddjugementComponent } from './views/phase/lecteurjugement/addjugement/addjugement.component';
import { ProfilComponent } from './views/configurationtype/profil/profil.component';
import { DroitaccesComponent } from './views/configurationtype/profil/droitacces/droitacces.component';
import { PickListModule } from 'primeng/picklist';
import { ListdroitaccesComponent } from './views/configurationtype/profil/droitacces/listdroitacces/listdroitacces.component';
import { AdddroitaccesComponent } from './views/configurationtype/profil/droitacces/adddroitacces/adddroitacces.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            SidebarComponent,
            NavbarComponent,
            ContenuComponent,
            LayoutComponent,
            LoginComponent,
            AccueilComponent,
            TribunauxComponent,
            AddtribunauxComponent,
            ListtribunauxComponent,
            UpdatetribunauxComponent,
            AuxiliaireComponent,
            AddauxiliaireComponent,
            ListauxiliaireComponent,
            UpdateauxiliaireComponent,
            TypeaffaireComponent,
            TypeintervenantComponent,
            TypeauxiliaireComponent,
            TypetribunauxComponent,
            RendezvousComponent,
            TravailleafaireComponent,
            ListrendezvousComponent,
            AddrendezvousComponent,
            UpdaterendezvousComponent,
            AddtafComponent,
            ListtafComponent,
            UpdatetafComponent,
            IntervenantComponent,
            ListintervenantComponent,
            AddintervenantComponent,
            UpdateintervenantComponent,
            DetailsintervenantComponent,
            DetailsauxiliaireComponent,
            AffaireComponent,
            PrecontentieuxComponent,
            EncoursComponent,
            DetailsprecontentieuxComponent,
            UpdateprecontentieuxComponent,
            AddaffaireComponent,
            UpdateencoursComponent,
            DetailsencoursComponent,
            DossierComponent,
            ListdossierComponent,
            FichierComponent,
            ListfichierComponent,
            ArchiverComponent,
            CalendrierComponent,
            DetailsrendezvousComponent,
            DetailstafComponent,
            PhaseComponent,
            ListphaseComponent,
            OperationComponent,
            UpdateaudianceComponent,
            UpdateRdvComponent,
            HonoraireComponent,
            ListhonoraireComponent,
            HonoraireaffaireComponent,
            AudianceComponent,
            AddaudianceComponent,
            ListaudianceComponent,
            TravailfaireComponent,
            AddtravailfaireComponent,
            ListtravailfaireComponent,
            UpdatetravailfaireComponent,
            RdvComponent,
            AddRdvComponent,
            ListRdvComponent,
            UserComponent,
            AdduserComponent,
            ListuserComponent,
            UpdateuserComponent,
            DepenseComponent,
            ListComponent,
            AddComponent,
            UpdateComponent,
            VersementComponent,
            AddversementComponent,
            ListversementComponent,
            UpdateversementComponent,
            StatusaudianceComponent,
            LecteurjugementComponent,
            AddjugementComponent,
            ProfilComponent,
            DroitaccesComponent,
            ListdroitaccesComponent,
            AdddroitaccesComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            BrowserAnimationsModule,
            TableModule,
            SliderModule,
            DropdownModule,
            MultiSelectModule,
            ContextMenuModule,
            ButtonModule,
            FormsModule,
            ReactiveFormsModule,
            InputTextModule,
            ConfirmDialogModule,
            MessagesModule,
            ToastModule,
            TooltipModule,
            CalendarModule,
            InputTextareaModule,
            FieldsetModule,
            DialogModule,
            DynamicDialogModule,
            BreadcrumbModule,
            FileUploadModule,
            FullCalendarModule,
            TabViewModule,
            StepsModule,
            RadioButtonModule,
            DataViewModule,
            ChartModule,
            InputSwitchModule,
            PickListModule
        ],
        providers: [ConfirmationService, MessageService, DatePipe,
            { provide: LocationStrategy, useClass: HashLocationStrategy },
            { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
            { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map