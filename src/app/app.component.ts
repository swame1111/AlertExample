import { Component,OnInit } from '@angular/core';
import { SohoMastheadComponent } from 'ids-enterprise-ng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit 
{
  logout:boolean=true;
  title = 'isw-inlinemockup';
  
  constructor(private router:Router) 
  { 
    router.events.subscribe((val) => 
    {
      (this.router.url=="/"||this.router.url==""|| this.router.url=="/login")?this.logout=false:this.logout=true;
     });
  }
  ngOnInit() 
  {
    $('body').initialize("{locale: 'en-US'}");
    $('#userMenu').popupmenu({
      menu: 'userMenuOptions',
      trigger: 'click'
  });
  }
  killSession()
  {
  }
}
