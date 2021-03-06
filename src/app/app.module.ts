import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TitlePipe } from './title.pipe';
import { IdentityComponent } from './identity/identity.component';
import { IdentityService } from './identity.service';


@NgModule({
  declarations: [
    AppComponent,
    TitlePipe,
    IdentityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IdentityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
