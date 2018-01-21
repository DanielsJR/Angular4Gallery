import { ImageService } from '../../service/image.service';
import { Image } from '../../models/image';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-admin-image-list',
  templateUrl: './admin-image-list.component.html',
  styleUrls: ['./admin-image-list.component.css']
})
export class AdminImageListComponent implements OnInit {
  images: Observable<Image[]>;
  constructor(private servicio: ImageService) { }

  ngOnInit() {
    this.images = this.servicio.getImages();
  }

}
