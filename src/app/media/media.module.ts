import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { SavedComponent } from './pages/saved/saved.component';
import { TrendingComponent } from './components/trending/trending.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesBookmarkedComponent } from './components/movies-bookmarked/movies-bookmarked.component';
import { TvseriesBookmarkedComponent } from './components/tvseries-bookmarked/tvseries-bookmarked.component';






@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    SavedComponent,
    TrendingComponent,
    RecommendedComponent,
    MoviesBookmarkedComponent,
    TvseriesBookmarkedComponent

  ],
  exports: [
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    SavedComponent,
    TrendingComponent,
    RecommendedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MediaModule { }
