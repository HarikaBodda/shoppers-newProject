import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MensCarouselComponent } from './mens-carousel/mens-carousel.component';
import { MiniCarouselComponent } from './mini-carousel/mini-carousel.component';
import { DemoComponent } from './demo/demo.component';
import { EshoppersComponent } from './eshoppers/eshoppers.component';
import { ProductsComponent } from './products/products.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MensCarouselComponent,
    MiniCarouselComponent,
    DemoComponent,
    EshoppersComponent,
    ProductsComponent,
    NavSidebarComponent,
    ProductDetailComponent,
    UploadImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
