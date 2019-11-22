import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerCreateComponent} from './player-create/player-create.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayerEditComponent} from './player-edit/player-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'player-create' },
  { path: 'player-create', component: PlayerCreateComponent },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'player-edit/:id', component: PlayerEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
