var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title : "Rahul's Article V1.0",
        heading : "Article One",
        date : "Aug 9th, 2016",
        content : 
        `
         <p>
              ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.
         </p>
         <p>  
              ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.
         </p>
         <p>
              ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.
         </p>
         `
    },
    'article-two' : {
        title : "Rahul's Article V2.0",
        heading : "Article Two",
        date : "Aug 9th, 2016",
        content : 
        `
         <p>
              ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.
         </p>
         <p>  
              ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.
         </p>
         <p>
              ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.
         </p>
         `
    },
    'article-three' : {
        title : "Rahul's Article V3.0",
        heading : "Article Three",
        date : "Aug 9th, 2016",
        content : 
        `
         <p>
              ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.
         </p>
         <p>  
              ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.
         </p>
         <p>
              ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.ThIs is my first HTML File.
         </p>
     `
    },
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate =
    `
     <head>
            <title>
              ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href = "/ui/style.css" rel="stylesheet">
        </head>
    <body>
        <div class="container">
         <div>
         <a href = "/">Home</a>
         </div>
         <hr/>
         <h3>
             <marquee>
                ${heading}
             </marquee>
         </h3>
         <div>
             ${date}
         </div>
         ${content}
        </div>
    </body
    </html>
    `;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    res.send(createTemplate(articles[articleName])); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
