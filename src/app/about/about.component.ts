import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  teamMembers = [
    { 
      name: 'Lindsay Walton', 
      role: 'CEO', 
      image: 'assets/c6.jfif' 
    },
    { 
      name: 'Courtney Henry', 
      role: 'Designer', 
      image: 'assets/c5.jfif' 
    },
    { 
      name: 'Tom Cook', 
      role: 'Director of Product', 
      image: 'assets/c4.jfif' 
    },
    { 
      name: 'Whitney Francis', 
      role: 'Pastry chef', 
      image: 'assets/c3.jpg' 
    },
    { 
      name: 'Leonard Krasner', 
      role: 'Pastry chef', 
      image: 'assets/c2.png' 
    },
    { 
      name: 'Floyd Miles', 
      role: 'Pastry chef', 
      image: 'assets/c1.jpg' 
    }
  ];

}
