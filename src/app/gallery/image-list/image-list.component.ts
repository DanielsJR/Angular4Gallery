import { Observable } from 'rxjs/Observable';
import { ImageService } from '../../service/image.service';
import { Image } from '../../models/image';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-image-list',

  template: `
  <nx-image-detail *ngIf="selectedImage" [selectedImageDetail]="selectedImage" >
  </nx-image-detail>
  <div class="container">
      <div class="row">
          <div *ngFor="let image of images | async" (click)="onSelect(image)">
            <a>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <img class="img-responsive" src="{{image.thumbnail}}" />
              </div>
            </a>
          </div>
      </div>
  </div>
  `,

  styleUrls: ['/image-list.component.css']
})

export class ImageListComponent implements OnInit {

  images: Observable<Image[]>;
  selectedImage: Image;

  constructor(private servicio: ImageService) { }

  ngOnInit() {
    this.images = this.servicio.getImages();
  }

  onSelect(image: Image) {
    this.selectedImage = image;
  }

}
