import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';
import { UserService } from './components/treeView/user.service';

import { routing }       from './components.routing';
import { Components } from './components.component';
import { TreeView } from './components/treeView/treeView.component';
import { ShowComponent } from './components/show/show.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TreeModule,
    routing
  ],
  declarations: [
    Components,
    TreeView,
    ShowComponent,
  ],
  providers: [
    UserService
  ]
})
export class ComponentsModule {}
