// lessonplan alert on subjectpage
function lessonplanDl() {
  var lessonplanbtn = document.querySelector(".subjectbtn");
  lessonplanbtn.addEventListener("click", function() {
    alert("You have now downloaded the lessonplan.");
  });
}



// worksheetplan alert on subjectpage
function worksheetplanDl() {
  var lessonplanbtn = document.querySelector(".subjectbtn1");
  lessonplanbtn.addEventListener("click", function() {
    alert("You have now downloaded the worksheet.");
  });
}

var sendbtn = document.querySelector(".commentbtn");
var textarea = document.querySelector(".textcomment");
var postContainer = document.querySelector(".post-container-subjects");

function commentEvent() {
  sendbtn.addEventListener("click", function () {
    localStorage.setItem("storecomment", textarea.value);

    buildComment();

  });
}

function buildComment() {
  if (localStorage.getItem("storecomment") === null ) {
    return;
  } else {
    var divElm = document.createElement("div");
    divElm.setAttribute("class", "comment-box");
    var commentElm = document.createElement("div");
    commentElm.setAttribute("class", "comment-user");
    var commentName = document.createElement("h3");
    commentName.innerHTML = "Anne-Sofie Nielsen";
    var commentDate = document.createElement("p");
    commentDate.innerHTML = "April 19, 2018";
    commentElm.appendChild(commentName);
    commentElm.appendChild(commentDate);
    divElm.appendChild(commentElm);

    var kudoImg = document.createElement("img");
    kudoImg.setAttribute("src", "assets/images/KUBOlogo.png");
    kudoImg.setAttribute("class", "profile-pic");

    var contentElm = document.createElement("div");
    contentElm.setAttribute("class", "comment-content");
    var pElm = document.createElement("p");
    var commentget = localStorage.getItem("storecomment");
    pElm.innerHTML = commentget;
    contentElm.appendChild(kudoImg);
    contentElm.appendChild(pElm);
    divElm.appendChild(contentElm);

    postContainer.insertBefore(divElm, postContainer.firstChild);
  }
}

var deleteButton = document.querySelector(".deletebtn");

function deleteClick() {
  deleteButton.addEventListener("click", function() {
    var confirmClick = confirm("Are you sure you want to delete this lesson plan?");

    if (confirmClick === true) {
      window.location.replace("index.html");
    }
  });
}

function codingClick() {
  var codingButton = document.querySelector(".codingbtn");
  codingButton.addEventListener("click", function() {
    lessonPlans();
  });
}

function allButtonClick() {
  var allButton = document.querySelector(".allbtn");

  allButton.addEventListener("click", function() {
    buttonAll();
  });
}

function lessonPlans() {
  var lessonplans = document.querySelectorAll(".lessonplan-box");

  for (var i = 0; i < lessonplans.length; i++) {
    if (lessonplans[i].classList.contains("coding")) {
      lessonplans[i].classList.add("showlesson");
      lessonplans[i].classList.remove("hidelesson");
    } else {
      lessonplans[i].classList.add("hidelesson");
      lessonplans[i].classList.remove("showlesson");
    }
    }
  }

function buttonAll() {
  var lessonplans = document.querySelectorAll(".lessonplan-box");

  for (var i = 0; i < lessonplans.length; i++) {
    if (lessonplans[i].classList.contains("all")) {
      lessonplans[i].classList.add("showlesson");
      lessonplans[i].classList.add("lessonplan-box");
      lessonplans[i].classList.remove("hidelesson");
    }
  }
}

function newpostLocal () {
  var titlePost = document.querySelector(".titel").value;
  localStorage.setItem("postTitle", titlePost);
}

function publishButton() {
  var publishbtn = document.querySelector(".greenknap");
  publishbtn.addEventListener("click", function() {
    newpostLocal();
  });
}

function newTopic() {
  var postTitle = localStorage.getItem("postTitle");
  var container = document.querySelector(".topic-container");

  if (postTitle === null) {
    return;
  } else {
    var divElm = document.createElement("div");
    divElm.setAttribute("class", "single-topic");
    divElm.classList.add("gray-box");

    var topicTitle = document.createElement("div");
    topicTitle.setAttribute("class", "topic-title");

    divElm.appendChild(topicTitle);

    var postImg = document.createElement("img");
    postImg.setAttribute("src", "assets/images/KUBOlogo.png");
    postImg.classList.add("profile-pic");

    topicTitle.appendChild(postImg);

    var infoDiv = document.createElement("div");
    var postHeadline = document.createElement("h3");
    postHeadline.innerHTML = postTitle;
    infoDiv.appendChild(postHeadline);

    var postText = document.createElement("p");
    postText.innerHTML = "Anne-Sofie Nielsen, 19 April";
    infoDiv.appendChild(postText);
    topicTitle.appendChild(infoDiv);

    container.appendChild(divElm);

    var topicInfo = document.createElement("div");
    topicInfo.setAttribute("class", "topic-info");

    var repliesTopic = document.createElement("div");
    repliesTopic.setAttribute("class", "replies-topic");
    var postReplies = document.createElement("p");
    postReplies.innerHTML = "Replies: 0";
    repliesTopic.appendChild(postReplies);
    var postUpvotes = document.createElement("p");
    postUpvotes.innerHTML = "Upvotes: 0";
    repliesTopic.appendChild(postUpvotes);
    topicInfo.appendChild(repliesTopic);

    var lastMessage = document.createElement("div");
    lastMessage.setAttribute("class", "message-topic");
    var messageP = document.createElement("p");
    messageP.innerHTML = "0 Messages";
    lastMessage.appendChild(messageP);

    topicInfo.appendChild(lastMessage);
    divElm.appendChild(topicInfo);
  }
}

function searchClick() {
  var searchIcon = document.querySelector(".searchclick");
  searchIcon.addEventListener("click", function() {
      var searchInput = document.querySelector(".searchvalue").value;
    searchbar();
  });
}

function searchbar() {
  var searchInput = document.querySelector(".searchvalue").value;

  function capitalize_Words(str)
  {
   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

var capInput = capitalize_Words(searchInput);

  var lessonplans = document.querySelectorAll(".lessonplan-box");

  var headline = document.querySelectorAll(".headline");

for (var i = 0; i < lessonplans.length; i++) {
  if (headline[i].innerText.includes(capInput) || lessonplans[i].classList.contains(searchInput)) {
    lessonplans[i].classList.add("showlesson");
    lessonplans[i].classList.remove("hidelesson");
  } else {
    lessonplans[i].classList.add("hidelesson");
    lessonplans[i].classList.remove("showlesson");
  }
}
}
