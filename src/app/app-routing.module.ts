import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path:'shop', component:ShopComponent},
  {path:'admin', component:AdminComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'auth', component:AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
