// The JavaScript DOMContentLoaded Event
// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
//     const textNode = document.createTextNode("This is really cool!");
// document.querySelector('#text').appendChild(textNode);
document.querySelector('#text').textContent = "This is really cool!";
    // console.log(document.querySelector('#text').appendChild("This is really cool!"));
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

//   id="text" = "This is really cool!";
// .appendChild("This is really cool!");
