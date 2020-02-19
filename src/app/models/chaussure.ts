export class Chaussure {
    id: number;
    nom: string;
    marque: string;
    type: string;
    taille: number;
    dateEntreStock: Date;
    constructor(id = null, nom = null, marque = null, type = null, taille = null, dateEntreStock = null) {
        this.id = id;
        this.nom = nom;
        this.marque = marque;
        this.type = type;
        this.taille = taille;
        this.dateEntreStock = dateEntreStock;
    }
}

/*     "chaussure": [
    {
    "id": 1,
    "nom": "f50",
    "marque": "Adidas",
    "type": "Football",
    "taille": 43,
    "dateEntreStock": "2012-04-23T18:25:43.511Z"
    }
    ]
    } */

