import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FeaturesComponent } from './pages/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
