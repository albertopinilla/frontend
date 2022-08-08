import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';

import { ProductsComponent } from './components/products/products.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BuyModule } from './pages/buy/buy.module';
import { ShoppingModule } from './pages/shopping/products.module';
import { UsersgModule } from './pages/users/users.module';
import { ModalComponent } from './pages/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    ProductsComponent,
    ModalComponent,
    
  
    ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    BuyModule,
    AppRoutingModule,
    ShoppingModule,
    UsersgModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }