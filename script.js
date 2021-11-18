const loginVerify = document.querySelector('#buttonLogin');
const loginValue = document.querySelector('#login');
const passwordValue = document.querySelector('#senha');
const checkBox = document.querySelector('#agreement');
const sendBtn = document.querySelector('#submit-btn');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const maximumSize = textArea.getAttribute('maxlength');
const formUser = document.querySelector('#evaluation-form');
const inputs = document.querySelectorAll('input');
const house = document.querySelector('#house');
const textarea = document.querySelector('#textarea');

// << ======== Verificador de Login Padrão ======== >>
const verifyLogin = (event) => {
  event.preventDefault();
  if (loginValue.value === 'tryber@teste.com' && passwordValue.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
};

// Source: https://stackoverflow.com/questions/14086398/count-textarea-characters/40395706#40395706
const counterFunction = ({ value }) => {
  counter.innerHTML = (maximumSize - value.length);
};

const checkNameFromInputs = (inputsReceived, type) => {
  let inputsChecked = [];
  for (let index = 0; index < inputsReceived.length; index += 1) {
    if (inputsReceived[index].name === type && inputsReceived[index].checked) {
      inputsChecked.push(inputsReceived[index].value);
    }
  }
  inputsChecked = inputsChecked.join(', ');
  return inputsChecked;
};

const generateForm = (user) => {
  const { name, lastname, email, family, materias, rate } = user;
  formUser.innerHTML = '';
  formUser.className = 'newformContainer';
  formUser.innerHTML += (`<span class='newForm'>Nome: ${name.value} ${lastname.value}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Email: ${email.value}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Casa: ${house.value}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Família: ${family}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Matérias: ${materias}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Avaliação: ${rate}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Observações: ${textarea.value}</span>`);
};

const getInformation = (event) => {
  event.preventDefault();
  const user = {
    name: document.querySelector('#input-name'),
    lastname: document.querySelector('#input-lastname'),
    email: document.querySelector('#input-email'),
    family: checkNameFromInputs(inputs, 'family'),
    materias: checkNameFromInputs(inputs, 'content'),
    rate: checkNameFromInputs(inputs, 'rate'),
  };
  generateForm(user);
};

checkBox.addEventListener('click', () => {
  sendBtn.disabled = !sendBtn.disabled;
});

formUser.addEventListener('submit', getInformation);

loginVerify.addEventListener('click', verifyLogin);
textArea.addEventListener('keyup', ({ target }) => counterFunction(target));
