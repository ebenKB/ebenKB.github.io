export const getTrimmedText = (text) => {
  if (text.length < 41){
    return text;
  }

  return `${text.substring(0, 40)}...`
}

export const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
}
