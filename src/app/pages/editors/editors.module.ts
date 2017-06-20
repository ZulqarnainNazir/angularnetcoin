import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';
import { UserService } from './components/ckeditor/user.service';
import { routing }       from './editors.routing';
import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { ShowComponent } from './components/show/show.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    Editors,
    Ckeditor,
    ShowComponent
  ],
  providers: [
    UserService
  ]
})
export class EditorsModule {
}
