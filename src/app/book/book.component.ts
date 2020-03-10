import { Component, OnInit, Input } from '@angular/core';
import { Book } from './book.model';
import { AppComponent } from '../app.component';
import { ShopcartComponent } from '../shopcart/shopcart.component';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  bookService: BooksService;
  
  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
  }

  ngOnInit() {
  }

  addBookToShopCart(e) {
    const isbn = e.target.dataset.isbn;
    const category = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.className;
    this.bookService.addBookToShopCart(isbn, category)
    console.log(category);
  }

  showAddToListModal() {
    this.bookService.addToListModalOpen = true;
    this.bookService.storeBookWhenOpenModal(this.book)
  }
}
