import { Image } from '../../../models/image';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-image-detail',

  template: `
   <div class="container image-detail">
    <div class="row">
      <div class="col-sm-8 col-xs-12">
        <img [src]="selectedImageDetail.imageLink" class="img-responsive">
      </div>
      <div class="col-sm-4 col-xs-12">
        <h1>{{selectedImageDetail.title}}</h1>
        <p>{{selectedImageDetail.description}}</p>
      </div>
    </div>
  </div>
  `,

  styles: [`
  .image-detail {
    margin: 20px auto;
  }

`]
})

export class ImageDetailComponent {

  @Input() selectedImageDetail: Image;

  constructor() { }


}
