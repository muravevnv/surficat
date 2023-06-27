

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

let spacer = 16;

if (window.matchMedia("(max-width: 1024px)").matches) {
  spacer = 16;
} 

// if(window.matchMedia("(max-width: 768px)").matches) {
//   spacer = 8;
// }


let open = document.querySelector('.open');

if(open) {

  let videoAfterOpen = open.querySelector('.after-open');
  let videoBtn = open.querySelector('.open__btn');

  videoBtn.addEventListener('click', function(){
    videoAfterOpen.play();
    open.classList.add('is-open');
  })
}


for (var i = 0; i < tx.length; i++) {
  let innerHeight = tx[i].scrollHeight;
 
  let height = innerHeight + spacer;
  
  console.log(typeof(innerHeight), typeof(spacer), typeof(height))
  tx[i].setAttribute(
    "style",
    "height:" + height + "px;overflow-y:hidden;"
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
  allowTouchMove: true,
  slidesPerView: 'auto',
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 12,
    }, 
    768: {
      slidesPerView: 'auto',
      allowTouchMove: false,
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

let sertSlider = new Swiper('.sertificat-slider', {
  allowTouchMover: false,
  slidesPerView: 1,
  navigation: {
    prevEl: '.sertificat-slider .slider-prev',
    nextEl: '.sertificat-slider .slider-next'
  },
  pagination: {
    el: '.swiper-pagination'
  }
})

let acc = document.querySelectorAll('.faq-item');


let initAcc = function() {
  acc.forEach(item => {
    let accItem = item;
    let accHead = item.querySelector('.faq-item__head');
    
    accHead.addEventListener('click', function(){
      
      if(accItem.classList.contains('is-open')) {
        accItem.classList.remove('is-open');
      } else {
        acc.forEach(el => el.classList.remove('is-open'))
        accItem.classList.add('is-open')
      }
    })
  })
}


if(acc) {
  initAcc()
}


let typeItems = document.querySelectorAll('.type')

typeItems.forEach(function(item) {
  let type = item.querySelector('.type-item');
  let typeList = item.querySelector('.type-list');
  let typeListItem = typeList.querySelectorAll('.type-list__item');
  let typeContent = item.querySelector('.type-item__content');

  type.addEventListener('click', function(){
    typeList.classList.toggle('is-open');
    this.classList.toggle('is-active')
  })

  typeListItem.forEach(function(e){
    e.addEventListener('click', function(){
      typeListItem.forEach((k)=> {
        k.classList.remove('is-selected')
      })
      e.classList.add('is-selected');
      let typeIcon = e.innerHTML;
      typeContent.innerHTML = typeIcon;
      closeList()
    })
  })

  let closeList = function () {
    if(typeList.classList.contains('is-open')) {
      typeList.classList.remove('is-open');
      type.classList.remove('is-active')
    } else {
      return
    }
  }
})

let text = document.querySelectorAll('.js-text');

function showText() {
  text.forEach(function(item) {
    let textContent = item.querySelector('.js-text-content');
    let textBtn = item.querySelector('.js-text-show');

    textBtn.addEventListener('click', function(){
      textContent.classList.toggle('is-active');
      this.classList.toggle('is-active');
    })
  })
}

if(text) {
  showText();
}


const password = document.querySelectorAll('.password');

password.forEach(function(item) {
  let itemInput = item.querySelector('.password-input');
  let itemControl = item.querySelector('.password-control');
  

  itemControl.addEventListener('click', function(){
    let itemType = itemInput.getAttribute('type')
    if (itemType === 'password'){
        item.classList.add('view');
        itemInput.setAttribute('type', 'text');
      } else {
        item.classList.remove('view');
        itemInput.setAttribute('type', 'password');
      }
      return false
  })
})
