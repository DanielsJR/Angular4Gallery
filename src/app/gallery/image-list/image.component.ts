import { Image } from '../../models/image';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'nx-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: Image;
  constructor() { }

  ngOnInit() {
  }

}
