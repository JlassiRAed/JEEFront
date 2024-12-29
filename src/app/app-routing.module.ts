import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 
import { NotfoundComponent } from './notfound/notfound.component';
import { FilmsComponent } from './films/films.component';
import { SeanceComponent } from './seance/seance.component';
import { SalleComponent } from './salle/salle.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home" },
  { path: 'about', component:AboutComponent , title: "about" },
  { path: 'films', component:FilmsComponent , title: "films" },
  { path: 'seances', component:SeanceComponent , title: "seances" },
  { path: 'contact', component:ContactComponent , title: "contact" },
  { path: 'salle', component:SalleComponent , title: "salle" },
  { path: 'notfound', component:NotfoundComponent , title: "404" },
  { path: '**', component: NotfoundComponent, title: "404" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
