import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Project1Component} from './project1/project1.component';
import { Project2Component} from './project2/project2.component';
import { Project3Component} from './project3/project3.component';
import { HomePageComponent} from './home-page/home-page.component';

export const router: Routes = [
    //{ path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: '', redirectTo: 'home-page', pathMatch: 'full' },
    { path: "project1", component: Project1Component },
    { path: "project2", component: Project2Component },
    { path: "project3", component: Project3Component },
    { path: "home-page", component: HomePageComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

