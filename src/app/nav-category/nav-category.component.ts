import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.css', '../main-page/main-page.component.css']
})
export class NavCategoryComponent implements OnInit {

  bookService: BooksService;
  responsiveMenu: boolean = false;

  constructor(booksService: BooksService) { 
    this.bookService = booksService;
  }

  ngOnInit() {
  }

  changeView(view) {
    this.bookService.categoriesView(view)
  }

  toggleMenu() {
    this.responsiveMenu = !this.responsiveMenu;
  }

}
