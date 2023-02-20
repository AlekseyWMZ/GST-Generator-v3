import { generateGst } from "./gst/gst-generator.js";
import { customPanCheckbox, customPanInput, generateButton, gstHistory, stateCheckbox, stateSelect } from "./queried-elements.js";


customPanCheckbox.addEventListener("click", togglePanInput);
stateCheckbox.addEventListener("click", toggleStateSelect);


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

  if (customPanInput.length===10) {
    customPanInput.addEventListener("input", function() {
      return /^\w{5}\d{4}\w$/.test(customPanInput.value) ? customPanInput.classList.remove("invalid")
                                                         : customPanInput.setAttribute("invalid", "true");
    });
  }
  if (customPanInput.length===0) {
    customPanInput.addEventListener("input", function() {
      return customPanInput.setAttribute("invalid", "true");
    });
  }
}

generateButton.onclick = function() {
  let panInputValue;
  let stateSelectValue;

  let tbody = document.querySelector("tbody tr");


  customPanCheckbox.checked===false ? panInputValue = "" : panInputValue = customPanInput.value;
  stateCheckbox.checked===false ? stateSelectValue = "00" : stateSelectValue = stateSelect.value;

  const { gst, pin, state } = generateGst(panInputValue, stateSelectValue);

  gstHistory.setAttribute("style", "display: block");
  // history.innerHTML += `
  //           <div class="gst">
  //               <span id="gst-number">
  //                   GST: ${gst || "No GST generated"}
  //                   PIN: ${pin || "No PIN generated"}
  //                   State: ${state || "No State selected"}
  //               </span>
  //               <button class="copy-pin">
  //                   <i class="far fa-copy"></i>
  //               </button>
  //           </div>
  //       `;


  tbody.outerHTML += `<tr>
  <td>
    <button 
      href="#" id="gst-value" onclick="copyToClipboard('gst-value')">${gst}
    </button>
  </td>
  <td>
    <button 
      href="#" id="pin-value" onclick="copyToClipboard('pin-value')">${pin}
    </button>
  </td>
    <td>
    <button 
      href="#" id="state-value" onclick="copyToClipboard('state-value')">${state}
    </button>
  </td>
</tr>`;

  let gstValue = document.querySelector("tbody tr td");
  // const copyContent = async () => {
  //   try {
  //     await navigator.clipboard.writeText(gstValue.textContent);
  //     console.log("Content copied to clipboard");
  //   } catch (err) {
  //     console.error("Failed to copy: ", err);
  //   }
  // };

  gstValue.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", gstValue.textContent);
      console.log(event.clipboardData.getData("text"));
    }
  });
  // let i;
  // for (i = 0; i < gstHistory.length; i++) {
  //   gstHistory[i].onclick = function() {
  //     this.parentNode.copy();
  //   };
  // }

  // newGstInput.value = generateGst();
};

export { toggleStateSelect, validatePan };
