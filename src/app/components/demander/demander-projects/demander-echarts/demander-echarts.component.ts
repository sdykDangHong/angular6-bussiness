import { Component, OnInit } from '@angular/core';
import {CommonStoreService} from "../../../../service/commonStore/common-store.service";
import {DemanderProjectsService} from "../../../../service/demanderProjects/demander-projects.service";

@Component({
  selector: 'app-demander-echarts',
  templateUrl: './demander-echarts.component.html',
  styleUrls: ['./demander-echarts.component.css']
})
export class DemanderEchartsComponent implements OnInit {
  public echartsOption:object={};
  public loadedEcharts:boolean=true;
  public stateList:any[]=[
    [
      {
        word:"审核中",
        backgroundColor:"rgb(249, 118, 0)",
        state:""
      },
      {
        word:"执行中",
        backgroundColor:"rgb(255, 176, 45)",
        state:""
      }
    ],
    [
      {
        word:"沟通中",
        backgroundColor:"rgb(114, 215, 214)",
        state:""
      },
      {
        word:"已完成",
        backgroundColor:"rgb(63, 178, 226)",
        state:""
      }
    ],
    [
      {
        word:"签约中",
        backgroundColor:"rgb(112, 177, 255)",
        state:""
      },
      {
        word:"已关闭",
        backgroundColor:"rgb(96, 122, 228)",
        state:""
      }
    ]
  ]
  constructor(
    private commonStore:CommonStoreService,
    private demanderProjects:DemanderProjectsService
  ) { }
  ngOnInit() {
    this.initData()
  }
  initData(){
    if(this.commonStore.getUserInfo()['customerId']){
      this.getDemandStatus()
    }else{
      this.commonStore.userInfoUpdated.subscribe((res:any)=>{
        if(!res.customerId){return false}
        this.getDemandStatus()
      })
    }
  }
  getDemandStatus(){
    this.demanderProjects.getDemandState().then((res:any)=>{
      this.initEcharts([res.examiningCount,res.executingCount,res.communicatingCount,res.doneCount,res.signingCount,res.closedCount])
      this.stateList[0][0].state=res.examiningCount
      this.stateList[0][1].state=res.executingCount
      this.stateList[1][0].state=res.communicatingCount
      this.stateList[1][1].state=res.doneCount
      this.stateList[2][0].state=res.signingCount
      this.stateList[2][1].state=res.closedCount
    })
  }
  initEcharts(valueList){
    let keyList=['审核中','执行中','沟通中','已完成',"签约中",'已关闭'];
    let dataList=[]
    keyList.map((item,index)=>{
      dataList.push({
        name:item,
        value:valueList[index]
      })
      return 1;
    })
    this.echartsOption={
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      series: [
        {
          name:'需求状态分布',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '16',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data:dataList
        }
      ]
    };
    this.loadedEcharts=false;
  }
}
