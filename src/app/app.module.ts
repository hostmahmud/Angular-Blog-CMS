import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';

//search
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BlogPostsModule } from './blog-posts/blog-posts.module';
import { FrontPostsComponent } from './front/front-posts/front-posts.component';


import { FormsModule } from '@angular/forms';
import { AuthorsModule } from './authors/authors.module';

@NgModule({
  declarations: [
    AppComponent,
    FrontPostsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    HttpClientModule,
    BlogPostsModule,
    AuthorsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
