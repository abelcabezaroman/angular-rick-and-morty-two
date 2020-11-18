import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharactersDetailPageComponent } from './pages/characters-page/pages/characters-detail-page/characters-detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'characters/:id', component: CharactersDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
