import { Routes, RouterModule }  from '@angular/router';

import { Components } from './components.component';
import { TreeView } from './components/treeView/treeView.component';
import { ShowComponent } from './components/show/show.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Components,
    children: [
      { path: 'treeview', component: TreeView },
      { path: 'show/:id', component: ShowComponent }
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
