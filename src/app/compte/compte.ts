export class Compte {
    id: number;
    nom: string;
    password: string;
    sold: number;
  
    constructor(id_compte: number,nom: string ,password: string, capacite: number) {
      this.id= id_compte;
      this.password = password;
      this.nom = nom;
      this.sold = capacite;
      }
  }