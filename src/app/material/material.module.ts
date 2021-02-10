import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatGridListModule
  ],
  exports : [
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
