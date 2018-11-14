import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  /**
   获取cookie
   * @param name cookie名称
   */
  getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  }
  /**
   * 设置cookie
   * @param name cookie的名称
   * @param value cookie的值
   * @param day cookie的过期时间
   */
  setCookie(name, value, day) {
    if(day !== 0){     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
      var expires = day * 24 * 60 * 60 * 1000;
      var date = new Date(+new Date()+expires);
      document.cookie = name + "=" + escape(value) + ";path=/;expires=" + date.toUTCString();
    }else{
      document.cookie = name + "=" + escape(value)+";path=/";
    }
  };
  /*
  * 重置滚动条高度并在1s左右的总时间进行
  * */
  resetScrollTop(){
    let rootEle=document.getElementById('container')
    let time=null;
    clearInterval(time)
    time=setInterval(()=>{
      if(rootEle.scrollTop<=0){
        clearInterval(time)
      }else
        rootEle.scrollTop=rootEle.scrollTop-rootEle.scrollTop/20
    },10)
  }
}
