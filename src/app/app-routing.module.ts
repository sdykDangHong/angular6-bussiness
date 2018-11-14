import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/tourist/login/login.component";
import {AboutComponent} from "./components/tourist/about/about.component";
import {TeamComponent} from "./components/tourist/team/team.component";
import {FreemanHotComponent} from "./components/tourist/freeman-hot/freeman-hot.component";
import {RecruitmentComponent} from "./components/tourist/recruitment/recruitment.component";
import {ProjectsComponent} from "./components/tourist/projects/projects.component";
import {FreelancersComponent} from "./components/tourist/freelancers/freelancers.component";
import {DemandsAddComponent} from "./components/tourist/demands-add/demands-add.component";

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"",children:[
      {path:"login",component:LoginComponent},
      {path:"about",component:AboutComponent},
      {path:"development",component:AboutComponent},
      {path:"contact",component:AboutComponent},
      {path:"team",component:TeamComponent},
      {path:"freeman_hot",component:FreemanHotComponent},
      {path:"recruitment",component:RecruitmentComponent},
      {path:"projects",component:ProjectsComponent},
      {path:"freelancers",component:FreelancersComponent},
      {path:"demands-add",component:DemandsAddComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
