const xhr = new XMLHttpRequest();

//To know the response we need to use this code. 
//xhr.send is asynchronous code and hence if we just add xhr.response in next line it will be undefined.
//So we use this event listener which listenes to load event and executes the function.
//The reason we wrote this code above the xhr.send is same as we write code for what needs to happen when we click a button and write element.click() in next line.
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();