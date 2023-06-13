

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


const selects = document.querySelectorAll("select");

selects.forEach(function (item) {
  NiceSelect.bind(item, {placeholder: item.dataset.name});
});

const niceSelects = document.querySelectorAll('.nice-select');
console.log(niceSelects)

niceSelects.forEach(function(item){
  item.addEventListener('click', function(){
    let niceSelectsOptions = item.querySelectorAll('.option');

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


let sertificatSlider = new Swiper('.sertificat-list', {
  allowTouchMover: false,
  slidesPerView: 'auto',
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      allowTouchMover: true,
      spaceBetween: 12,
    }, 
    768: {
      slidesPerView: 'auto',
      allowTouchMover: false,
      spaceBetween: 0
    }, 
  }
})

var modalButtons = document.querySelectorAll(".js-open-modal"),
overlay = document.querySelectorAll(".modal-overlay"),
closeButtons = document.querySelectorAll(".modal__close");

modalButtons.forEach(function (item) {

item.addEventListener("click", function (e) {

  e.preventDefault();

  var modalId = this.getAttribute("data-modal"),
    modalElem = document.querySelector(
      '.modal[data-modal="' + modalId + '"]'
    );

  modalElem.classList.add("is-open");
}); 
}); 

closeButtons.forEach(function (item) {
item.addEventListener("click", function (e) {
  var parentModal = this.closest(".modal");
  parentModal.classList.remove("is-open");

});
}); 

overlay.forEach(function (item) {
item.addEventListener("click", function (e) {
  var parentModal = this.closest(".modal");
  parentModal.classList.remove("is-open");

});
}); 

let previewSlider = new Swiper('.preview-gallery ', {
  allowTouchMover: false,
  slidesPerView: 1,
  navigation: {
    prevEl: '.slider-prev',
    nextEl: '.slider-next'
  },
  pagination: {
    el: '.swiper-pagination'
  }
})