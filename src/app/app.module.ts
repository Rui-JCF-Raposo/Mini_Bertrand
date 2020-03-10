import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BookComponent } from './book/book.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SliderComponent } from './slider/slider.component';
import { SpanishCategoryComponent } from './categories/spanish-category/spanish-category.component';
import { EnglishCategoryComponent } from './categories/english-category/english-category.component';
import { FrenchCategoryComponent } from './categories/french-category/french-category.component';
import { EbooksCategoryComponent } from './categories/ebooks-category/ebooks-category.component';
import { TextBooksCategoryComponent } from './categories/text-books-category/text-books-category.component';
import { FooterComponent } from './footer/footer.component';
import { NavCategoryComponent } from './nav-category/nav-category.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './wish-list/list/list.component';
import { WishListBookComponent } from './wish-list/wish-list-book/wish-list-book.component';
import { AddToListModalComponent } from './add-to-list-modal/add-to-list-modal.component';
import { ModalListsComponent } from './add-to-list-modal/modal-lists/modal-lists.component';
import { WarningsComponent } from './warnings/warnings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BookComponent,
    ShopcartComponent,
    WishListComponent,
    MainPageComponent,
    SliderComponent,
    SpanishCategoryComponent,
    EnglishCategoryComponent,
    FrenchCategoryComponent,
    EbooksCategoryComponent,
    TextBooksCategoryComponent,
    FooterComponent,
    NavCategoryComponent,
    ListComponent,
    WishListBookComponent,
    AddToListModalComponent,
    ModalListsComponent,
    WarningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
