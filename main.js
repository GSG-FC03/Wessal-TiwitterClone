// declare varibels to access element using dom
let textArea = document.getElementById("textArea");
let tweetButton = document.getElementById("tweetButton");
let postContainer = document.getElementById("postContainer");
let section, para, likePost, retweet;
let like = false;

tweetButton.onclick = addPost;

// declare array to store the input value on it
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items")): [];
localStorage.setItem("items", JSON.stringify(itemsArray));

//define addPost function to add input value on local storage and appear on page
function addPost(event) {
  if (textArea.value == "" || textArea.value == null) {
    alert("Plaese Enter your post ^_^");
  } else {
    event.preventDefault();
  }
  if (textArea.value.length > 250) {
    alert(
      "The Text is longer than 250 charachter,please write post with maximum 250 charachter"
    );
  } else {
    sectionPost = document.createElement("section");
    sectionPost.setAttribute("class", "post");

    para = document.createElement("p");
    para.textContent = textArea.value;
    para.setAttribute("calss", "paraText");
    

    likePost = document.createElement("i");
    likePost.setAttribute("class", "far fa-heart");
    likePost.setAttribute("id", "likeicon");
    likePost.setAttribute("onclick", "like");

    
    retweet = document.createElement("i");
    retweet.setAttribute("class", "fas fa-retweet");
    retweet.setAttribute("id", "retweeticon");
    retweet.addEventListener("click", Retweet);

   // function to like post
    likePost.addEventListener("click", () => {
      if (like) {
        likePost.setAttribute("class", "fas fa-heart");
        likePost.setAttribute("id", "liked");
        like = !like;
      } else {
        likePost.setAttribute("class", "far fa-heart");
        likePost.setAttribute("id", "likeicon");
        like = !like;
      }
    });

    // function to retweet post
    function Retweet() {
      let copyPost = sectionPost.cloneNode(true);
      postContainer.appendChild(copyPost);
    }

    postContainer.appendChild(sectionPost);
    sectionPost.appendChild(para);
    sectionPost.appendChild(likePost);
    sectionPost.appendChild(retweet);


    itemsArray.push(textArea.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    document.querySelector("#textArea").value = "";
  }
}
