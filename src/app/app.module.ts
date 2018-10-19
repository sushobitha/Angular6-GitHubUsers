import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {SearchService} from './app.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule,HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SearchService]
})
export class AppModule { }
