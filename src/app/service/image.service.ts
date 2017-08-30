import { Image } from '../models/image';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  images: Image[] = [
    new Image(
      '1',
      'Primera Imagen',
      'Descripcion primera imagen',
      'https://videotutoriales.com/maspa/maspa1.jpg',
      'https://videotutoriales.com/maspa/maspa1-1.jpg'
    ),

    new Image(
      '2',
      'Segunda Imagen',
      'Descripcion Segunda imagen',
      'https://videotutoriales.com/maspa/maspa2.jpg',
      'https://videotutoriales.com/maspa/maspa2-1.jpg'
    ),

    new Image(
      '3',
      'Tercera Imagen',
      'Descripcion Tercera imagen',
      'https://videotutoriales.com/maspa/maspa3.jpg',
      'https://videotutoriales.com/maspa/maspa3-1.jpg'
    ),

    new Image(
      '4',
      'Cuarta Imagen',
      'Descripcion Cuarta imagen',
      'https://videotutoriales.com/maspa/maspa5.jpg',
      'https://videotutoriales.com/maspa/maspa5-1.jpg'
    ),

    new Image(
      '5',
      'Quinta Imagen',
      'Descripcion Quinta imagen',
      'https://videotutoriales.com/maspa/maspa4.jpg',
      'https://videotutoriales.com/maspa/maspa4-1.jpg'
    ),

    new Image(
      '6',
      'Sexta Imagen',
      'Descripcion Sexta imagen',
      'https://videotutoriales.com/maspa/maspa6.jpg',
      'https://videotutoriales.com/maspa/maspa6-1.jpg'
    ),

    new Image(
      '7',
      'Septima Imagen',
      'Descripcion Septima imagen',
      'https://videotutoriales.com/maspa/maspa7.jpg',
      'https://videotutoriales.com/maspa/maspa7-1.jpg'
    ),

    new Image(
      '8',
      'Octava Imagen',
      'Descripcion Octava imagen',
      'https://videotutoriales.com/maspa/maspa8.jpg',
      'https://videotutoriales.com/maspa/maspa8-1.jpg'
    ),

  ];

  constructor() { }

  getImages() {
    return this.images;
  }
}
