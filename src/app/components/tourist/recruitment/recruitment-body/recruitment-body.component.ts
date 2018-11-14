import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment-body',
  templateUrl: './recruitment-body.component.html',
  styleUrls: ['./recruitment-body.component.css']
})
export class RecruitmentBodyComponent implements OnInit {
  private clickStep:number=1;
  constructor() { }

  ngOnInit() {
  }

}
