import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { UpdelComponent } from './updel/updel.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'list',component:ListComponent},
  {path:'add',component:AddComponent},
  {path:'update/:title',component:UpdelComponent}
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
