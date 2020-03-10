import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SpanishCategoryComponent } from './categories/spanish-category/spanish-category.component';
import { EnglishCategoryComponent } from './categories/english-category/english-category.component';
import { FrenchCategoryComponent } from './categories/french-category/french-category.component';
import { EbooksCategoryComponent } from './categories/ebooks-category/ebooks-category.component';
import { TextBooksCategoryComponent } from './categories/text-books-category/text-books-category.component';
import { WishListComponent } from './wish-list/wish-list.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path:'spanishPage', component: SpanishCategoryComponent},
  {path:'englishPage', component: EnglishCategoryComponent},
  {path:'frenchPage', component: FrenchCategoryComponent},
  {path:'ebooksPage', component: EbooksCategoryComponent},
  {path:'textBooksPage', component: TextBooksCategoryComponent},
  {path:'wishListPage', component: WishListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
