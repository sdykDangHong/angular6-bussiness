//angular 系统模块
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule } from "@angular/forms"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
//  http模块导入 以及自定义Http拦截导入
import { HttpClientModule } from "@angular/common/http"
import {HttpProvider} from "./service/common/http-interceptor.service";
// 路由配置导入
import { AppRoutingModule } from './app-routing.module';
//  ng-zorro-antd引用以及设置中文语言
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgxEchartsModule } from "ngx-echarts"
//  公共服务声明以及全局提供使用
import {CommonStoreService} from "./service/commonStore/common-store.service";
/*  页面组件引用声明  */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LoginComponent } from './components/tourist/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomeBodyComponent } from './components/home/home-body/home-body.component';
import { LoginBodyComponent } from './components/tourist/login/login-body/login-body.component';
import { HeaderItemNoLoginComponent } from './components/common/header/headerComponent/header-item-no-login/header-item-no-login.component';
import { HeaderItemDemanderComponent } from './components/common/header/headerComponent/header-item-demander/header-item-demander.component';
import { HeaderItemFreelancerComponent } from './components/common/header/headerComponent/header-item-freelancer/header-item-freelancer.component';
import { AboutComponent } from './components/tourist/about/about.component';
import { AboutBodyComponent } from './components/tourist/about/about-body/about-body.component';
import { TeamComponent } from './components/tourist/team/team.component';
import { TeamBodyComponent } from './components/tourist/team/team-body/team-body.component';
import { FreemanHotComponent } from './components/tourist/freeman-hot/freeman-hot.component';
import { FreemanHotBodyComponent } from './components/tourist/freeman-hot/freeman-hot-body/freeman-hot-body.component';
import { RecruitmentComponent } from './components/tourist/recruitment/recruitment.component';
import { RecruitmentBodyComponent } from './components/tourist/recruitment/recruitment-body/recruitment-body.component';
import { FooterBodyCommonComponent } from './components/tourist/footer-body-common/footer-body-common.component';
import { ProjectsComponent } from './components/tourist/projects/projects.component';
import { ProjectBodyComponent } from './components/tourist/projects/project-body/project-body.component';
import { TouristProjectItemComponent } from './components/tourist/projects/tourist-project-item/tourist-project-item.component';
import { FreelancersComponent } from './components/tourist/freelancers/freelancers.component';
import { FreelancersBodyComponent } from './components/tourist/freelancers/freelancers-body/freelancers-body.component';
import { TouristFreelancersItemComponent } from './components/tourist/freelancers/tourist-freelancers-item/tourist-freelancers-item.component';
import { UserHeaderPicPipe } from './pipe/userHeaderPic/user-header-pic.pipe';
import { FreelancerSkillFilterPipe } from './pipe/freelancerSkillFilter/freelancer-skill-filter.pipe';
import { DemandsAddComponent } from './components/tourist/demands-add/demands-add.component';
import { DemandsAddBodyComponent } from './components/tourist/demands-add/demands-add-body/demands-add-body.component';
import { DemandsAddRegisterComponent } from './components/tourist/demands-add/demands-add-register/demands-add-register.component';
import { DemandsAddFormComponent } from './components/tourist/demands-add/demands-add-form/demands-add-form.component';
import { DemanderProjectsComponent } from './components/demander/demander-projects/demander-projects.component';
import { DemanderEchartsComponent } from './components/demander/demander-projects/demander-echarts/demander-echarts.component';
import { DemanderProjectListComponent } from './components/demander/demander-projects/demander-project-list/demander-project-list.component';
import { DemanderProjectItemComponent } from './components/demander/demander-projects/demander-project-item/demander-project-item.component';
import { DemandStatusPipe } from './pipe/demandStatus/demand-status.pipe';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    HomeBodyComponent,
    LoginBodyComponent,
    HeaderItemNoLoginComponent,
    HeaderItemDemanderComponent,
    HeaderItemFreelancerComponent,
    AboutComponent,
    AboutBodyComponent,
    FooterBodyCommonComponent,
    TeamComponent,
    TeamBodyComponent,
    FreemanHotComponent,
    FreemanHotBodyComponent,
    RecruitmentComponent,
    RecruitmentBodyComponent,
    ProjectsComponent,
    ProjectBodyComponent,
    TouristProjectItemComponent,
    FreelancersComponent,
    FreelancersBodyComponent,
    TouristFreelancersItemComponent,
    UserHeaderPicPipe,
    FreelancerSkillFilterPipe,
    DemandsAddComponent,
    DemandsAddBodyComponent,
    DemandsAddRegisterComponent,
    DemandsAddFormComponent,
    DemanderProjectsComponent,
    DemanderEchartsComponent,
    DemanderProjectListComponent,
    DemanderProjectItemComponent,
    DemandStatusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  providers: [CommonStoreService,HttpProvider, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
