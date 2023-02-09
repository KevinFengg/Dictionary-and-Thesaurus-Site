function enter(dictWord) {
  if (event.key === 'Enter') {
    const options = {
      method: 'GET',
    };

    const dictURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'.concat(
      dictWord.value
    );

    //Using fetch to get data from API.
    fetch(dictURL, options)
      .then((response) => response.json())
      .then(
        (response) =>
          (document.getElementById('dict-output').innerHTML =
            organizeData(response))
      )
      .catch((err) => console.error(err));
  }
}

//This function organizes data recieved by the API and organizes it to be outputted onto the screen
function organizeData(dataArray) {
  let returnStr = 'Definitions:';
  let defCounter = 0;

  for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray[i].meanings.length; j++) {
      for (let k = 0; k < dataArray[i].meanings[j].definitions.length; k++) {
        defCounter++;
        returnStr =
          returnStr.concat('<br>').concat(defCounter) +
          ': '.concat(dataArray[i].meanings[j].definitions[k].definition);
        break;
      }
    }
  }
  if (returnStr === '') return 'Error. Word not found.';
  return returnStr;
}