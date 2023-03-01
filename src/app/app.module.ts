import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { footerAuth } from 'src/components/footer/footer.component';
import { menuSelector } from 'src/components/menuSelector/menuSelector.component';
import { pageTitle } from 'src/components/pageTitle/pageTitle.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { information } from './pages/information/information.component';


@NgModule({
  declarations: [
    AppComponent,
    information,
    menuSelector,
    footerAuth,
    pageTitle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
