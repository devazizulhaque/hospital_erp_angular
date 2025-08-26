// src/app/shared/shared-module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Footer } from './components/footer/footer';
import { LoadingSpinner } from './components/loading-spinner/loading-spinner';
import { CapitalizePipe } from './pipes/capitalize-pipe';
import { HighlightDirective } from './directives/highlight';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    Header,
    Sidebar,
    Footer,
    LoadingSpinner,
    HighlightDirective,
    CapitalizePipe
  ],
  exports: [
    Header,
    Sidebar,
    Footer,
    LoadingSpinner,
    HighlightDirective,
    CapitalizePipe
  ]
})
export class SharedModule { }
