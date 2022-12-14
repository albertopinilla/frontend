import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateProductsComponent } from './create-products/create-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
	declarations: [ProductsPageComponent,EditProductsComponent,CreateProductsComponent],
	imports: [
		CommonModule,
		BrowserModule,
		NgxPaginationModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule,
	],
	exports: []
})

export class ProductsModule {}
