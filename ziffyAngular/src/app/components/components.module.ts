import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './dashboard/shared/header/header.component';
import { HomeComponent } from './dashboard/home/home.component';

import { AngularMaterialModule} from '../angularMaterial/angularMaterial.module'; 
// import { AppRoutingModule } from '../app-routing.module'




@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    AngularMaterialModule,
    //AppRoutingModule
  ]
})

export class ComponentsModule { }
