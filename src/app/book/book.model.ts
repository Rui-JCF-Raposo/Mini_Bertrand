export class Book {
    
    title: string;
    isbn: number;
    authors: string[] = [];
    thumbnailUrl: string;
    price: number;
    quantity: number;
    pageCount?: number;
    longDescription?: string;
    
    constructor(title: string, isbn: number, authors: string[], thumbnailUrl: string, price: number, quantity: number,pageCount?: number, longDescription?: string) {
        this.title = title;
        this.isbn = isbn;
        this.pageCount = pageCount;
        this.authors = authors;
        this.thumbnailUrl = thumbnailUrl;
        this.price = price,
        this.quantity = 1;
        this.pageCount = pageCount;
        this.longDescription = longDescription;
    }
}