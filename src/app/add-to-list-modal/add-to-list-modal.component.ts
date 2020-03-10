import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book/book.model';

@Component({
  selector: 'app-add-to-list-modal',
  templateUrl: './add-to-list-modal.component.html',
  styleUrls: ['./add-to-list-modal.component.css']
})
export class AddToListModalComponent implements OnInit {

  bookService: BooksService;
  

  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
  }

  ngOnInit() {
    if(sessionStorage.getItem('userWishList')) {
      this.bookService.user[0].wishLists = JSON.parse(sessionStorage.getItem('userWishList'))
    }
  }

  hideAddToListModal() {
    this.bookService.addToListModalOpen = false;
  }

  createNewList(book) {
    const newListName = prompt('Introduza o nome da sua nova lista');
    if(newListName === "") {
      return;
    }
    if(!this.bookService.findRepetitions('wishList', '', newListName)) {
      const listObject = {
        listName: newListName,
        listBooks: []
      }
      this.bookService.user[0].wishLists.lists.push(listObject);
      console.log(this.bookService.user[0].wishLists);
      sessionStorage.setItem("userWishList", JSON.stringify(this.bookService.user[0].wishLists))
    } else {
      alert('Esta lista já existe');
    }
    console.log("New List Created from modal")
  }
}
