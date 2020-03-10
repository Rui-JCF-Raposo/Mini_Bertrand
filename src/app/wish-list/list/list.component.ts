import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  bookService: BooksService;
  @Input() listInfo;
  listOpen: boolean = false;
  listArrowIndicator: string = '../../assets/icons/clientList_Icons/right-chevron.svg';

  constructor(private booksService: BooksService) { 
    this.bookService = booksService;
  }

  ngOnInit() {
    console.log(this.listInfo);
    console.log(this.bookService.user[0].wishLists.lists);
  }

  showHideList() {
    if(this.listOpen) {
      this.listOpen = false;
      this.listArrowIndicator = '../../assets/icons/clientList_Icons/right-chevron.svg'
    } else {
      this.listOpen = true;
      this.listArrowIndicator = '../../assets/icons/clientList_Icons/down-chevron.svg'
    }
  }

  editListName() {
    const newListName = prompt('Introduza um novo nome para a sua lista');
    //Find Corresponding List
    if(newListName !== "") {
      for(let i = 0; i < this.bookService.user[0].wishLists.lists.length; i++) {
        if(this.bookService.user[0].wishLists.lists[i].listName == this.listInfo.listName) {
          this.bookService.user[0].wishLists.lists[i].listName = newListName;
          this.listInfo.listName = newListName;
          sessionStorage.setItem("userWishList", JSON.stringify(this.bookService.user[0].wishLists))
          console.log("Working Loop");
        }
        console.log(this.bookService.user[0].wishLists.lists);
      }
    }
  }

  removeList() {
    //this.bookService.warningModalOpen = true;
    //this.bookService.warningsModalMessage('removeWishList');
    const confirmDelete =  confirm('Tem a certeza que pretende remover a lista?');
    if(confirmDelete == true) {
      for(let i = 0; i < this.bookService.user[0].wishLists.lists.length; i++) {
        if(this.bookService.user[0].wishLists.lists[i].listName == this.listInfo.listName) {
          this.bookService.user[0].wishLists.lists.splice(i, 1);
          sessionStorage.setItem("userWishList", JSON.stringify(this.bookService.user[0].wishLists))
        }
      }
    }
  }

}
