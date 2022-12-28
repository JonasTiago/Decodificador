const noanswer = document.querySelector(".noanswer");
const answer = document.querySelector(".answer");
const text = document.querySelector("#cript");
const bntCopy = document.querySelector(".copy");

function encrypt() {
  if (text.value.length > 0) {
    const textEncrypt = text.value
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    noanswer.classList.add("disappear");

    answer.classList.remove("disappear");

    bntCopy.classList.remove("disappear");

    answer.textContent = textEncrypt;
  }
}

function decrypt() {
    if (text.value.length > 0) {
      const textEncrypt = text.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
  
      noanswer.classList.add("disappear");
  
      answer.classList.remove("disappear");
  
      bntCopy.classList.remove("disappear");
  
      answer.textContent = textEncrypt;
    }
  }