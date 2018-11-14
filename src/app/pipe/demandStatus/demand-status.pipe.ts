import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demandStatus'
})
export class DemandStatusPipe implements PipeTransform {

  transform(value:number=6, args?: any): any {
    switch(value){
      case 0:
        return '审核中'
      case 1:
        return '审核失败'
      case 2:
        return '招募中'
      case 3:
        return '执行中'
      case 4:
        return '已完成'
      case 5:
        return '已关闭'
      case 6:
        return '沟通中'
      case 7:
        return '签约中'
      case 8:
        return '签约拒绝'
      case 9:
        return '签约过期'
      case 10:
        return '待托管'
      case 11:
        return '已托管'
      case 12:
        return '已支付'
      case 13:
        return '邀约中'
      case 14:
        return '邀约过期'
      case 15:
        return '邀约失败'
      case 16:
        return '邀约成功'
      case 17:
        return '待验收'
      case 18:
        return '验收通过'
      case 19:
        return '验收不通过'
      case 20:
        return '已评价' //甲方已评价
      case 21:
        return '已完成'//乙方已评价
      case 22:
        return  "已评价" //双方已评价
      default:
        return "沟通中"
    }
  }

}
