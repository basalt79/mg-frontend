import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;
  playerData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.restApi.getPlayer(this.id).subscribe((data: {}) => {
      this.playerData = data;
    });
  }

  updatePlayer() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updatePlayer(this.id, this.playerData).subscribe(data => {
        this.router.navigate(['/player-list']);
      });
    }
  }


}
