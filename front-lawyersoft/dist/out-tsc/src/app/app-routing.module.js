import { __decorate } from "tslib";
import { ListdroitaccesComponent } from './views/configurationtype/profil/droitacces/listdroitacces/listdroitacces.component';
import { AdddroitaccesComponent } from './views/configurationtype/profil/droitacces/adddroitacces/adddroitacces.component';
import { ProfilComponent } from './views/configurationtype/profil/profil.component';
import { UpdateuserComponent } from './views/user/updateuser/updateuser.component';
import { ListuserComponent } from './views/user/listuser/listuser.component';
import { AdduserComponent } from './views/user/adduser/adduser.component';
import { UserComponent } from './views/user/user.component';
import { AuthGuard } from './security/auth-guard.service';
import { UpdatetafComponent } from './views/consultation/travailleafaire/updatetaf/updatetaf.component';
import { ListtafComponent } from './views/consultation/travailleafaire/listtaf/listtaf.component';
import { AddtafComponent } from './views/consultation/travailleafaire/addtaf/addtaf.component';
import { TravailleafaireComponent } from './views/consultation/travailleafaire/travailleafaire.component';
import { UpdaterendezvousComponent } from './views/consultation/rendezvous/updaterendezvous/updaterendezvous.component';
import { ListrendezvousComponent } from './views/consultation/rendezvous/listrendezvous/listrendezvous.component';
import { AddrendezvousComponent } from './views/consultation/rendezvous/addrendezvous/addrendezvous.component';
import { RendezvousComponent } from './views/consultation/rendezvous/rendezvous.component';
import { UpdateauxiliaireComponent } from './views/auxiliaire/updateauxiliaire/updateauxiliaire.component';
import { ListauxiliaireComponent } from './views/auxiliaire/listauxiliaire/listauxiliaire.component';
import { AddauxiliaireComponent } from './views/auxiliaire/addauxiliaire/addauxiliaire.component';
import { AuxiliaireComponent } from './views/auxiliaire/auxiliaire.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './views/login/login.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { TribunauxComponent } from './views/tribunaux/tribunaux.component';
import { AddtribunauxComponent } from './views/tribunaux/addtribunaux/addtribunaux.component';
import { ListtribunauxComponent } from './views/tribunaux/listtribunaux/listtribunaux.component';
import { UpdatetribunauxComponent } from './views/tribunaux/updatetribunaux/updatetribunaux.component';
import { TypeaffaireComponent } from './views/configurationtype/typeaffaire/typeaffaire.component';
import { TypeintervenantComponent } from './views/configurationtype/typeintervenant/typeintervenant.component';
import { TypeauxiliaireComponent } from './views/configurationtype/typeauxiliaire/typeauxiliaire.component';
import { TypetribunauxComponent } from './views/configurationtype/typetribunaux/typetribunaux.component';
import { IntervenantComponent } from './views/intervenant/intervenant.component';
import { ListintervenantComponent } from './views/intervenant/listintervenant/listintervenant.component';
import { AddintervenantComponent } from './views/intervenant/addintervenant/addintervenant.component';
import { UpdateintervenantComponent } from './views/intervenant/updateintervenant/updateintervenant.component';
import { DetailsintervenantComponent } from './views/intervenant/detailsintervenant/detailsintervenant.component';
import { DetailsauxiliaireComponent } from './views/auxiliaire/detailsauxiliaire/detailsauxiliaire.component';
import { AffaireComponent } from './views/affaire/affaire.component';
import { AddaffaireComponent } from './views/affaire/addaffaire/addaffaire.component';
import { PrecontentieuxComponent } from './views/affaire/precontentieux/precontentieux.component';
import { EncoursComponent } from './views/affaire/encours/encours.component';
import { DetailsprecontentieuxComponent } from './views/affaire/precontentieux/detailsprecontentieux/detailsprecontentieux.component';
import { UpdateprecontentieuxComponent } from './views/affaire/precontentieux/updateprecontentieux/updateprecontentieux.component';
import { UpdateencoursComponent } from './views/affaire/encours/updateencours/updateencours.component';
import { DetailsencoursComponent } from './views/affaire/encours/detailsencours/detailsencours.component';
import { DossierComponent } from './views/dossier/dossier.component';
import { ListdossierComponent } from './views/dossier/listdossier/listdossier.component';
import { FichierComponent } from './views/fichier/fichier.component';
import { ListfichierComponent } from './views/fichier/listfichier/listfichier.component';
import { ArchiverComponent } from './views/affaire/archiver/archiver.component';
import { CalendrierComponent } from './views/calendrier/calendrier.component';
import { DetailsrendezvousComponent } from './views/consultation/rendezvous/detailsrendezvous/detailsrendezvous.component';
import { DetailstafComponent } from './views/consultation/travailleafaire/detailstaf/detailstaf.component';
import { PhaseComponent } from './views/phase/phase.component';
import { ListphaseComponent } from './views/phase/listphase/listphase.component';
import { OperationComponent } from './views/phase/operation/operation.component';
import { UpdateaudianceComponent } from './views/phase/operation/audiance/updateaudiance/updateaudiance.component';
import { HonoraireComponent } from './views/honoraire/honoraire.component';
import { ListhonoraireComponent } from './views/honoraire/listhonoraire/listhonoraire.component';
import { HonoraireaffaireComponent } from './views/honoraire/honoraireaffaire/honoraireaffaire.component';
import { AudianceComponent } from './views/phase/operation/audiance/audiance.component';
import { AddaudianceComponent } from './views/phase/operation/audiance/addaudiance/addaudiance.component';
import { ListaudianceComponent } from './views/phase/operation/audiance/listaudiance/listaudiance.component';
import { AddtravailfaireComponent } from './views/phase/operation/travailfaire/addtravailfaire/addtravailfaire.component';
import { ListtravailfaireComponent } from './views/phase/operation/travailfaire/listtravailfaire/listtravailfaire.component';
import { UpdatetravailfaireComponent } from './views/phase/operation/travailfaire/updatetravailfaire/updatetravailfaire.component';
import { TravailfaireComponent } from './views/phase/operation/travailfaire/travailfaire.component';
import { RdvComponent } from './views/phase/operation/rdv/rdv.component';
import { AddRdvComponent } from './views/phase/operation/Rdv/add-rdv/add-rdv.component';
import { ListRdvComponent } from './views/phase/operation/Rdv/list-rdv/list-rdv.component';
import { UpdateRdvComponent } from './views/phase/operation/Rdv/update-rdv/update-rdv.component';
import { StatusaudianceComponent } from './views/configurationtype/statusaudiance/statusaudiance.component';
const routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
            { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard] },
            { path: 'calendrier', component: CalendrierComponent },
            {
                path: 'tribunaux', component: TribunauxComponent, children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'ajouter', component: AddtribunauxComponent },
                    { path: 'list', component: ListtribunauxComponent },
                    { path: 'update/:id', component: UpdatetribunauxComponent },
                ]
            },
            {
                path: 'auxiliaire', component: AuxiliaireComponent, children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'ajouter', component: AddauxiliaireComponent },
                    { path: 'list', component: ListauxiliaireComponent },
                    { path: 'details/:id', component: DetailsauxiliaireComponent },
                    { path: 'update/:id', component: UpdateauxiliaireComponent }
                ]
            },
            {
                path: 'rendez-vous', component: RendezvousComponent, children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'ajouter', component: AddrendezvousComponent },
                    { path: 'list', component: ListrendezvousComponent },
                    { path: 'detailsrdv/:id', component: DetailsrendezvousComponent },
                    { path: 'updaterdv/:id', component: UpdaterendezvousComponent }
                ]
            },
            {
                path: 'taf', component: TravailleafaireComponent, children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'ajouter', component: AddtafComponent },
                    { path: 'list', component: ListtafComponent },
                    { path: 'detailstaf/:id', component: DetailstafComponent },
                    { path: 'updatetaf/:id', component: UpdatetafComponent }
                ]
            },
            {
                path: 'intervenant', component: IntervenantComponent, children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'ajouter', component: AddintervenantComponent },
                    { path: 'list', component: ListintervenantComponent },
                    { path: 'details/:id', component: DetailsintervenantComponent },
                    { path: 'update/:id', component: UpdateintervenantComponent }
                ]
            },
            {
                path: 'phase', component: PhaseComponent, children: [
                    { path: '', redirectTo: 'suiviephase', pathMatch: 'full' },
                    { path: 'suiviephase/:id', component: ListphaseComponent },
                    {
                        path: 'operation/:id', component: OperationComponent, children: [
                            {
                                path: 'audiance', component: AudianceComponent, children: [
                                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                                    { path: 'ajouter', component: AddaudianceComponent },
                                    { path: 'list', component: ListaudianceComponent },
                                    { path: 'update/:id', component: UpdateaudianceComponent }
                                ]
                            },
                            {
                                path: 'trvailleafaire', component: TravailfaireComponent, children: [
                                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                                    { path: 'ajouter', component: AddtravailfaireComponent },
                                    { path: 'list', component: ListtravailfaireComponent },
                                    { path: 'update/:id', component: UpdatetravailfaireComponent }
                                ]
                            },
                            {
                                path: 'rendezvous', component: RdvComponent, children: [
                                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                                    { path: 'ajouter', component: AddRdvComponent },
                                    { path: 'list', component: ListRdvComponent },
                                    { path: 'update/:id', component: UpdateRdvComponent }
                                ]
                            },
                        ],
                    },
                ]
            }, {
                path: 'user', component: UserComponent, children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'ajouter', component: AdduserComponent },
                    { path: 'list', component: ListuserComponent },
                    { path: 'update/:id', component: UpdateuserComponent }
                ]
            },
            {
                path: 'affaire', component: AffaireComponent, children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'ajouter', component: AddaffaireComponent },
                    { path: 'precontentieux', component: PrecontentieuxComponent },
                    { path: 'encours', component: EncoursComponent },
                    { path: 'archiver', component: ArchiverComponent },
                    { path: 'detailsprecontentieux/:id', component: DetailsprecontentieuxComponent },
                    { path: 'detailsencours/:id', component: DetailsencoursComponent },
                    { path: 'updateprecontentieux/:id', component: UpdateprecontentieuxComponent },
                    { path: 'updateencours/:id', component: UpdateencoursComponent },
                    { path: 'details/:id', component: DetailsintervenantComponent },
                    { path: 'update/:id', component: UpdateintervenantComponent }
                ]
            },
            {
                path: 'honoraire', component: HonoraireComponent, children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', component: ListhonoraireComponent },
                    { path: 'honoraireaffaire/:id', component: HonoraireaffaireComponent },
                    { path: 'update/:id', component: UpdateintervenantComponent }
                ]
            },
            {
                path: 'dossier', component: DossierComponent, children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'dossieraffaire/:id', component: ListdossierComponent },
                ]
            },
            {
                path: 'fichier', component: FichierComponent, children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'fichierdossier/:id', component: ListfichierComponent },
                ]
            },
            { path: 'profiles', component: ProfilComponent },
            { path: 'adddroitacces/:idProfile', component: AdddroitaccesComponent },
            { path: 'listdroitacces/:idProfile', component: ListdroitaccesComponent },
            { path: 'typeaffaire', component: TypeaffaireComponent },
            { path: 'typeintervenant', component: TypeintervenantComponent },
            { path: 'typeauxiliaire', component: TypeauxiliaireComponent },
            { path: 'typetribunal', component: TypetribunauxComponent },
            { path: 'statusaudiance', component: StatusaudianceComponent },
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map