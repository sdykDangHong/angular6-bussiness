import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-body-common',
  templateUrl: './footer-body-common.component.html',
  styleUrls: ['./footer-body-common.component.css']
})
export class FooterBodyCommonComponent implements OnInit {
  @Input() title:string="";
  @Input() tit:string="";
  constructor() { }

  ngOnInit() {
  }

}
