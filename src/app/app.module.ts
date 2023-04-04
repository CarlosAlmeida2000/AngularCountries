import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from "./components/search/search.component";
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoritosComponent,
    LoginComponent,
    NavbarComponent,
    LoadingComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
