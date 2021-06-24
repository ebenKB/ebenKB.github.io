export const getTrimmedText = (text) => {
  if (text.length < 41){
    return text;
  }

  return `${text.substring(0, 40)}...`
}