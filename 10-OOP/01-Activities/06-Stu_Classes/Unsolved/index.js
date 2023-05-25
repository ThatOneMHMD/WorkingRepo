// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Give BlogPost a property called 'comments' that is set to an empty array.
// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.
// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
BlogPost.prototype.addComent = function(comment) {
  this.comments.push(comment);
};

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.
class BlogPost2{
    constructor(authorName, title, text, createdOn){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        this.comments = [];
        this.printMetaData = function () {
          console.log(`Created by ${this.authorName} on ${this.createdOn}`);
        };      
    }

    addComent2(){
        this.comments.push(comment);
    }
}

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.
// TODO: Create a new object using the Comment class constructor.
// TODO: Create a new object using the BlogPost class constructor.
// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
// TODO: Print the meta data for both the BlogPost and the Comment to the console.

BlogPost.addComent('Nice post, I like it!');
BlogPost2.addComent2('Nice Blog, Pretty Cool!');




BlogPost.addComent();
BlogPost2.addComent2();
