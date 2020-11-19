import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './produit-list/produit-list.component';
import { CreateProductComponent } from './create-produit/create-produit.component';
import { FormsModule} from '@angular/forms';
import { UpdateProductComponent } from './update-produit/update-produit.component';
import { ProductDetailsComponent } from './produit-details/produit-details.component';
import { ProductSearchComponent } from './product-search/product-search.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
