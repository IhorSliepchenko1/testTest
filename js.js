const id = document.getElementById('id')
const btn = document.getElementById('btn')
const h1 = document.getElementById('h1')
const nameUser = document.getElementById('nameUser')
const surnameUser = document.getElementById('surnameUser')
const inputName = document.getElementById('inputName')
const inputSurname = document.getElementById('inputSurname')

btn.addEventListener('click', () => {
     id.innerHTML = ` <div class="back">
        <div class="modal">
          <span class="close" id="close">×</span>
          <div class="content">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label for="surname">Surname:</label>
            <input type="text" name="surname" id="surname" />
          </div>
          <button id="sendBtn">Send</button>
        </div>
      </div>`
     const close = document.getElementById('close')
     const sendBtn = document.getElementById('sendBtn')

     close.addEventListener('click', () => id.innerHTML = '')
     sendBtn.addEventListener('click', () => {
          const name = document.getElementById('name').value;
          const surname = document.getElementById('surname').value;
          inputName.value = name
          inputSurname.value = surname
          nameUser.innerText = name
          surnameUser.innerText = surname

          id.innerHTML = ''

          localStorage.setItem('name', nameUser.textContent)
          localStorage.setItem('surname', surnameUser.textContent)

     })


})



nameUser.innerText = localStorage.getItem('name')
surnameUser.innerText = localStorage.getItem('surname')

inputName.addEventListener('input', () => {
     nameUser.innerText = inputName.value
     localStorage.setItem('name', inputName.value)
})


inputSurname.addEventListener('input', () => {
     surnameUser.innerText = inputSurname.value
     localStorage.setItem('surname', inputSurname.value)
})
