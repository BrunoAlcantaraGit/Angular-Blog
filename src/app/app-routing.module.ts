import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/menu/product/product.component';
import { SolutionsComponent } from './components/menu/solutions/solutions.component';
import { ConsultingComponent } from './components/menu/consulting/consulting.component';
import { LearnComponent } from './components/menu/learn/learn.component';
import { SupportComponent } from './components/menu/support/support.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path:'product', component: ProductComponent},
{path:'solution', component: SolutionsComponent},
{path:'consulting', component: ConsultingComponent},
{path:'learn', component: LearnComponent},
{path:'support', component: SupportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
