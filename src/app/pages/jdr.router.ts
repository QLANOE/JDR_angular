
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MonstreHomeComponent } from './monstre/home/monstre-home.component';
import { JDRCommonModule } from '../common/common.module';
import { JetHomeComponent } from '../pages/jet/jet.component';
import { JetModule } from './jet/jet.module';

 
const homeRouter: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'monstre-home', component: MonstreHomeComponent },
  { path: 'jet', component: JetHomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    JetHomeComponent,
    MonstreHomeComponent
  ],
  imports: [
    JetModule,
    CommonModule,
    RouterModule.forRoot(homeRouter, { useHash: true }),
    JDRCommonModule
  ],
  exports: [
    RouterModule,
    HomeComponent,
    HeaderComponent,
    MonstreHomeComponent,
    JetHomeComponent,
    JDRCommonModule,
    JetModule
  ],

})
export class JDRRoutingModule {}
