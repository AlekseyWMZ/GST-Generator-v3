// const customPan = document.querySelector('.custom-pan')
const customPanCheckbox = document.querySelector(".custom-pan #pan-checkbox");
const customPanInput = document.querySelector(".custom-pan #pan-input");
const stateCheckbox = document.querySelector(".state #state-checkbox");
const stateSelect = document.querySelector(".state #state-select");
const gstHistory = document.querySelector("#generated-gst-history");
const gst = document.getElementById("gst-number");
const generateButton = document.getElementById("generate-button");
const copyButton = document.querySelectorAll("button .copy-pin");

const gstCell = document.querySelectorAll("table [rowspan='gst']");


export {
  customPanCheckbox,
  customPanInput,
  stateCheckbox,
  stateSelect,
  gstHistory,
  gst,
  generateButton,
  copyButton,
  gstCell
};
