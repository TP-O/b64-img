const b64CodeInput = document.getElementById("b64-code");
const convertedImage = document.getElementById("converted-img");

const displayImage = () => {
  const b64Code = b64CodeInput.value || '';
  const imgSrc = `data:image/png;base64, ${b64Code}`;

  convertedImage.setAttribute('src', imgSrc);
  setB64Code(b64Code);
}

const getB64Code = () => {
  return localStorage.getItem('b64Code');
}

const setB64Code = (b64) => {
  localStorage.setItem('b64Code', b64);
}

b64CodeInput.addEventListener('keypress', displayImage);

window.onload = () => {
  const b64Code = getB64Code();

  if (typeof b64Code === "string" && b64Code !== "" ) {
    b64CodeInput.value = b64Code;
    convertedImage.setAttribute('src', `data:image/png;base64, ${b64Code}`);
  }
}
