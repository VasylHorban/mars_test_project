import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from './notification.service';
import { UserConfig } from '../shared/user-config';

@Injectable({
  providedIn: 'root'
})
export class PhotoesService {

  public photos : Subject<string[]> = new Subject();

  constructor( private http : HttpClient ,
    private notificationService : NotificationService
    ) { }


  getPhotoHttp (config : UserConfig) : void {
    let url : string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${config.rover}/photos?sol=${config.day}&camera=${config.camera}&api_key=DEMO_KEY`;
    let results : string[] = [];

    this.http.get(url)
      .pipe(
        catchError( err => {
          return throwError(err)
        })
      )
      .subscribe(
        data => {
          if(data['photos'].length === 0){
            console.log("there are no photos for this configuration! ")
            this.notificationService.set('Unfortunately, there are no photos for this configuration. Please try another.')
          }
          data['photos'].forEach(m => {
            if(Array.isArray(m)){
              m.forEach(k => {
                if(!Array.isArray(k)){
                  results.push(k.img_src)
                }
              })
            }else {
              results.push(m.img_src)
            }
          });
          this.photos.next(results.slice());

        },
        err => {
          this.notificationService.set(err.statusText + ". Please try latter.")
          console.log(err.statusText)
        }
      )
  }
}
