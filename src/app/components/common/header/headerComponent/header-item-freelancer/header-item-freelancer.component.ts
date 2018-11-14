import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header-item-freelancer',
  templateUrl: './header-item-freelancer.component.html',
  styleUrls: ['../../header.component.css']
})
export class HeaderItemFreelancerComponent implements OnInit {
  @Input() public menuList:any[]=[];
  @Input() public userInfo:object={};
  @Output() handle:EventEmitter<any>=new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  change(event){
    this.handle.emit(event)
  }
}
