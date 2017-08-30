import { Image } from '../../models/image';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'nx-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  @Input()
  image: Image;

}
