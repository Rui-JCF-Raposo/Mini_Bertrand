import { Injectable, Output } from '@angular/core';
import { Book } from './book/book.model';
//import * as booksDB from '../app/booksJson/booksDB.json';
import { HttpClient } from '@angular/common/http'
import { isGeneratedFile } from '@angular/compiler/src/aot/util';



@Injectable({
  providedIn: 'root'
})

export class BooksService {

  booksDataBase: Book[];
  englishBooks: Book [] = [];
  spanishBooks: Book[] = [];
  frenchBooks: Book[] = [];
  ebooks: Book[] = [];
  textBooks: Book[] = [];
  newBooks: Book[] = [];
  preReleaseBooks: Book[] = [];

  user: any[] = [
    {shopcart: {
      books: [],
      totalPrice: 0,
      numberOfBooks: 0
    }, wishLists: {
      lists: [{listName: "Lista de Exemplo", listBooks: []}]
    },
    }
  ]

  homePage: boolean = true;
  spanishPage: boolean = false;
  englishPage: boolean = false;
  frenchPage: boolean = false;
  ebooksPage: boolean = false;
  textBooksPage: boolean = false;
  wishListPage: boolean = false;
  
  
  mainSelectorFix: boolean = false;
  addToListModalOpen: boolean = false;
  storedBookWhenOpenedModal: Book;
  warningModalOpen = false;
  warningModalMessageType: string;
  warningModalAnswer: string;

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get<Book[]>('./booksJson/booksDB.json').subscribe(data => this.booksDataBase = data);
    console.log(this.booksDataBase);
    if(sessionStorage.getItem("users")) {
      this.user[0].shopcart.books = JSON.parse(sessionStorage.getItem("users"));
    }
    this.calculateShopcartTotalPrice();
  }

  ngOnInit() {
    
  } 
  createSpanishCategory() {
    for(let i = 8; i < 15; i++) {
      this.spanishBooks.push(this.addBook(i));
    }
  }

  createEnglishCategory() {
    for(let i = 0; i <= 8; i++) {
      this.englishBooks.push(this.addBook(i))
    }
  }

  createFrenchCategory() {
    for(let i = 18; i <= 24; i++) {
      this.frenchBooks.push(this.addBook(i))
    }
  }

  createEbooksCategory() {
    for(let i = 26; i <= 30; i++) {
      this.ebooks.push(this.addBook(i))
    }
  }

  createTextBooksCategory() {
    for(let i = 30; i <= 38; i++) {
      this.textBooks.push(this.addBook(i))
    }
  }

  createNewBooksCategory() {
    for(let i = 39; i <= 46; i++) {
      this.newBooks.push(this.addBook(i))
    }
  }

  createPreReleasedBooksCategory() {
    for(let i = 47; i <= 54; i++) {
      this.preReleaseBooks.push(this.addBook(i));
    }
  }

  addBook(i) {
    return new Book(
      this.booksDataBase[i].title,
      this.booksDataBase[i].isbn,
      this.booksDataBase[i].authors,
      this.booksDataBase[i].thumbnailUrl,
      Math.random() * 30,
      1,
      this.booksDataBase[i].pageCount
      
    )
  }

  categoriesView(view) {

    this.homePage = false;
    this.spanishPage = false;
    this.englishPage = false;
    this.frenchPage = false;
    this.ebooksPage = false;
    this.textBooksPage = false;
    this.wishListPage = false;
    this.mainSelectorFix = true;

    if(view == "spanishPage") {
      this.spanishPage = true;
      console.log("spanishPage -> ", this.spanishPage);
    } else if(view == "englishPage") {
      this.englishPage = true;
      console.log("englishPage -> ", this.englishPage);
    } else if(view == "frenchPage") {
      this.frenchPage = true;
      console.log("frenchPage -> ", this.frenchPage);
    } else if(view == "ebooksPage") {
      this.ebooksPage = true;
      console.log("ebooksPage -> ", this.ebooksPage);
    } else if(view == "textBooksPage") {
      this.textBooksPage= true;
      console.log("textBooksPage -> ", this.textBooksPage);
    } else if(view == "homePage") {
      console.log("homePage -> ", this.homePage);
      this.homePage= true;
      this.mainSelectorFix = false;
    } else if(view == "wishListPage") {
      this.wishListPage = true;
      this.mainSelectorFix = false;
    }
  }

  addBookToShopCart(isbn, category, bookFromList?) {
    let book: Book;
    if(bookFromList) {
      book = bookFromList;
    } else {
      book = this.findBookByIsbn(isbn, category);
    }
    if(!this.findRepetitions('shopcart', book, '')) {
      this.user[0].shopcart.books.push(book);
      console.log(this.user[0].shopcart.books);
      sessionStorage.setItem("users", JSON.stringify(this.user[0].shopcart.books));
      this.calculateShopcartTotalPrice();
      alert('O seu livro foi adicionado ao carrinho de compras');
    } else {
      alert('O livro já se encontra no carrinho');
    }
  }

  findBookByIsbn(isbn, category) {
    if(category == "spanish") {
      for(let i = 0; i < this.spanishBooks.length; i++) {
        if(this.spanishBooks[i].isbn == isbn) {
          return this.spanishBooks[i];
        }
      }
    } else if(category == "english") {
      for(let i = 0; i < this.englishBooks.length; i++) {
        if(this.englishBooks[i].isbn == isbn) {
          return this.englishBooks[i];
        }
      }
    } else if(category == "french") {
      for(let i = 0; i < this.frenchBooks.length; i++) {
        if(this.frenchBooks[i].isbn == isbn) {
          return this.frenchBooks[i];
        }
      }
    } else if(category == "ebooks") {
      for(let i = 0; i < this.ebooks.length; i++) {
        if(this.ebooks[i].isbn == isbn) {
          return this.ebooks[i];
        }
      }
    } else if(category == "textBooks") {
      for(let i = 0; i < this.textBooks.length; i++) {
        if(this.textBooks[i].isbn == isbn) {
          return this.textBooks[i];
        }
      }
    } else if(category == "news") {
      for(let i = 0; i < this.newBooks.length; i++) {
        if(this.newBooks[i].isbn == isbn) {
          return this.newBooks[i];
        }
      }
    } else if(category == "pre-release") {
      for(let i = 0; i < this.frenchBooks.length; i++) {
        if(this.frenchBooks[i].isbn == isbn) {
          return this.frenchBooks[i];
        }
      }
    }
    for(let i = 0; i < this.preReleaseBooks.length; i++) {
      if(this.preReleaseBooks[i].isbn == isbn) {
        return this.preReleaseBooks[i];
      }
    }
  }

  deleteBookFromShopcart(book) {
    console.log(book);
    //this.warningModalOpen = true;
    //this.warningsModalMessage('removeShopcartBook');
    const confirmDelete = confirm('Tem a certeza que quer remover o livro?');
    if(confirmDelete == true) {
      for(let i = 0; i < this.user[0].shopcart.books.length; i++) {
        if(this.user[0].shopcart.books[i] == book) {
          this.user[0].shopcart.books.splice(i, 1)
          sessionStorage.setItem("users", JSON.stringify(this.user[0].shopcart.books));
          console.log("Book Deleted!");
        }
      this.calculateShopcartTotalPrice();
      }
    }
    //this.warningModalOpen = false;
    this.warningModalAnswer = "";
  }

  shopcartQuantityAdd(book) { 
    for(let i = 0; i < this.user[0].shopcart.books.length; i++) {
      if(this.user[0].shopcart.books[i] == book) {
        this.user[0].shopcart.books[i].quantity++;
        sessionStorage.setItem("users", JSON.stringify(this.user[0].shopcart.books));
        console.log("Added quantity");
      }
    }
    this.calculateShopcartTotalPrice();
  }

  shopcartQuantitySubtract(book) { 
    for(let i = 0; i < this.user[0].shopcart.books.length; i++) {
      if(this.user[0].shopcart.books[i] == book) {
        if(this.user[0].shopcart.books[i].quantity > 0) {
          this.user[0].shopcart.books[i].quantity--;
          sessionStorage.setItem("users", JSON.stringify(this.user[0].shopcart.books));
          console.log("Subtracted Quantity");
        }
      }
    }
    this.calculateShopcartTotalPrice();
  }

  calculateShopcartTotalPrice() {
    let shopcartTotalPrice = 0;
    for(let i = 0; i < this.user[0].shopcart.books.length; i++) {
      const extractPriceString = parseFloat(String(this.user[0].shopcart.books[i].price)).toFixed(2);
      const priceNumber = Number(extractPriceString);
      const bookQuantity = this.user[0].shopcart.books[i].quantity;
      const bookPriceTotal = priceNumber * bookQuantity;
      shopcartTotalPrice += bookPriceTotal;
    }
    this.user[0].shopcart.totalPrice = shopcartTotalPrice;
  }

  calculateTotalBooksInShopcart() {
    this.user[0].shopcart.numberOfBooks = 0;
    for(let i = 0; i < this.user[0].shopcart.books.length; i++) {
      this.user[0].shopcart.numberOfBooks += this.user[0].shopcart.books[i].quantity;
    }
    return this.user[0].shopcart.numberOfBooks;
  }

  storeBookWhenOpenModal(book) {
    this.storedBookWhenOpenedModal = book;
    console.log(this.storedBookWhenOpenedModal);
  }

  addBookToCorrespondingList(list, book) {
    if(!this.findRepetitions('listItem', book, list)) {
      for(let i = 0; i < this.user[0].wishLists.lists.length; i++) {
        if(this.user[0].wishLists.lists[i].listName == list) {
          console.log('Book to add -> ', book);
          this.user[0].wishLists.lists[i].listBooks.push(book);
          console.log(this.user[0].wishLists.lists[i]);
          sessionStorage.setItem("userWishList", JSON.stringify(this.user[0].wishLists))
          alert('O seu livro foi adicionado à lista ' + list);
        }
      }
      console.log(list);
    } else {
      alert('O livro já se encontra nesta lista');
    }
  }

  findRepetitions(context, book, listName) {
    if(context == "shopcart") {
      for(let i = 0; i < this.user[0].shopcart.books.length; i++) {
        if(this.user[0].shopcart.books[i].title == book.title) {
          return true;
        }
      }
    } else if(context == "wishList") {
      for(let i = 0; i < this.user[0].wishLists.lists.length; i++) {
        if(this.user[0].wishLists.lists[0].listName == listName) {
          return true;
        }
      }
    } else if(context == "listItem") {
      for(let i = 0; i < this.user[0].wishLists.lists.length; i++) {
        if(this.user[0].wishLists.lists[i].listName == listName) {
          for(let j = 0; j < this.user[0].wishLists.lists[i].listBooks.length; j++) {
            if(this.user[0].wishLists.lists[i].listBooks[j].title == book.title) {  
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  removeBookFromList(listName, book) {
    //this.warningModalOpen = true;
    //this.warningsModalMessage('removeWishListBook');
    const confirmDelete = confirm('Tem a certeza que quer remover o livro?');
    if(confirmDelete ==  true) {
      for(let i = 0; i < this.user[0].wishLists.lists.length; i++) {
        if(this.user[0].wishLists.lists[i].listName == listName) {
          for(let j = 0; j < this.user[0].wishLists.lists[i].listBooks.length; j++) {
            if(this.user[0].wishLists.lists[i].listBooks[j].title == book.title) {
              console.log('Remove Book From List Work');
              this.user[0].wishLists.lists[i].listBooks.splice(j, 1);
              sessionStorage.setItem("userWishList", JSON.stringify(this.user[0].wishLists))
            }
          }
        }
      }
    }
  }

  warningsModalMessage(source) {
    if(source == 'removeShopcartBook') {
      this.warningModalMessageType = 'removeShopcartBook'
    } else if(source == 'removeWishListBook') {
      this.warningModalMessageType = 'removeWishListBook'
    } else if(source == 'removeWishList') {
      this.warningModalMessageType = 'removeWishList';
    }
  }
}
