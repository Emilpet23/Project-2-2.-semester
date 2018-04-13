
// comments on subjectpage
function commentFunction() {
  // Send comment
  var commentbtn = document.querySelector(".commentbtn");
  var commentarea = document.querySelector(".textcomment");
  var commentbox = document.querySelector(".comment-box");
  var newComment = commentbox.cloneNode(true);
  var postContainer = document.querySelector(".post-container-subjects");

  commentbtn.addEventListener("click", function() {
    var commentvalue = commentarea.value;

    postContainer.insertBefore(newComment, postContainer.childNodes[0]);

    // new comment text
    var newText = newComment.getElementsByTagName("p")[1];
    newText.innerHTML = commentvalue;

    //new comment date
    var commentDate = newComment.getElementsByTagName("p")[0];
    var d = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    commentDate.innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();


  });
}


// lessonplan alert on subjectpage
function lessonplanDl() {
  var lessonplanbtn = document.querySelector(".subjectbtn");
  lessonplanbtn.addEventListener("click", function() {
    alert("You have now downloaded the lessonplan.");
    console.log("");
  });
}



// worksheetplan alert on subjectpage
function worksheetplanDl() {
  var lessonplanbtn = document.querySelector(".subjectbtn1");
  lessonplanbtn.addEventListener("click", function() {
    alert("You have now downloaded the worksheet.");
    console.log("");
  });
}

//Publish new topic
var postTitle = document.querySelector(".titel");
var publishbtn = document.querySelector(".greenknap");
var topicContainer = document.querySelector(".topic-container");

publishbtn.addEventListener("click", function() {
  // localStorage.setItem("titlePost", postTitle);
  var grayTopic = document.querySelector(".single-topic.gray-box");
  var newTopic = grayTopic.cloneNode(true);
  // localStorage.getItem("titlePost");
  topicContainer.appendChild(newTopic);
  // newTopic.getElementsByTagName("h3")[0].innerHTML = "hejsa";

});
