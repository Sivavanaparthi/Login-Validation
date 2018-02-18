import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LoginPageComponent } from './loginpage/loginpage.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
