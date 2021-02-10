import { animate, state, style, transition, trigger } from '@angular/animations';

export const fall = trigger('fall', [
  state('void', style({opacity : 0, marginTop : '-30px'})),
  transition (':enter, :leave', [
    animate(500)
  ])
])
