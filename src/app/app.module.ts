import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    CommonModule,
    BrowserModule,
    NgtUniversalModule,
    HttpModule,
    TransferHttpCacheModule,
    HttpClientModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
