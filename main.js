// declare varibels to access element using dom
let textArea = document.getElementById("textArea");
let tweetButton = document.getElementById("tweetButton");
let postContainer = document.getElementById("postContainer");
let section, para,likePost,retweet;

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
  }
    if(textArea.value.length > 250){
        alert("the Text is longer than 250 char");
    }
    else{

    sectionPost = document.createElement("section");
    postContainer.appendChild(sectionPost);
    sectionPost.setAttribute("class", "post");

    para = document.createElement("p");
    para.textContent = textArea.value;
    sectionPost.appendChild(para);
    para.setAttribute("calss", "paraText");
    // para.style.width = "60%";
   
    likePost = document.createElement("i");
    sectionPost.appendChild(likePost);
    likePost.setAttribute("class",'far fa-heart');
    likePost.setAttribute("id",'likeicon');
    likePost.setAttribute('onclick','like');

    retweet = document.createElement("i");
    sectionPost.appendChild(retweet);
    retweet.setAttribute("class",'fas fa-retweet');
    retweet.setAttribute("id",'retweeticon');
    

    itemsArray.push(textArea.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    document.querySelector("#textArea").value = "";
  }
}

