
const modal = document.querySelector('.modal');
const showModal = document.querySelector('.showModal');
const modalBtnClose = document.querySelector('.modal__btn-close');


showModal.addEventListener('click', function () {
  modal.classList.add('isModal')
  document.body.setAttribute('style', 'height: 100vh; padding-right: 15px; overflow-y: hidden;');
})

modal.addEventListener('click', function (e) {
 
  if (e.target.classList.contains('modal')) {
    this.classList.remove('isModal');
    document.body.setAttribute('style', 'height: auto; padding-right: 0px; overflow-y: none;');
  }
});

modalBtnClose.addEventListener('click', function () {
  modal.classList.remove('isModal');
  document.body.setAttribute('style', 'height: auto; padding-right: 0px; overflow-y: none;');
})