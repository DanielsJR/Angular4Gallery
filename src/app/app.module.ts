import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { ImageDetailComponent } from './gallery/image-list/image-detail/image-detail.component';

import { ImageService } from './service/image.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

import { AdminImageListComponent } from './admin/admin-image-list/admin-image-list.component';
import { AdminImageCreateComponent } from './admin/admin-image-create/admin-image-create.component';
import { appRouting } from './app.routing';
import { AdminImageEditComponent } from './admin/admin-image-edit/admin-image-edit.component';
import { AdminImageDeleteComponent } from './admin/admin-image-delete/admin-image-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    DashboardComponent,
    AdminImageListComponent,
    AdminImageCreateComponent,
    AdminImageEditComponent,
    AdminImageDeleteComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
