import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPlanet]'
})
export class PlanetDirective {
  private change : number = 0;

  @HostBinding('style.background-position-x') xPosition : string;
  constructor() {
    this.spin();
   }
  spin() : void {
    this.xPosition = this.change + 'px';
    if(this.change <= -600) this.change = 0;
    this.change = this.change - 0.2;
    setTimeout(() => this.spin(), 50)

  }


}
