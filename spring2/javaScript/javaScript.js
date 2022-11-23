const myModal = document.getElementById('a')
const myInput = document.getElementById('myInput')

(myInput).on('show.bs.modal',myModal, function () {
    alert('hi');
  })
myInput.addEventListener('shown.bs.modal', function () {
    myModal.focus()
  })


