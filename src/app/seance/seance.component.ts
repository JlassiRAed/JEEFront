import { Component } from '@angular/core';
import { Film } from '../films/film';
import { ListFilmsService } from '../services/film/list-films.service';
import { OnInit } from '@angular/core';
import { PostFilmService } from '../services/film/post-film.service';
import { PutFilmService } from '../services/film/put-film.service';
import { DeleteFilmService } from '../services/film/delete-film.service';
import { ConfirmationService, MessageService } from 'primeng/api';



@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrl: './seance.component.css'
})
export class SeanceComponent {
  films: Film[]=[];
  visible: boolean = false;
  editvisible: boolean = false;
  removevisible: boolean = false; 
  filmName!: string;

   showDialog() {
        this.visible = true;
    }
    showDialogEdit() {
      this.editvisible = true;
    }
    showDialogRemove() {
      this.removevisible = true;}
  
      constructor(private listfilmservice: ListFilmsService,private postfilm:PostFilmService,private putfilm:PutFilmService,private deletefilm:DeleteFilmService,private confirmationService:ConfirmationService,private messageService:MessageService ) {}
      loadservice(){
        this.listfilmservice.getFilmsWithAxios().then((data) => {
          this.films = data;
          console.log(this.films);
      });
      }
  
      ngOnInit() {
        this.loadservice();
      }
  
      addFilm(filmName: string) {
        const newFilm = { name: filmName };
        this.postfilm.createFilm(newFilm).subscribe({
          next: (response) => console.log('Film créé avec succès :', response),
          error: (error) => console.error('Erreur lors de la création du film :', error),
        });
        this.visible = false
        this.loadservice();
        window.location.reload();
      }
  
      updateFilm(film:Film): void {
        this.putfilm.updateFilm(film).subscribe({
          next: (response) => {
            console.log('Film mis à jour avec succès', response);
          },
          error: (err) => {
            console.error('Erreur lors de la mise à jour du film', err);
          }
        });
        this.editvisible = false;
        this.loadservice();
        window.location.reload();
      }
      confirm2(event: Event, id: number) {
        console.log('ya3tek 3asba');
        this.confirmationService.confirm({
          target: event.target as EventTarget,
          message: 'Are you sure you want to delete this film?',
          icon: 'pi pi-exclamation-circle',
          accept: () => {
            this.deletefilm.deleteFilm(id).subscribe({
              next: (response) => {
                console.log('Film supprimé avec succès', response);
                this.messageService.add({
                  severity: 'success',
                  summary: 'Deleted',
                  detail: 'Film has been deleted successfully.',
                  life: 3000,
                });
                this.loadservice(); 
                window.location.reload();
              },
              error: (err) => {
                console.error('Erreur lors de la suppression du film', err);
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: 'An error occurred while deleting the film.',
                  life: 3000,
                });
              }
            });
          },
          reject: () => {
            this.messageService.add({
              severity: 'info',
              summary: 'Rejected',
              detail: 'You have rejected the deletion.',
              life: 3000,
            });
          }
        });
      }
  

}