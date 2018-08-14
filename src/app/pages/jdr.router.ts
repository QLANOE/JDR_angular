
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MonstreHomeComponent } from './monstre/home/monstre-home.component';

 
const homeRouter: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'monstre-home', component: MonstreHomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MonstreHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(homeRouter, { useHash: true }),
  ],
  exports: [
    RouterModule,
    HomeComponent,
    HeaderComponent,
    MonstreHomeComponent
  ],

})
export class JDRRoutingModule {}
