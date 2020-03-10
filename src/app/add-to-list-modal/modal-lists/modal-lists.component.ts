import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { Book } from 'src/app/book/book.model';

@Component({
  selector: 'app-modal-lists',
  templateUrl: './modal-lists.component.html',
  styleUrls: ['./modal-lists.component.css', '../add-to-list-modal.component.css']
})
export class ModalListsComponent implements OnInit {

  bookService: BooksService;
  @Input() listInfo;
  @Input() bookToAdd: Book;

  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
  }

  ngOnInit() {
    console.log(this.listInfo);
  }

  addToList() {
    this.bookService.addBookToCorrespondingList(this.listInfo.listName, this.bookService.storedBookWhenOpenedModal);
  }

}
