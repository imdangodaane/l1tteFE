import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedComponentsModule } from 'src/app/shared/_components/shared-components.module';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedComponentsModule
  ]
})
export class PagesModule { }
