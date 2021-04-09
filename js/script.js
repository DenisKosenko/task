const requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

const init = () => {
    const modal = document.querySelector('.modal'),
          modalIcon = document.querySelector('.fa-comments'),
          rates = request.response;
    let flag = 1;

    rates.forEach(element => {
        const newItem = document.createElement('tr'),
              values = Object.values(element);
        values.forEach(value => { newItem.innerHTML += `<td>${value}</td>` });
        document.querySelector('.rate__table').appendChild(newItem);
    });


    const modalView = () => {
        
        if(flag % 2 == 0){ flag++; return}
        
        modalIcon.style.display = 'none';
        modal.style.height = '60vh';
        modal.style.width = '70vw';
        modal.style.borderRadius = '15px';
        
        const write = document.createElement('p'),
              input = document.createElement('input'),
              send = document.createElement('buttom'),
              back = document.createElement('div');

        write.innerText = 'Write Us';
        input.type = 'text';
        send.innerText = 'Send';
        
        back.classList.add('modal__back');
        write.classList.add('modal__write');
        input.classList.add('modal__input');
        send.classList.add('modal__send');
        
        modal.appendChild(back);
        modal.appendChild(write);
        modal.appendChild(input);
        modal.appendChild(send);

        back.insertAdjacentHTML('afterbegin', '<i class="fas fa-times"></i>');

        const modalBack = () => {
            modalIcon.style.display = 'block';
            modal.style.height = '70px';
            modal.style.width = '70px';
            modal.style.borderRadius = '50%';
            modal.removeChild(write);
            modal.removeChild(back);
            modal.removeChild(input);
            modal.removeChild(send);

            modal.addEventListener('click', modalView, false);
            flag++;
        }

        const sendInput = () => {
            input.value = '';
            modalBack();
        }

        send.addEventListener('click', sendInput , false);
        modal.removeEventListener('click', modalView , false);
        back.addEventListener('click', modalBack, false);
    }
    modal.addEventListener('click', modalView, false);
}

window.addEventListener('load', init);
