import '../scss/main.scss';

window.$('.custom-icon--facebook').click((e) => {
  e.preventDefault();
  const uri = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${uri}`);
});


window.$('.bt-icon--twitter').click((e) => {
  e.preventDefault();
  const uri = window.location.href;
  const status = encodeURIComponent(`${window.tweetText} ${uri}`);
  window.open(`https://twitter.com/intent/tweet?text=${status}`);
});



var coll = document.getElementsByClassName("collapsible");

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var can = $(this).attr("data-id");
    var currcan = $("."+can);
    console.log(can + " " + currcan);

    if ($(currcan).hasClass("active")) {
      $(currcan).removeClass("active");
    } else {
      $(currcan).addClass("active");
    }
    //var content = this.nextElementSibling;
    // if (content.style.display === "block") {
    //   content.style.display = "none";
    // } else {
    //   content.style.display = "block";
    // }
    //  if (content.style.maxHeight){
    //   content.style.maxHeight = null;
    // } else {
    //   content.style.maxHeight = content.scrollHeight + "px";
    // }
  });
}



  // get second class name (candidate's id) and save as variable
  // display the corresponding candidate-info div
  // hide the rest of the candidate-info divs
  //also, how to make it automatically display bio tab when clicked on?
  //photos
  //styling so it's cuter



  $(".tablinks").click(function() {
    var i, tabcontent, tablinks;
    var canName = $(this).attr("data-can");
    var tab = $(this).attr("data-id") + " " + $(this).attr("data-can");
    console.log(tab);
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    $(this).className += " active";
});
