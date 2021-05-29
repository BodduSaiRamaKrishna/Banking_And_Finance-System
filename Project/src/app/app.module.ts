import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubmitComponent } from './submit/submit.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { TranscationComponent } from './transcation/transcation.component';
import { BankbalanceComponent } from './bankbalance/bankbalance.component';
import { GoldloanComponent } from './goldloan/goldloan.component';
import { LandloanComponent } from './landloan/landloan.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { VechicleloanComponent } from './vechicleloan/vechicleloan.component';
import { LicloanComponent } from './licloan/licloan.component';
import { HelpComponent } from './help/help.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AgricultureloanComponent } from './agricultureloan/agricultureloan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    SubmitComponent,
    TranscationComponent,
    BankbalanceComponent,
    GoldloanComponent,
    LandloanComponent,
    HomeloanComponent,
    VechicleloanComponent,
    LicloanComponent,
    HelpComponent,
    AboutusComponent,
    CheckoutComponent,
    AgricultureloanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
