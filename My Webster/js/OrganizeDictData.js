export default function organizeData(dataArray) {
  let returnStr = '';
  let defCounter = 0;

  for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray[i].meanings.length; j++) {
      for (let k = 0; k < dataArray[i].meanings[j].definitions.length; k++) {
        defCounter++;
        returnStr =
          returnStr.concat('<br>').concat(defCounter) +
          ': '.concat(dataArray[i].meanings[j].definitions[k].definition);
        //returnArray.push(dataArray[i].meanings[j].definitions[k].definition);
        break;
        //console.log(dataArray[i].meanings[j].definitions[k].definition);
      }
    }
  }
  if (returnStr === '') return 'Error. Word not found.';
  return returnStr;
}
