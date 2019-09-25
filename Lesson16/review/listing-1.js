function averageWordLengthInSentence(sentence) {
  if (typeof sentence != "string")
    return;
  let words = sentence.split(" "); // match(/\S+/g) || [];
  let count = [];
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    if (!words[i].length || words[i].length == 0)
      continue;
    count.push(words[i].length);
    sum += words[i].length;
  }
  return Math.round(sum / words.length);
}

console.log(averageWordLengthInSentence("The big brown fox jumped over the lazy cat"));