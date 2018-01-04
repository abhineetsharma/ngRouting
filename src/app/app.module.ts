import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { ProductsComponent } from './products/products.component';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent
    // canActivate: { LoggedInGuard }
  },
  {
    path: 'products',
    component: ProductsComponent,
    // children: childRoutes
  },
  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    // ProductModule
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    // { provide: APP_BASE_HREF, useValue: '/' }
    // AUTH_PROVIDERS,
    // LoggedInGuard
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
