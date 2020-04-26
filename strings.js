$('body').append(
    '<h1>Hello World!</h1>'
  );





let names = ["A", "B", "C", "D"];

// here we say, we want to do something with each item
names.forEach((name) => {
  // within the function I can tell what I want to do with the items
  $('ul').append(
   "<li>" +name+ "</li>"
  );


 // console.log(name);
});


var array = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"];
array.forEach(function(item) {
  $('ul').append("<li>" + item + "</li>");
});




let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};


$('main').append('<h1>'+ additionalBlock.title + '</h1>'+'<p>' +additionalBlock.text+'</p>');
