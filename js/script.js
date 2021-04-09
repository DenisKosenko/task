const requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

window.onload = function() {
    const rates = request.response;
    console.log(rates)

    rates.forEach(element => {
      const newItem = document.createElement('tr');

      const values = Object.values(element);

      values.forEach(value => { newItem.innerHTML +=`<td>${value}</td>`});
      //newItem.innerHTML = `<td>${e.ccy}</td> <td>${e.base_ccy}</td> <td>${e.buy}</td> <td>${e.sale}</td>`;
      document.querySelector('.rate__table').appendChild(newItem);

    });
}

