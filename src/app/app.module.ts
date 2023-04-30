import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CoreToolsComponent } from './core-tools/core-tools.component';
import { ConstructionOpsComponent } from './construction-ops/construction-ops.component';
import { ProjectAccountingComponent } from './project-accounting/project-accounting.component';
import { TrainingAndSupportComponent } from './training-and-support/training-and-support.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    CoreToolsComponent,
    ConstructionOpsComponent,
    ProjectAccountingComponent,
    TrainingAndSupportComponent,
    NavbarComponent,
    FooterComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,RouterModule.forRoot(routes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class AppModule { }
