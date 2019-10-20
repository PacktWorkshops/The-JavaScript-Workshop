function reverse(str) {
  str = String(str).trim();
  var result = "", index = str.length - 1, chr, isStart = true;
  while (index >= 0) {
    chr = str[index];
    if (isStart && chr != " ") {
      chr = chr.toUpperCase();
      isStart = false;
    } else {
      chr = chr.toLowerCase();
    }
    if (chr == ".") {
      isStart = true;
      if (index == str.length - 1) {
        index--;
        continue;
      } else {
        result = result.substr(0, result.length-1) + ". ";
        index--;
        continue;
      }
    }
    result = result + chr;
     index--;
  }
  return result + ".";
}
reverse("This is the first sentence. This is the second.");
// =>  "Dnoces eht si siht. Ecnetnes tsrif eht si siht.”