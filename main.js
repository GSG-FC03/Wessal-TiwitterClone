// declare varibels to access element using dom
let textArea = document.getElementById("textArea");
let tweetButton = document.getElementById("tweetButton");
let postContainer = document.getElementById("postContainer");
let section, para,likePost;

tweetButton.onclick = addPost;

// declare array to store the input value on it
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
localStorage.setItem("items", JSON.stringify(itemsArray));

//define add function to add input value on local storage and appear on page
function addPost(event) {
  if (textArea.value == "" || textArea.value == null) {
    alert("Plaese Enter your post ^_^");
  } else {
    event.preventDefault();

    section = document.createElement("section");
    postContainer.appendChild(section);
    section.setAttribute("class", "post");

    para = document.createElement("p");
    para.textContent = textArea.value;
    section.appendChild(para);
    para.setAttribute("calss", "paraText");
    // para.style.width = "60%";
    para.style.borderBottom = "1px solid red";

    likePost = document.createElement("i");
    section.appendChild(likePost);
    likePost.setAttribute("class",'far fa-heart');

    retweet = document.createElement("i");
    section.appendChild(retweet);
    retweet.setAttribute("class",'fas fa-retweet');
    

    itemsArray.push(textArea.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    document.querySelector("#textArea").value = "";
  }
}
