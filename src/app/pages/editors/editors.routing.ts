import { Routes, RouterModule }  from '@angular/router';

import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { ShowComponent } from './components/show/show.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Editors,
    children: [
      { path: 'ckeditor', component: Ckeditor },
      { path: 'show/:id', component: ShowComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
