import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule   
  ],
  exports:[
    MenuComponent,
    HomeComponent,
    LoginComponent
  ]
})
export class PrincipalModule { }
