import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  bookService: BooksService;

  constructor(private booksService: BooksService) {
    this.bookService = booksService;
  }

  ngOnInit() {
    if (sessionStorage.getItem('userWishList')) {
      this.bookService.user[0].wishLists = JSON.parse(sessionStorage.getItem('userWishList'));
    }
    console.log(this.bookService.user[0].wishLists.lists);
  }

  createNewList() {
    const newListName = prompt('Introduza o nome da sua nova lista');

    if (!this.bookService.findRepetitions('wishList', '', newListName)) {
      const listObject = {
        listName: newListName,
        listBooks: []
      }
      this.bookService.user[0].wishLists.lists.push(listObject);
      console.log(this.bookService.user[0].wishLists);
      sessionStorage.setItem("userWishList", JSON.stringify(this.bookService.user[0].wishLists));
      console.log(sessionStorage.getItem('userWishList'));
    } else {
      alert('Esta lista já existe');
    }

  }

  /*
    Alterar seta correspondente a lista aberta ou fechada
    Verificar responsive dos livros dentro da lista
    adioncar livros à lista(para isso criar um component modal(já tenhi o html e o css criado))
  */

}
