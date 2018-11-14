import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header-item-demander',
  templateUrl: './header-item-demander.component.html',
  styleUrls: ['../../header.component.css']
})
export class HeaderItemDemanderComponent implements OnInit {
  @Input() public menuList:any[]=[];
  @Input() public userInfo:object={};
  @Output() handle:EventEmitter<any>=new EventEmitter<any>();
  constructor() {
  }
  change(event){
    this.handle.emit(event)
  }
  ngOnInit() {
  }

}
