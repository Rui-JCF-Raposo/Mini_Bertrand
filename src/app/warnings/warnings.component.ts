import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.css']
})
export class WarningsComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  userConfirmation(anwser) {
    if(anwser == "yes") {
      this.booksService.warningModalAnswer = "yes";
    } else if(anwser == "no") {
      this.booksService.warningModalAnswer = "no";
    }
  }

}
