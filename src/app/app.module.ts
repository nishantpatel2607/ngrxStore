import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffects } from './effects/currencyEffects';
import { CurrencyService } from './services/currency.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CurrencyEffects]),
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
