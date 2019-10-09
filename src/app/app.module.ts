import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {createCustomElement} from '@angular/elements';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[CounterComponent]
})
export class AppModule {

  constructor(private injector : Injector){
    const el = createCustomElement(CounterComponent,{injector});
    customElements.define('app-counter',el);
  }

  ngDoBootstrap(){ }
 }
