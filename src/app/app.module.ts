import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { CardComponent } from './card/card.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './form/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SectionComponent,
    CardComponent,
    AvatarComponent,
    FormComponent,
    TableComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
