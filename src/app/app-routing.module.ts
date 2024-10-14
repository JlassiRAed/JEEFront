import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogeComponent } from './cataloge/cataloge.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home" },
  
  { path: 'cataloge', component:CatalogeComponent , title: "cataloge" },
  { path: 'about', component:AboutComponent , title: "about" },
  { path: 'contact', component:ContactComponent , title: "contact" },
  { path: 'notfound', component:NotfoundComponent , title: "404" },
  { path: '**', component: NotfoundComponent, title: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
