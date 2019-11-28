import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './modules/pages/pages.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbDatepickerModule, NbToastrService, NbToastrModule, NbAccordionModule, NbMenuModule, NbCardModule } from '@nebular/theme';
import { NbMomentDateModule } from '@nebular/moment';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedComponentsModule } from './shared/_components/shared-components.module';
import { CKEditorModule } from 'ngx-ckeditor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    NgbModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    SharedComponentsModule,
    NbDatepickerModule.forRoot(),
    HttpClientModule,
    NbToastrModule.forRoot(),
    NbMenuModule.forRoot(),
    CKEditorModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NbMomentDateModule,
    NbCardModule,
    JwtModule.forRoot({
      config: {}
    }),
  ],
  providers: [
    CookieService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
