import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Image } from '../../models/image';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'nx-admin-image-delete',
  templateUrl: './admin-image-delete.component.html',
  styleUrls: ['./admin-image-delete.component.css']
})
export class AdminImageDeleteComponent implements OnInit, OnDestroy {

  id: any;
  params: any;
  image = new Image('id', 'title', 'description', 'thumbnail', 'imageLink');

  constructor(private activatedRoute: ActivatedRoute, private imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.params = this.activatedRoute.params
      .subscribe(params => this.id = params['id']);

    this.imageService.getImage(this.id).subscribe(
      data => {
        console.log(data);
         this.image.id = data['id'];
      },
      error => console.log(<any>error));
  }

  ngOnDestroy() {
    this.params.unsubscribe();
  }

  deleteImage(image) {
    this.imageService.deleteImage(image.id)
      .subscribe(
      _image => {
        console.log(_image);
        this.router.navigate(['/admin/images']);
      },
      error => console.log(<any>error));
  }
}
