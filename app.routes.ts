import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ResturentItemsComponent } from './components/resturent-items/resturent-items.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';

export const routes: Routes = [
    {
        path: 'Login' , 
        component: LoginComponent
    },
    {
        path: 'foodCategory',
        component: CategoriesComponent
    },
    {
        path: 'resturent-items',
        component: ResturentItemsComponent
    },
    {
        path: 'create-orders',
        component: CreateOrderComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
