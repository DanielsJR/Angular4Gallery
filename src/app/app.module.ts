import { HttpModule } from '@angular/http';
import { ImageDetailComponent } from './gallery/image-list/image-detail/image-detail.component';
import { routes } from './routes';
import { ImageService } from './service/image.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    routes,
    BrowserModule,
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
