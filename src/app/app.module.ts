import { routes } from './routes';
import { ImageService } from './service/image.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './gallery/image-list/image.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    routes,
    BrowserModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
