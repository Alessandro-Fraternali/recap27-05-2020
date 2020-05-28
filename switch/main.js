$(document).ready(function() {

  var lingua = 'ds';

  switch (lingua) {
    // se lingua è it allora stampa questo
    case 'it':
      console.log('Italiano');
    break; //ferma lo switch

    // se lingua ha uno di questi valori stampa questo
    case 'en':
    case 'uk':
    console.log('English');
    break;

    //impostazione di default
    default:
      console.log('lingua non supportata');
    break;
  }

})
