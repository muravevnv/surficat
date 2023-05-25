

const formControls = document.querySelectorAll(".js-form-control");

formControls.forEach(function (item) {
  // let formInput = item.querySelector('.form__input');
  item.addEventListener("focus", function () {
    item.classList.add("is-focus");
  });
  item.addEventListener("focusout", function () {
    item.classList.remove("is-focus");
  });

  item.addEventListener("input", function () {
    if (item.value !== "") {
      console.log("12123");
      item.classList.add("is-fill");
    } else {
      console.log("12123");
      item.classList.remove("is-fill");
    }
  });
});

var options = {
  placeholder: 'Name of dropdown list'
}



const selects = document.querySelectorAll("select");

selects.forEach(function (item) {
  NiceSelect.bind(item, {placeholder: 'Name of the dropdown list'});
});

const niceSelects = document.querySelectorAll('.nice-select');
console.log(niceSelects)

niceSelects.forEach(function(item){
  item.addEventListener('click', function(){
    let niceSelectsOptions = item.querySelectorAll('.option');
    console.log(niceSelectsOptions)

    niceSelectsOptions.forEach(function(el){
      if(el.classList.contains('selected')){
        item.classList.add('is-fill')
      }
    })
  })
 
})

var tx = document.getElementsByTagName("textarea"); //РАСТЯГИВАЕМ_textarea

for (var i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );

  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";

  this.style.height = this.scrollHeight + "px"; //////console.log(this.scrollHeight);
}


let listItem = document.querySelectorAll('.modal-list__item');

listItem.forEach(function(item) {
  item.addEventListener('click', function(){
    this.classList.toggle('is-active')
  })
})

let paginationItems = document.querySelectorAll('.js-pagination-item');

paginationItems.forEach(function(item){
  item.addEventListener('click', function(){
    paginationItems.forEach(el => el.classList.remove('is-active'))
    item.classList.add('is-active')
  })
})

let tabs = document.querySelectorAll('.tabs');

tabs.forEach(function(item){
  const tabsItems = item.querySelectorAll('.tabs__item');
  tabsItems.forEach(function(el){
    el.addEventListener('click', function(){
      tabsItems.forEach(k=>k.classList.remove('is-active'))
      el.classList.add('is-active')
    })
  })
})