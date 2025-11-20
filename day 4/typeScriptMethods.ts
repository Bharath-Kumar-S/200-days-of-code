// Reflect on what you've learned about TypeScript classes by expanding our LibraryBook class.
// Modify the displayInfo method to also issue a message about the book's recommendation based on the author.
// If the author is "George Orwell", log "Highly recommended!"; otherwise, log "Recommended."
// Apply your knowledge of conditional expressions to enrich the output.

// Define a class representing a library book with title and author attributes and a method to display book info
class LibraryBook {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  displayInfo(): void {
    const message =
      this.author === "George Orwell" ? "Highly recommended!" : "Recommended.";
    console.log(message);
    console.log(`Book Title: ${this.title}, Author: ${this.author}`);
  }
}

const myBook = new LibraryBook("1984", "George Orwell");
myBook.displayInfo();
