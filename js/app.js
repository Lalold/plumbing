$('.profi__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 815,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
})

$('.reviews__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1002,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 741,
      settings: {
        slidesToShow: 1
      }
    }
  ]
})

const arrowPic = document.querySelectorAll('.arrow__pic')
const text = document.querySelectorAll('.question__text')
const number = document.querySelectorAll('.question__number')
const spanText = document.querySelectorAll('.question__text_span')
const burgerIcon = document.querySelector('.burger__icon_block')
const burgerMenu = document.querySelector('.burger__menu')
const burgerLink = document.querySelectorAll('.burger__link')
const faqTextBlock = document.querySelectorAll('.faq__text_block')
const questionItem = document.querySelectorAll('.question__item')

burgerIcon.addEventListener('click', function () {
  burgerIcon.classList.toggle('active')
  burgerMenu.classList.toggle('active')
})

for (let i = 0; i < burgerLink.length; i++) {
  burgerLink[i].addEventListener('click', function () {
    burgerMenu.classList.remove('active')
    burgerIcon.classList.toggle('active')
  })
}

for (let i = 0; i < questionItem.length; i++) {
  questionItem[i].addEventListener('click', function () {
    for (let k = 0; k < questionItem.length; k++) {
      if (questionItem[k] == questionItem[i]) continue
      faqTextBlock[k].classList.remove('active')
      arrowPic[k].classList.remove('active')
      number[k].classList.remove('active')
      spanText[k].classList.remove('active')
    }
    faqTextBlock[i].classList.toggle('active')
    arrowPic[i].classList.toggle('active')
    number[i].classList.toggle('active')
    spanText[i].classList.toggle('active')
  })
}
