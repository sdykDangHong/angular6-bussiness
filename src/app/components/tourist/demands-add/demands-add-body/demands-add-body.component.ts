import { Component, OnInit } from '@angular/core';
import {CommonStoreService} from "../../../../service/commonStore/common-store.service";

@Component({
  selector: 'app-demands-add-body',
  templateUrl: './demands-add-body.component.html',
  styleUrls: ['./demands-add-body.component.css']
})
export class DemandsAddBodyComponent implements OnInit {
  public demandsStep:number=1;
  constructor(
    private commonStore:CommonStoreService
  ) { }

  ngOnInit() {
    this.resetDemandsStep()
  }
  resetDemandsStep(){
    if(this.commonStore.getUserInfo()['customerId']){
      this.demandsStep=1
    }else{
      this.demandsStep=0
    }
  }
  demandsAddRegister(){
    this.demandsStep=1
  }
}
