import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path: 'about', component:AboutComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'login', component:LoginComponent},
    {path: '', component:HomeComponent},
    {path: 'profile', component:ProfileComponent},
    {path: 'user/:id/:user', component:UserComponent},
    {path: '**', component:PageNotFoundComponent}
];
