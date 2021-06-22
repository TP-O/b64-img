const b64CodeInput = document.getElementById("b64-code");
const convertedImage = document.getElementById("converted-img");

/**
 * Display image to screen.
 */
const displayImage = () => {
  const b64Code = b64CodeInput.value || "";

  changeImageSrc(b64Code);
};

/**
 * Change attribute `src` of tag `img`.
 * 
 * @param {string} b64Code base64 code.
 */
const changeImageSrc = (b64Code) => {
  const imgSrc = handleInput(b64Code);

  b64CodeInput.value = b64Code;
  convertedImage.setAttribute("src", imgSrc);
  setB64Code(b64Code);
};

/**
 * Get base64 code from local storage.
 */
const getB64Code = () => {
  return localStorage.getItem("b64Code");
};

/**
 * Save base64 code to local storage.
 * 
 * @param {string} b64Code base64 code. 
 */
const setB64Code = (b64Code) => {
  localStorage.setItem("b64Code", b64Code);
};

// Display image if the user press Enter
b64CodeInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    displayImage();

    return;
  }
});

// Display previous image when the page is loaded.
window.onload = () => {
  const b64Code = getB64Code();

  if (typeof b64Code === "string" && b64Code !== "") {
    changeImageSrc(b64Code);
  }
};
