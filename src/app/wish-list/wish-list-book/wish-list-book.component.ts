import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Book } from 'src/app/book/book.model';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-wish-list-book',
  templateUrl: './wish-list-book.component.html',
  styleUrls: ['./wish-list-book.component.css', '../../book/book.component.css', '../list/list.component.css']
})
export class WishListBookComponent implements OnInit {
  
  @HostBinding('attr.class') cssClass = 'book-box' 
  @Input() wishListBookInfo: Book;
  @Input() listOfTheBook: string;

  constructor(private bookService: BooksService) {

  }

  ngOnInit() {
  }

  removeBook() {
    this.bookService.removeBookFromList(this.listOfTheBook, this.wishListBookInfo);
  }

  addBookToShopcart() {
    this.bookService.addBookToShopCart('', '', this.wishListBookInfo);
  }

}
