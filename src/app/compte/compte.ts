export class Compte {
    id: number;
    name: string;
    password: string;
    sold: number;
  
    constructor(id_compte: number,nom: string ,password: string, capacite: number) {
      this.id= id_compte;
      this.password = password;
      this.name = nom;
      this.sold = capacite;
      }
  }