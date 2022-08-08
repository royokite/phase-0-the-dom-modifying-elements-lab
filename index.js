// DOM modifying elements lab!
const mainDeleter = document.getElementById('main');
mainDeleter.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

newHeader.innerHTML = '<p>Rokyt, Apex Legend, is the champion</p>';
