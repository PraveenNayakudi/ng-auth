import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  {path:'shop', component:ShopComponent},
  {path:'admin', component:AdminComponent, canActivate:[AuthGuardService]},
  {path:'add-product', component:AddProductComponent, canActivate:[AuthGuardService]},
  {path:'auth', component:AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
