import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { NbCardModule, NbListModule } from '@nebular/theme';



@NgModule({
  declarations: [
    NavbarComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule
  ],
  exports: [
    NavbarComponent,
    PostComponent
  ]
})
export class SharedComponentsModule { }
