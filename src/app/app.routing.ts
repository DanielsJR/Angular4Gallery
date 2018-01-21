
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminRouting } from './admin/admin.routing';

const misRutas: Routes = [
    { path: 'admin', component: AdminComponent, children: adminRouting },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/gallery', pathMatch: 'full' },
   // { path: '**', component: NotFoundComponent },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(misRutas);
