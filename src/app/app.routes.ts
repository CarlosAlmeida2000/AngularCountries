import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from './components/login/login.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { CheckedSessionGuard } from './guards/checked-session.guard';


export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [CheckedSessionGuard]},
    {path: 'search', component: SearchComponent, canActivate: [CheckedSessionGuard]},
    {path: 'favorites', component: FavoritosComponent, canActivate: [CheckedSessionGuard]},
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
]