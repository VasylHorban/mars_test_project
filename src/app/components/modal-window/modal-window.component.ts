import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations/fade';
import { NotificationService } from '../../services/notification.service'
@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  animations : [
    fade
  ]
})
export class ModalWindowComponent implements OnInit {
  public text : string = '';
  public display : boolean = false;

  constructor( private notificationService : NotificationService) { }

  ngOnInit(): void {
    this.notificationService.text
      .subscribe(
        data => {
          this.display = true
          this.text = data
          setTimeout(
            () => this.display = false
            , 4000)

        }
      )
  }

}
