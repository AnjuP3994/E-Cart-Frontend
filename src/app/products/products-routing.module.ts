import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { 
    path: '', component: AllProductsComponent 
  },
  {
    path:'viewproduct/:productId', component:ViewProductComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'wishlist', component:WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
