// Create elements
const myModal = document.createElement('div')
const modalOpenBtn = document.createElement('button')
const modalCloseBtn = document.createElement('button')
const modalOverlay = document.createElement('div')

//Open Modal Button
modalOpenBtn.innerHTML = 'Open modal'
modalOpenBtn.style.padding = '15px 10px'
modalOpenBtn.style.margin = '10px'
modalOpenBtn.style.display = 'block'
modalOpenBtn.style.cursor = 'pointer'

//Close Modal Button
modalCloseBtn.innerHTML = 'X'
modalCloseBtn.style.cursor = 'pointer'

document.body.append(modalOverlay)
modalOverlay.classList.add('overlay')

document.body.append(modalOpenBtn, myModal)
myModal.classList.add('modal', 'center')
myModal.innerHTML = '<h1>Salam</h1>'
myModal.append(modalCloseBtn)

modalOpenBtn.onclick = () => {
  myModal.classList.add('show')
  modalOverlay.classList.add('show')
}
modalCloseBtn.onclick = () => {
  myModal.classList.remove('show')
  modalOverlay.classList.remove('show')
}
