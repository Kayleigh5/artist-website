import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EpkComponent } from './components/epk/epk.component';
import { MainComponent } from './components/main/main.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HarpComponent } from './components/harp/harp.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'epk', component: EpkComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'harp', component: HarpComponent},
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {})
  ]
})
export class AppRoutingModule { }
