let divSection = document.querySelector('div');
let areaSection = document.querySelector('textarea');
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 69 && e.ctrlKey) {
    e.preventDefault();
    divSection.parentNode.innerHTML="<textarea></textarea>"
  }
});


document.addEventListener("keydown", function(e) {
  let areaSection = document.querySelector('textarea');
  if (e.keyCode == 83 && e.ctrlKey) {
    e.preventDefault();

    divSection.innerHTML=myFunction();
    areaSection.parentNode.replaceChild(divSection, areaSection);
  } if (e.keyCode == 27) {
    e.preventDefault();
  areaSection.parentNode.replaceChild(divSection, areaSection);
  }

});
function myFunction() {
    return document.querySelector('textarea').value;

}
