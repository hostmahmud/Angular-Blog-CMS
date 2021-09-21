import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin Panel';
  admin:boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router){
      if(window.location.href.substring(22,27) === "admin"){
        this.admin=true;
        console.log("admin")
      }
      if(window.location.href.substring(22,27) === "front"){
        this.admin=false;
        console.log("front")
      }
    }
}
