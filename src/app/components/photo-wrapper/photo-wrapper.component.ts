import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations/fade';
import { NotificationService } from 'src/app/services/notification.service';
import { PhotoesService } from 'src/app/services/photoes.service';

@Component({
  selector: 'app-photo-wrapper',
  templateUrl: './photo-wrapper.component.html',
  styleUrls: ['./photo-wrapper.component.scss'],
  animations : [
    fade
  ]
})
export class PhotoWrapperComponent implements OnInit {
  private defaultPagination : number = 6;
  public row : number = 2;
  public photos : string[] = [];
  public paginationPhotos : string[] = [];

  constructor( private photoService : PhotoesService,
      private notificationService : NotificationService
    ) {

  }

  ngOnInit(): void {
    this.photoService.photos
    .subscribe(
      data => {
        this.defaultPagination = 6
        this.photos = data.slice();
        this.paginationControll()
        }
    )
  }

  paginationControll() : void {
    let localPagination : number;
    if(this.photos.length < this.defaultPagination) localPagination = this.photos.length;
    else localPagination = this.defaultPagination;
    console.log(this.photos)
    this.paginationPhotos = this.photos.slice(0, localPagination)
    console.log(localPagination)
    console.log(this.paginationPhotos)
    console.log(this.photos)
  }

  load() : void {
    if(this.paginationPhotos.length === this.photos.length){
      this.notificationService.set('Photos are over, please choose another configuration.')
    }else {
      this.defaultPagination = this.paginationPhotos.length + 6;
      this.paginationControll()
    }


  }

  resize(event) : void {
    const element = event.target.innerWidth;
    if (element < 768) {
      this.row = 1;
    }else{
      this.row = 2;
    }
  }

}
