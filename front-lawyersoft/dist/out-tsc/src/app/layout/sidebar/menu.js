export const menu = [
    {
        name: "Accueil",
        routerLink: "/accueil",
        icon: "feather icon-home"
    },
    {
        name: "Calenderier",
        routerLink: "/calendrier",
        icon: "fa fa-calendar"
    },
    {
        name: "Affaires",
        routerLink: "",
        icon: "fa fa-balance-scale",
        children: [
            {
                name: "Ajouter",
                routerLink: "/affaire/ajouter",
                icon: "fa fa-plus-circle"
            },
            {
                name: "Pré-contentieux",
                routerLink: "/affaire/precontentieux",
                icon: "fa fa-navicon"
            },
            {
                name: "En cours",
                routerLink: "/affaire/encours",
                icon: "fa fa-navicon"
            },
            {
                name: "Archivées",
                routerLink: "/affaire/archiver",
                icon: "fa fa-navicon"
            }
        ]
    },
    {
        name: "Honoraires",
        routerLink: "/honoraire",
        icon: "fa fa-dollar"
    },
    {
        name: "Intervenants",
        routerLink: "/intervenant",
        icon: "fa fa-users"
    },
    {
        name: "Auxiliaires",
        routerLink: "/auxiliaire",
        icon: "fa fa-users"
    },
    {
        name: "Tribunaux",
        routerLink: "/tribunaux",
        icon: "fa fa-university"
    },
    {
        name: "Consultations",
        routerLink: "",
        icon: "fa fa-tags",
        children: [
            {
                name: "Rendez-vous",
                routerLink: "/rendez-vous",
                icon: "zmdi zmdi-account-calendar"
            },
            {
                name: "Travaille à faire",
                routerLink: "/taf",
                icon: "fa fa-tag"
            }
        ]
    },
    {
        name: "Utilisateurs",
        routerLink: "/user",
        icon: "fa fa-users"
    },
    {
        name: "Configuration",
        routerLink: "",
        icon: "fa fa-cogs",
        children: [
            {
                name: "Profiles Utilisateurs",
                routerLink: "/profiles",
                icon: "fa fa-cog"
            },
            {
                name: "Types affaire",
                routerLink: "/typeaffaire",
                icon: "fa fa-cog"
            },
            {
                name: "Types intervenant",
                routerLink: "/typeintervenant",
                icon: "fa fa-cog"
            },
            {
                name: "Types auxiliaire",
                routerLink: "/typeauxiliaire",
                icon: "fa fa-cog"
            },
            {
                name: "Types tribunaux",
                routerLink: "/typetribunal",
                icon: "fa fa-cog"
            },
            {
                name: "Status audiance",
                routerLink: "/statusaudiance",
                icon: "fa fa-cog"
            }
        ]
    }
];
//# sourceMappingURL=menu.js.map