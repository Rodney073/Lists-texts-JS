$('body').append(
    '<h1>Hello World!</h1>'
  );





let names = ["A", "B", "C", "D"];

// here we say, we want to do something with each item
names.forEach((name) => {
  // within the function I can tell what I want to do with the items
  $('ul').append(
   '<li> ${name} </li>'
  );


  console.log(name);
});

