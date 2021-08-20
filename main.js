// declare varibels to access element using dom
let textArea=document.getElementById('textArea')
let tweetButton=document.getElementById('tweetButton')
let post=document.getElementById('post')

tweetButton.click=addPost();
// define function to add post
function addPost(event){
    if(textArea.value==""||textArea.value==null)
    {
        alert("please add your post ^_^");
    }
   else{
       event.preventDefult();
   }
}


  