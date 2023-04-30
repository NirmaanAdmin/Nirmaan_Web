import { ProjectAccountingComponent } from './project-accounting/project-accounting.component';
import { CoreToolsComponent } from './core-tools/core-tools.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ConstructionOpsComponent } from './construction-ops/construction-ops.component';
import { TrainingAndSupportComponent } from './training-and-support/training-and-support.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'coreTools', component: CoreToolsComponent },
  { path: 'constructionOps', component: ConstructionOpsComponent },
  { path: 'projectAccounting', component: ProjectAccountingComponent },
  { path: 'trainingAndSupport', component: TrainingAndSupportComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
