import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public text : Subject<string> = new Subject();

  constructor() { }
  set(str : string) : void {
    this.text.next(str)
  }
}
