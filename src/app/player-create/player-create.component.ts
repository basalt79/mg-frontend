import { Component, OnInit, Input } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  @Input() playerDetails = {
    firstName: '',
    lastName: '',
    club: '',
    shirtNumber: 0,
    position: ''
  };

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() { }

  addPlayer() {
    this.restApi.createPlayer(this.playerDetails).subscribe((data: {}) => {
      this.router.navigate(['/player-list']);
    });
  }

}
