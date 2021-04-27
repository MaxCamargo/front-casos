/* const add = document.querySelector('#add');
const generalcontent = document.querySelector('.generalContent');



add.addEventListener('click', displayContent)
function displayContent() {
    if (generalcontent.style.display === "block") {
        generalcontent.style.display = "none";;
        add.innerHTML = "Más información";

    }else{
        generalcontent.style.display = "block";
        add.innerHTML = "X";
    }
} 
 */

var gc = document.querySelector('.generalContent');
let btng = document.getElementsByClassName("btnGeneral");
var i;

for (i = 0; i < btng.length; i++) {
  btng[i].addEventListener("click", function() {
      var gc = this.nextElementSibling;
      if (gc.style.display === "block") {
        gc.style.display = "none";
      } else {
        gc.style.display = "block";
      }
    });
}



let coll = document.getElementsByClassName("expander");
var i;
  for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
  }


let acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* this.classList.toggle("active"); */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
}

