import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedComponentsModule } from 'src/app/shared/_components/shared-components.module';
import { HomepageComponent } from './homepage/homepage.component';
import { DownloadComponent } from './download/download.component';
import { InformationComponent } from './information/information.component';
import { SupportComponent } from './support/support.component';
import { NewsComponent } from './news/news.component';
import { WikiComponent } from './wiki/wiki.component';
import { RegisterComponent } from './register/register.component';
import { ForumComponent } from './forum/forum.component';
import { FormsModule } from '@angular/forms';
import { 
  NbInputModule,
  NbCardModule,
  NbDatepickerModule,
  NbSpinnerModule,
  NbToastrModule,
  NbSelectModule,
  NbCheckboxModule,
  NbToggleModule,
  NbButtonModule,
  NbAccordionModule,
  NbListModule,
} from '@nebular/theme';
import {
  NbMomentDateModule
} from '@nebular/moment'


@NgModule({
  declarations: [
    HomepageComponent,
    DownloadComponent,
    InformationComponent,
    SupportComponent,
    NewsComponent,
    WikiComponent,
    RegisterComponent,
    ForumComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedComponentsModule,
    FormsModule,
    NbInputModule,
    NbCardModule,
    NbDatepickerModule,
    NbSpinnerModule,
    NbToastrModule,
    NbSelectModule,
    NbDatepickerModule,
    NbCheckboxModule,
    NbToggleModule,
    NbButtonModule,
    NbAccordionModule,
    NbListModule,
    NbMomentDateModule
  ]
})
export class PagesModule { }
