import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameIndexComponent } from './components/game-index/game-index/game-index.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { GameSearchComponent } from './components/game-search/game-search/game-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GameIndexComponent,
    FooterComponent,
    GameSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
