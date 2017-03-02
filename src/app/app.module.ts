import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { MoreHttpRequestsComponent } from './more-http-requests/more-http-requests.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { SearchResultComponent } from './youtube-search/search-result/search-result.component';
import { SearchBoxComponent } from './youtube-search/search-box/search-box.component';

import { YoutubeService, youTubeServiceInjectables } from './youtube-search/youtube-service/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    MoreHttpRequestsComponent,
    YoutubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [YoutubeService, youTubeServiceInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
