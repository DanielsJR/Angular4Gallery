import { AdminImageCreateComponent } from './admin-image-create/admin-image-create.component';
import { AdminImageListComponent } from './admin-image-list/admin-image-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Routes } from '@angular/router';
import { AdminImageEditComponent } from './admin-image-edit/admin-image-edit.component';
import { AdminImageDeleteComponent } from './admin-image-delete/admin-image-delete.component';

export const adminRouting: Routes = [
    // TODO { path: 'users/create', component: AdminUsersCreateComponent },
    // TODO { path: 'users/edit/:id', component: AdminUsersEditComponent },
    // TODO { path: 'users/delete/:id', component: AdminUsersDeleteComponent },
    // TODO { path: 'users', component: AdminUsersCreateComponent },

    { path: 'images/create', component: AdminImageCreateComponent },
    { path: 'images/edit/:id', component: AdminImageEditComponent },
    { path: 'images/delete/:id', component: AdminImageDeleteComponent },
    { path: 'images', component: AdminImageListComponent },

    { path: '', component: DashboardComponent },
];
