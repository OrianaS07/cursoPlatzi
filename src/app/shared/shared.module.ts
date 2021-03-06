import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from './../material/material.module';
import { CartPipe } from './pipes/cart/cart.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CartPipe
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    CartComponent,
    CartPipe
  ]
})

export class SharedModule { }
