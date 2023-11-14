import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UssersComponent } from './componentss/ussers/ussers.component';
import { UsserInfoComponent } from './componentss/ussers/usser-info/usser-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UssersComponent,
    UsserInfoComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
