import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { MarsComponent } from './components/mars/mars.component';
import { PlanetDirective } from './directives/planet.directive';
import { SelectComponent } from './components/select/select.component';
import { PhotoWrapperComponent } from './components/photo-wrapper/photo-wrapper.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    MarsComponent,
    PlanetDirective,
    SelectComponent,
    PhotoWrapperComponent,
    ModalWindowComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
