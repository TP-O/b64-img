// Image's types
const types = [
  "png",
  "jpeg",
]

/**
 * Get attribute `src` of tag `img`.
 * 
 * @param {string} b64Code base64 code.
 */
const handleInput = (b64Code) => {
  for (let i = 0; i < types.length; i++) {
    if (!b64Code.startsWith(`data:image/${types[i]};base64,`)) {
      continue;
    }

    return b64Code;
  }

  return `data:image/${types[0]};base64, ${b64Code}`;
}
