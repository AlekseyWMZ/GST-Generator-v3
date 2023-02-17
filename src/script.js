import { generateGst } from './gst/gst-generator.js'
import { generatePAN } from './gst/helpers.js'

// const customPan = document.querySelector('.custom-pan')
const customPanCheckbox = document.querySelector('.custom-pan #pan-checkbox')
const customPanInput = document.querySelector('.custom-pan #pan-input')

const stateCheckbox = document.querySelector('.state #state-checkbox')
const stateSelect = document.querySelector('.state #state-select')

const gstHistory = document.getElementById('gst-history')
const gst = document.getElementById('gst-number')

const generateButton = document.getElementById('generate-button')
const copyButton = document.querySelectorAll('button .copy-pin')

customPanCheckbox.addEventListener('click', togglePanInput)
stateCheckbox.addEventListener('click', toggleStateSelect)


function togglePanInput() {
  if (customPanCheckbox.checked===true) {
    customPanInput.removeAttribute('disabled')
    customPanInput.focus()

  } else {
    customPanInput.toggleAttribute('disabled')
  }

}
function toggleStateSelect() {
  if (stateCheckbox.checked===true) {
    stateSelect.removeAttribute('disabled')
    stateSelect.focus()
  }
  else {
    stateSelect.toggleAttribute('disabled')
    stateSelect.value = '00'
  }
}

function validatePan(customPanInput) {
  if (customPanInput.length===10) {
    customPanInput.addEventListener('input', function() {
      return /^\w{5}\d{4}\w$/.test(customPanInput.value) ? customPanInput.classList.remove('invalid')
                                                         : customPanInput.setAttribute('invalid', 'true')
    })
  }
}

function copyGst() {
  gst.select()
  gst.copy()
}




copyButton.forEach(button => {
  button.addEventListener('click', copyGst)
})


generateButton.onclick = function() {
  let panInputValue
  let stateSelectValue

  if (customPanCheckbox.checked===false) {
    panInputValue = ''
  }
  else {
    panInputValue = customPanInput.value
  }

  if (stateCheckbox.checked===false) {
    stateSelectValue = '00'
  }
  else {
    stateSelectValue = stateSelect.value
  }


  const {gst, pin, state} = generateGst(panInputValue, stateSelectValue)


  gstHistory.innerHTML += `
            <div class='gst'>
                <span id='gst-number'>
                    GST: ${gst || 'No GST generated'}
                    PIN: ${pin || 'No PIN generated'}
                    State: ${state || 'No State selected'}
                </span>
                <button class='copy-pin'>
                    <i class='far fa-copy'></i>
                </button>
            </div>
        `


  let i
  for (i = 0; i < gstHistory.length; i++) {
    gstHistory[i].onclick = function() {
      this.parentNode.copy()
    }
  }


  // newGstInput.value = generateGst();
}

export { toggleStateSelect, validatePan, copyGst}
