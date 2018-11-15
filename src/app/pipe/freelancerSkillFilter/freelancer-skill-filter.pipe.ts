import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'freelancerSkillFilter'
})
export class FreelancerSkillFilterPipe implements PipeTransform {

  transform(value:any,args?: any): any {
    if (typeof value=='string') {if(value.includes(',')){value=value.split(',')}else{value=[value]}}
    if(value.length<=0){return ['暂无']}
    let arr=[];
    value.map((item)=>{
      arr.push(item.split("-")[0])
    })
    return Array.from(new Set(arr).keys()).slice(0,3)
  }

}
