import { ImageService } from '../../service/image.service';
import { Image } from '../../models/image';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];
  selectedImage: Image;

  constructor(private servicio: ImageService) {

  }

  ngOnInit() {
    this.images = this.servicio.getImages();
  }

  onSelect(image: Image) {
    this.selectedImage = image;
  }

}
