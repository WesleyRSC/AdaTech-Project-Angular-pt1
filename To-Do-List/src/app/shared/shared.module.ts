import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class SharedModule {}
