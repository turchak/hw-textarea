let divSection = document.querySelector('div');
let areaSection = document.querySelector('textarea');
let divContent = document.querySelector('div').textContent;
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 69 && e.ctrlKey) {
    e.preventDefault();
    console.log(document.querySelector('div').value);

    divSection.parentNode.innerHTML="<textarea>"+`${divContent}`+"</textarea>";

  }
});


document.addEventListener("keydown", function(e) {
  let areaSection = document.querySelector('textarea');
  if (e.keyCode == 83 && e.ctrlKey) {
    e.preventDefault();

    divSection.innerHTML=myFunction();
    areaSection.parentNode.replaceChild(divSection, areaSection);
    divContent = document.querySelector('div').textContent;
  } if (e.keyCode == 27) {
    e.preventDefault();
  areaSection.parentNode.replaceChild(divSection, areaSection);
  }

});
function myFunction() {
    return document.querySelector('textarea').value;
}
