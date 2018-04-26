import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routes } from './app.router';
import { AngularComponent } from './angular/angular.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, AngularComponent, Project1Component, Project2Component, Project3Component, HomePageComponent],
  imports: [BrowserModule, routes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
