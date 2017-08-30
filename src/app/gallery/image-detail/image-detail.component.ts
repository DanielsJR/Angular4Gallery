import { Image } from '../../models/image';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nx-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  @Input()
  selectedImage: Image;

  constructor() { }

  ngOnInit() {
  }

}
