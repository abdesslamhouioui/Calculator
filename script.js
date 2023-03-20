const result = document.getElementById("result")
const numbers = document.querySelectorAll(".number")
const operation = document.querySelectorAll(".operation")
const Equal = document.querySelector(".equal")
const ClearAll = document.querySelector(".all-clear")
const backspace = document.querySelector(".backspace")
let n1 = ""
let n2 = ""
let res = null
let op = ""
let dot = false

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !dot) dot = true
    n2 += e.target.innerText;
    result.value = n2;
  })
});

operation.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    const operationName = e.target.innerText;
    if (n1 && n2 && op!=="") {calculate()
    } else {
      res = parseFloat(n2)
    }
    back(operationName)
    op = operationName
  })
})

function back(arg) {
  n1 += n2 + " " + arg + " "
  result.value = n1
  n2 = ""
}

function calculate() {
  if (op === "*") {res = parseFloat(res) * parseFloat(n2)
  } else if (op === "+") {
    res = parseFloat(res) + parseFloat(n2)
  } else if (op === "-") {
    res = parseFloat(res) - parseFloat(n2)
  } else if (op === "/") {
    res = parseFloat(res) / parseFloat(n2)
  } 
}

Equal.addEventListener("click", () => {
  if (!n2 || !n1) return;
  dot = false
  calculate()
  if(res==Infinity) alert("You can't divide by 0")
  back()
  n2 = res
  n1 = ""
  result.value = res
  
})

ClearAll.addEventListener("click", () => {
  n1 = ""
  n2 = ""
  result.value = ""
  res = ""
});

backspace.addEventListener("click", () => {
  result.value = result.value.slice(0, -1)
    n2 = result.value
});
window.addEventListener("keydown", (e) => {
  if (["0","1","2","3","4","5","6","7","8","9","."].includes(e.key)
  ) {clickButton(e.key)
  } else if (["+","-","/","*"].includes(e.key)) {
    clickOperation(e.key)
  } else if (e.key === "=") {
    clickEqual()}})

function clickButton(key) {
  numbers.forEach((button) => {
    if (button.innerText === key) {
      button.click()}
  })
}

function clickOperation(key) {
  operation.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click()}
  })
}

function clickEqual() {
  Equal.click()
}