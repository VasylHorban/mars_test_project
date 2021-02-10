import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { PhotoesService } from 'src/app/services/photoes.service';
import { UserConfig } from 'src/app/shared/user-config';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public cameras : {curiosity : string[], opportunity : string[], spirit : string[]} = {
    curiosity : ['AVCAM', 'MAZDI','MAHLI', 'CHEMCAM', 'MAST', 'RHAZ' , 'FHAZ'],
    opportunity : ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
    spirit : ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']
  }

  public userInput : UserConfig = {
    rover : '',
    camera : '',
    day : null
  }

  @Output() getEvent = new EventEmitter();
  constructor( private photoService : PhotoesService,
      private notificationService : NotificationService
    ) {  }

  ngOnInit(): void {
  }

  get():void {
    this.photoService.getPhotoHttp(this.userInput);
  }

}
