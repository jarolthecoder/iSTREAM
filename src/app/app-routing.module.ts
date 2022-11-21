import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './media/pages/home/home.component';
import {  MoviesComponent } from './media/pages/movies/movies.component';
import { SavedComponent } from './media/pages/saved/saved.component';
import { TvShowsComponent } from './media/pages/tv-shows/tv-shows.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},

  {path: 'movies', component: MoviesComponent},
  {path: 'tv-shows', component: TvShowsComponent},
  {path: 'saved', component: SavedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
