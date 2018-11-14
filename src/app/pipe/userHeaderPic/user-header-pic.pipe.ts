import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userHeaderPic'
})
export class UserHeaderPicPipe implements PipeTransform {
  private PicOrigin:string="http://file.315pr.com"
  transform(value: any=`${this.PicOrigin}/upload/defaultHeader.png`): any {
    if(value.includes(this.PicOrigin)){
      return value
    }else{
      return `${this.PicOrigin}${value}`;
    }
  }

}
