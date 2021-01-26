function techList(techArray, name) {
  if (techArray.length === 0) {
    return "Vazio!";
  }
  techArray.sort();
  let answer = [];
  for (let key in techArray) {
    item = {
      tech: techArray[key],
      name: name
    }
    answer.push(item);
  }
  return answer;
}

module.exports = techList;