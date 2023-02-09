function enter(thesWord) {
  if (event.key === 'Enter') {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4be0cf139amshea465dec77a2a09p165b7ejsn3a1f22cbe725',
        'X-RapidAPI-Host': 'thesaurus-by-api-ninjas.p.rapidapi.com',
      },
    };

    const thesURL =
      'https://thesaurus-by-api-ninjas.p.rapidapi.com/v1/thesaurus?word='.concat(
        thesWord.value
      );

    //Using fetch to get data from API. 
    fetch(thesURL, options)
      .then((response) => response.json())
      .then(
        (response) =>
          (document.getElementById('thes-output').innerHTML =
            organizeData(response))
      )
      .catch((err) => console.error(err));
  }
}

//This function organizes data recieved by the API and organizes it to be outputted onto the screen
function organizeData(dataArray) {
  let returnSyn = 'Synonyms:',
    returnAnt = 'Antonyms:',
    returnStr = '';
  let synCounter = 0,
    antCounter = 0;

  for (let i = 0; i < dataArray['synonyms'].length; i++) {
    returnSyn = returnSyn.concat(
      '<br>'.concat(++synCounter) + ': '.concat(dataArray['synonyms'][i])
    );
  }
  if (returnSyn === 'Synonyms:')
    returnSyn = returnSyn.concat('<br> Synonyms not found for that word.');

  for (let i = 0; i < dataArray['antonyms'].length; i++) {
    returnAnt = returnAnt.concat(
      '<br>'.concat(++antCounter) + ': '.concat(dataArray['antonyms'][i])
    );
  }
  if (returnAnt === 'Antonyms:')
    returnAnt = returnAnt.concat('<br> Antonyms not found for that word.');

  returnStr = returnStr.concat(returnSyn.concat('<br><br>').concat(returnAnt));
  return returnStr;
}
