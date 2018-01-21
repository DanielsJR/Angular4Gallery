import { ImageService } from '../../service/image.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-admin-image-create',
  templateUrl: './admin-image-create.component.html',
  styleUrls: ['./admin-image-create.component.css']
})
export class AdminImageCreateComponent implements OnInit {

  constructor(private imageService: ImageService, private router: Router) { }

  ngOnInit() {
  }

  createImage(image) {
    this.imageService.addImage(image)
      .subscribe(_image => {
        console.log(_image);
        this.router.navigate(['/admin/images']);
      },
      error => console.log(<any>error)
      );
  }

}
