// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogPost(i, title, text, createdOn) {

    this.Name = i;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = function(){

        console.log(`Created by ${this.i} on ${this.createdOn}`)
    }
}

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor
const WeatherBlog = new BlogPost("Mark", "Weather Blog", "Lots of text", "SomeWebsite")

// TODO: Call the 'printMetaData()' method on the new object
WeatherBlog.printMetaData();
console.log(WeatherBlog);
