import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Book } from '../book/book.model.js';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent implements OnInit {

  bookService: BooksService;

  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
  }

  ngOnInit() {
    
  }
  
  // addBookToShopCart(e) {
  //   console.log("Adicionado ao carrinho de compras");
  //   const isbn = e.target.dataset.isbn;
  //   for(let book of this.booksDataBase) {
  //     if(book.isbn == isbn) {
  //       this.shopcartBooks.unshift(new Book( 
  //         book.title,
  //         book.isbn,
  //         book.authors,
  //         book.thumbnailUrl,
  //         book.pageCount,
  //         book.longDescription));
  //       }
  //   }
  //   console.log(this.shopcartBooks);
  // }

}
