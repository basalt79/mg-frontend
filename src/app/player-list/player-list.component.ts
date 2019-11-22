import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  Players: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    return this.restApi.getPlayers().subscribe((data: {}) => {
      this.Players = data;
    });
  }

  deletePlayer(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deletePlayer(id).subscribe(data => {
        this.loadPlayers();
      });
    }
  }


}
