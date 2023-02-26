import {
  copyButton,
  customPanCheckbox,
  customPanInput,
  generateButton,
  gst,
  gstHistory,
  stateCheckbox,
  stateSelect
} from "./queried-elements.js";
import { generateGst } from "./gst/gst-generator.js";


customPanCheckbox.addEventListener("click", togglePanInput);
stateCheckbox.addEventListener("click", toggleStateSelect);


gst===false ? gstHistory.setAttribute("style", "display: none") : gstHistory.removeAttribute("style");

function togglePanInput() {
  if (customPanCheckbox.checked===true) {
    customPanInput.removeAttribute("disabled");
    customPanInput.focus();

  }
  else {
    customPanInput.toggleAttribute("disabled");
  }

}

function toggleStateSelect() {
  if (stateCheckbox.checked===true) {
    stateSelect.removeAttribute("disabled");
    stateSelect.focus();
  }
  else {
    stateSelect.toggleAttribute("disabled");
    stateSelect.value = "00";
  }
}


function validatePan(customPanInput) {

  if (customPanInput.length === 10) {
    customPanInput.addEventListener("input", function() {
      return /^\w{5}\d{4}\w$/.test(customPanInput.value) ? customPanInput.classList.remove("invalid")
                                                         : customPanInput.setAttribute("invalid", "true");
    });
  }
  if (customPanInput.length === 0) {
    customPanInput.addEventListener("input", function() {
      return customPanInput.setAttribute("invalid", "true");
    });
  }
}

function copyGst() {
  gst.select();
  gst.copy();
}


copyButton.forEach(button => {
  button.addEventListener("click", copyGst);
});


generateButton.onclick = function() {
  let panInputValue;
  let stateSelectValue;

  customPanCheckbox.checked===false ? panInputValue = "" : panInputValue = customPanInput.value;
  stateCheckbox.checked===false ? stateSelectValue = "00" : stateSelectValue = stateSelect.value;

  const { gst, pin, state } = generateGst(panInputValue, stateSelectValue);

  gstHistory.innerHTML += `
            <div class="gst">
                <span id="gst-number">
                    GST: ${gst || "No GST generated"}
                    PIN: ${pin || "No PIN generated"}
                    State: ${state || "No State selected"}
                </span>
                <button class="copy-pin">
                    <i class="far fa-copy"></i>
                </button>
            </div>
        `;


  let i;
  for (i = 0; i < gstHistory.length; i++) {
    gstHistory[i].onclick = function() {
      this.parentNode.copy();
    };
  }


  // newGstInput.value = generateGst();
};

export { toggleStateSelect, validatePan, copyGst };
