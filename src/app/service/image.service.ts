import { Http, Response } from '@angular/http';
import { Image } from '../models/image';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ImageService {
  urlImages = 'http://laravel-angular.test/api/v1/images';

  constructor(private http: Http) { }

  getImages(): Observable<Image[]> {
    return this.http.get(this.urlImages)
      .map((resp: Response) => resp.json())
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Image[]>([]);
      });
  }

  addImage(image: Object): Observable<Image[]> {
    return this.http.post(this.urlImages, image)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(
        error.json().error || { message: 'Error del Servidor' })
      );
  }

  getImage(id: String): Observable<Image[]> {
    return this.http.get(this.urlImages + '/' + id)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(
        error.json().error || { message: 'Error del Servidor' })
      );
  }

  updateImage(image: Object): Observable<Image[]> {
    const apiUrl = this.urlImages;
    const url = `${apiUrl}/${image['id']}`;
    return this.http.put(url, image)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(
        error.json().error || { message: 'Error del Servidor' })
      );
  }

  deleteImage(id: String): Observable<Image[]> {
    return this.http.delete(this.urlImages + '/' + id)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(
        error.json().error || { message: 'Error del Servidor' })
      );
  }



}
