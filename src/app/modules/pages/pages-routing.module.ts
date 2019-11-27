import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DownloadComponent } from './download/download.component';
import { InformationComponent } from './information/information.component';
import { SupportComponent } from './support/support.component';
import { NewsComponent } from './news/news.component';
import { ForumComponent } from './forum/forum.component';
import { WikiComponent } from './wiki/wiki.component';
import { RegisterComponent } from './register/register.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'wiki',
    component: WikiComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'account-info',
    component: AccountInfoComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  },
  {
    path: 'personal-page',
    component: PersonalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
