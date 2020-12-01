// Get HTML elements
var elModalOpenBtn = $_('.modal-open-btn')
var elModalWrapper = $_('.modal-wrapper')
var elModalContent = $_('.modal-content')
var elModalShadow = $_('.modal-shadow')


// Remove modal function
var removeModal = () => {
   elModalWrapper.classList.add('d-none')
}

// Add modal function
var addModal = () => {
   elModalWrapper.classList.remove('d-none')
}


// Remove modal when close btns clicked 
var onElModalWrapperClick = (evt) => {
   if (evt.target.matches('.modal-close-btn')) {
      removeModal()
   }
}

elModalWrapper.addEventListener('click', onElModalWrapperClick)


// Remove modal when shadow clicked
var onElModalShadowClick = () => {
   removeModal()

}

elModalShadow.addEventListener('click', onElModalShadowClick)


// Remove modal when Escape is pressed
var onKeyUpModalOpener = (evt) => {
   if (evt.code === 'Escape') {
      removeModal()
   }
}

// Add btn when elModalOpenBtn is clicked
elModalOpenBtn.addEventListener('click', () => {
   addModal()

   document.body.addEventListener('keyup', onKeyUpModalOpener)
})