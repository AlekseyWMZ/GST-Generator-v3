import {generateGst} from './gst/gst-generator.js'
import {stateNumbers} from './gst/helpers'

const customPanCheckbox = document.querySelector('.custom-pan #pan-checkbox')
const customPanInput = document.querySelector('.custom-pan #pan-input')
const stateCheckbox = document.querySelector('.state #state-checkbox')
const stateSelect = document.querySelector('.state #state-select')

const generateButton = document.getElementById('generate-button')


const gstHistory = document.getElementById('gst-history')
const copyButton = document.querySelectorAll('button .copy-pin')
const gst = document.getElementById('gst-number')

console.log(customPanInput)

function toggleCustomPanInput() {
  if (customPanInput.hidden) {
    customPanInput.removeAttribute('hidden')
  } else {
    customPanInput.setAttribute('hidden', true)
  }
}

function toggleStateSelect() {
  if (stateSelect.hidden) {
    stateSelect.removeAttribute('hidden')
  } else {
    stateSelect.setAttribute('hidden', true)
  }
}

function copyGst() {
  console.log('copy')

  console.log(gst)
  gst.select()
  gst.copy()
}


customPanCheckbox.addEventListener('click', toggleCustomPanInput)
stateCheckbox.addEventListener('click', toggleStateSelect)


copyButton.forEach(button => {
  button.addEventListener('click', copyGst)
})


generateButton.onclick = function() {
  console.log(customPanInput.value)
  const { gst, pin, state } = generateGst(customPanInput.value, stateSelect.value)


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


  let i;
  for (i = 0; i < gstHistory.length; i++) {
    gstHistory[i].onclick = function() {
      this.parentNode.copy()
    }
  }




  // newGstInput.value = generateGst();
}

export { toggleCustomPanInput }
