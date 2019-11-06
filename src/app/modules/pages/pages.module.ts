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
} from '@nebular/moment';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ArticleComponent } from './article/article.component'
import { CKEditorModule } from 'ngx-ckeditor';


@NgModule({
  declarations: [
    HomepageComponent,
    DownloadComponent,
    InformationComponent,
    SupportComponent,
    NewsComponent,
    WikiComponent,
    RegisterComponent,
    ForumComponent,
    PersonalPageComponent,
    AccountInfoComponent,
    NewPostComponent,
    ArticleComponent
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
    NbMomentDateModule,
    CKEditorModule
  ]
})
export class PagesModule { }
