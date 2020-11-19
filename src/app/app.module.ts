import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { CharactersDetailPageComponent } from './pages/characters-page/pages/characters-detail-page/characters-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    CharactersPageComponent,
    GalleryComponent,
    CharactersDetailPageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
