function myFunction(abc) {
  let dots = document.querySelector(`.description[desc="${abc}"] .dots`);
  let moreText = document.querySelector(`.description[desc="${abc}"] .more`);
  let btnText = document.querySelector(`.description[desc="${abc}"] .myBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.textContent = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.textContent = "read less"; 
    moreText.style.display = "inline";
  }
}