import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserStatsService } from 'src/app/services/user-stats.service';
import { User } from 'src/app/models/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  api_url!:string;
  user!:any;
  userInfoSubscription! :Subscription;

  constructor(private route: ActivatedRoute, private userstaservice: UserStatsService) { }


  ngOnDestroy(): void {
    this.userInfoSubscription.unsubscribe();
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.api_url = this.route.snapshot.paramMap.get('api_url')!;
    this.userstaservice.retrieveUserInfo(this.api_url);
    this.getInfo()
  }

  getInfo (){
    this.userInfoSubscription = this.userstaservice.getUserInfo().subscribe((response) => {
      this.user = response;
    })
  }

}
