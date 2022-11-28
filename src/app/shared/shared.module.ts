import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookmarkBtnComponent } from './components/bookmark-btn/bookmark-btn.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PlayBtnComponent } from './components/play-btn/play-btn.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MediaDisplayerComponent } from './media-displayer/media-displayer.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ScrollBtnComponent } from './components/scroll-btn/scroll-btn.component';






@NgModule({
  declarations: [
    SidebarComponent,
    BookmarkBtnComponent,
    MediaDisplayerComponent,
    SearchBarComponent,
    PlayBtnComponent,
    SearchResultsComponent,
    SpinnerComponent,
    ScrollBtnComponent
  ],
  exports: [
    SidebarComponent,
    BookmarkBtnComponent,
    MediaDisplayerComponent,
    SearchBarComponent,
    PlayBtnComponent,
    SpinnerComponent,
    ScrollBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
