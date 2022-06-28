import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmdialogComponent } from './components/confirmdialog/confirmdialog.component';
@NgModule({
  declarations: [AppComponent,ConfirmdialogComponent],
  imports: [BrowserModule,AppRoutingModule,SohoComponentsModule,HttpClientModule,FormsModule,BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
