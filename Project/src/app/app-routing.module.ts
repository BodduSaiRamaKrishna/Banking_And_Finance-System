import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubmitComponent } from './submit/submit.component';
import { GoldloanComponent } from './goldloan/goldloan.component';
import { LandloanComponent } from './landloan/landloan.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { LicloanComponent } from './licloan/licloan.component';
import { VechicleloanComponent } from './vechicleloan/vechicleloan.component';
import { TranscationComponent } from './transcation/transcation.component';
import { BankbalanceComponent } from './bankbalance/bankbalance.component';
import { HelpComponent } from './help/help.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AgricultureloanComponent } from './agricultureloan/agricultureloan.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'submit',component:SubmitComponent},
  {path:'goldloan',component:GoldloanComponent},
  {path:'landloan',component:LandloanComponent},
  {path:'agricultureloan',component:AgricultureloanComponent},
  {path:'homeloan',component:HomeloanComponent},
  {path:'licloan',component:LicloanComponent},
  {path:'vechicleloan',component:VechicleloanComponent},
  {path:'transcation',component:TranscationComponent},
  {path:'bankbalance',component:BankbalanceComponent},
  {path:'help',component:HelpComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'checkout',component:CheckoutComponent},
  {path: '',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
