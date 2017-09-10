import { Http, Response } from '@angular/http';
import { Image } from '../models/image';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageService {


  constructor(private http: Http) { }

  getImages(): Observable<Image[]> {
    const urlImages = 'http://laravel-angular.app/api/v1/images';
    return this.http
      .get(urlImages)
      .map((resp: Response) => resp.json());
  }
}
