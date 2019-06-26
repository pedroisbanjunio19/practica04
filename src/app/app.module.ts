import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';
import { DirectivaNgIfComponent } from './directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgSwitchComponent } from './directiva-ng-switch/directiva-ng-switch.component';
import { DirectivaNgClassComponent } from './directiva-ng-class/directiva-ng-class.component';
import { DirectivaNgStyleComponent } from './directiva-ng-style/directiva-ng-style.component';
import { GlosarioDirective } from './glosario.directive';
import { TextoComponent } from './texto/texto.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgForComponent,
    DirectivaNgIfComponent,
    DirectivaNgSwitchComponent,
    DirectivaNgClassComponent,
    DirectivaNgStyleComponent,
    GlosarioDirective,
    TextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
