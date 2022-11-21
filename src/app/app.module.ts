import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaModule } from './media/media.module';
import { SharedModule } from './shared/shared.module';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MediaModule,
    SharedModule
  ],
  providers: [ {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
