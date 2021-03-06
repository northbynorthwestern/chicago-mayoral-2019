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


// TODO
// - add noscroll to document when .content is opened



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
  });
}

$(".close").click(function(){
  var bios = document.getElementsByClassName("content");
  for (i=0; i < bios.length; i++){
    $(bios[i]).removeClass("active");
  }

});

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
