export const getTrimmedText = (text, size=40) => {
  if (text.length < size){
    return text;
  }

  return `${text.substring(0, size)}...`
}

export const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
}
