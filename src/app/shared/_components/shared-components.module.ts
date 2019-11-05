import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { NbCardModule, NbListModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NgbModalModule,
    FormsModule,
    NbInputModule,
    NbButtonModule
  ],
  exports: [
    NavbarComponent,
    PostComponent
  ]
})
export class SharedComponentsModule { }
