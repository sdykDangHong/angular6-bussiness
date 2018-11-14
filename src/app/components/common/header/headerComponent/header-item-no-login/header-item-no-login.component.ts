import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-header-item-no-login',
  templateUrl: './header-item-no-login.component.html',
  styleUrls: ['../../header.component.css']
})
export class HeaderItemNoLoginComponent implements OnInit {
  @Input()
  public isHome:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
