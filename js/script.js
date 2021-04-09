const requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();



    const init = () => {
    let flag = 1
    const modal = document.querySelector('.modal')
    const modalIcon = document.querySelector('.fa-comments')
    const rates = request.response;

    rates.forEach(element => {
        const newItem = document.createElement('tr');
        const values = Object.values(element);
        values.forEach(value => { newItem.innerHTML +=`<td>${value}</td>`});
        document.querySelector('.rate__table').appendChild(newItem);
    });


    const modalView = () => {
        
        if(flag % 2 == 0){
          flag++
          return
        }
        modalIcon.style.display = 'none';
        modal.style.height = '60vh';
        modal.style.width = '70vw'
        modal.style.borderRadius = '15px'
        
        const write = document.createElement('p');
        const input = document.createElement('input');
        const send = document.createElement('buttom');
        const back = document.createElement('div');

        write.innerText = 'Write Us'
        input.type = 'text';
        send.innerText = 'Send'
        
        back.classList.add('modal__back')
        write.classList.add('modal__write')
        input.classList.add('modal__input')
        send.classList.add('modal__send')
        
        modal.appendChild(back);
        modal.appendChild(write);
        modal.appendChild(input);
        modal.appendChild(send);

        back.insertAdjacentHTML('afterbegin', '<i class="fas fa-times"></i>');

        

        const modalBack = () => {
          console.log(modal)
          modalIcon.style.display = 'block';
          modal.style.height = '70px';
          modal.style.width = '70px'
          modal.style.borderRadius = '50%'
          modal.removeChild(write);
          modal.removeChild(back);
          modal.removeChild(input);
          modal.removeChild(send);

          flag++
          modal.addEventListener('click', modalView, false)

        }

        modal.removeEventListener('click', modalView , false)

        back.addEventListener('click',modalBack, false)
    }

    modal.addEventListener('click',modalView, false)

}

window.addEventListener('load' , init)
