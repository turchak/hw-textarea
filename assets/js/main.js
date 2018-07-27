(() => {
  const divSection = document.querySelector('div');
  const mainSection = document.querySelector('main');
  const areaSection = document.createElement('textarea');

  const getValue = element => {
    return element.value;
  };

  document.addEventListener('keydown', e => {
    if (e.keyCode == 69 && e.ctrlKey) {
      e.preventDefault();
      divSection.remove();
      mainSection.appendChild(areaSection);
    }
  });
  
  document.addEventListener('keydown', e => {
    if (e.keyCode == 83 && e.ctrlKey) {
      e.preventDefault();
      divSection.innerText = getValue(areaSection);
      areaSection.remove();
      mainSection.appendChild(divSection);
    } 
    if (e.keyCode == 27) {
      e.preventDefault();
      areaSection.parentNode.replaceChild(divSection, areaSection);
    }
  });
})();