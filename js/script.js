"use strict";

//funtion to slide out the info panel for each portfolio item
function show(id) {
  var element = document.getElementById(id);
  if (element.className == 'info-panel-closed') {
    setTimeout (() => {
      element.classList.add('info-panel-open');
      var children = (element.children);
      setTimeout (() => {
        for (var i = 0; i < children.length; i++) {
          children[i].classList.remove('hide');
        }
      }, 10)
    }, 0)
  }
}
//hides, slides away, the info panel
function hide(id) {
  var element = document.getElementById(id);
  element.classList.remove('info-panel-open');
  var children = (element.children);
  for (var i = 0; i < children.length; i++) {
    children[i].classList.add('hide');
  }
}
//if a portfolio item is clicked on, this checks if the info panel is currently
//visible or not, then calls the appropriate function to change state
function clickHandler(id) {
  var element = document.getElementById(id);
  if (element.className == 'info-panel-closed info-panel-open') {
    hide(id);
  } else {
    show(id);
  }
}
