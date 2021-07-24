import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ThirdPartyModule } from './shared/third-party/third-party.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './shared/components/alerts/alert/alert.component';
import { alerts } from './shared/components/alerts/alerts';
import { ListComponent } from './pages/list/list.component';
import { SearchPipe } from './shared/pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListComponent,
    alerts,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThirdPartyModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
