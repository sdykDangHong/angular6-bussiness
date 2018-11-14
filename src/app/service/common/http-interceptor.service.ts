import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {UtilService} from "./util.service";
import {catchError, mergeMap} from "rxjs/operators";
import {LoadingService} from "./loading.service";
import {Router} from "@angular/router";
import {throwError} from "rxjs/internal/observable/throwError";
import {NzMessageService , NzMessageConfig} from "ng-zorro-antd";
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  constructor(
    private util:UtilService,
    private loading:LoadingService,
    private message:NzMessageService,
    private router:Router
  ) { }
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<any>{
    this.loading.showLoading()
    let token=this.util.getCookie('token')
    let headersUpdate={}
    if(token){
      headersUpdate={
        token:token
      }
      this.util.setCookie('token',token,180)
    }
    let request=req.clone({
      setHeaders:headersUpdate
    })
    return next.handle(request).pipe(
      mergeMap((event:any)=> {
        this.loading.hideLoading()
        return Observable.create(observer => observer.next(event)); //请求成功返回响应
      }),
      catchError((error:any)=>{
          this.loading.hideLoading()
          switch (error.status){
            case 401:
              this.message.warning("您的登录已超时，请重新登录！")
              this.router.navigate(['/login'])
              break;
            default:
              this.message.error("网络错误请重试！")
              this.router.navigate(['/'])
              break;
          }
        return throwError(error);
      })
    )
  }
}
export const HttpProvider={
  provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true
}
