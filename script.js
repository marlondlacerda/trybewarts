// << ======== Verificador de Login Padrão ======== >>
function verifyLogin() {
  const loginValue = document.querySelector('#login');
  const senhaValue = document.querySelector('#senha');

  if (loginValue.value === 'tryber@teste.com' && senhaValue.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
const loginVerify = document.querySelector('#buttonLogin');
loginVerify.addEventListener('click', verifyLogin);

function verifyCheckBox() {
  const checkBox = document.querySelector('#agreement');
  const sendBtn = document.querySelector('#submit-btn');
  if (checkBox.checked === true) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

// << ======== Ativar e desativar o botão Enviar ======== >>
function sendInformations() {
  const checkBox = document.querySelector('#agreement');
  checkBox.addEventListener('click', verifyCheckBox);
}
sendInformations();

// << ======== Contador ======== >>
// Source: https://stackoverflow.com/questions/14086398/count-textarea-characters/40395706#40395706
function contador1() {
  const textArea = document.getElementById('textarea');
  const tamanhoMax = textArea.getAttribute('maxlength');
  const counter = document.getElementById('counter');
  counter.innerHTML = tamanhoMax;

  textArea.addEventListener('keyup', function contador() {
    document.getElementById('counter').innerHTML = (tamanhoMax - this.value.length);
  });
}
contador1();

const botao = document.querySelector('#submit-btn');
const principal = document.querySelector('main');
const form = document.createElement('form');
form.id = 'evaluation-form';

function getTxtInformations() {
  botao.addEventListener('click', () => {
    const nome = document.getElementById('input-name').value;
    const sobrenome = document.getElementById('input-lastname').value;
    const email = document.querySelector('#input-email').value;
    const casa = document.querySelector('#house').value;
    const familia = document.querySelector('input[type=radio][name=family]:checked').value;
    const posicaoElementos = document.createElement('li');
    posicaoElementos.innerText = `Nome: ${nome} ${sobrenome}
    Email: ${email}
    Casa: ${casa}
    Família: ${familia}`;
    form.appendChild(posicaoElementos);
  });
}
getTxtInformations();

function checkBoxInformations() {
  botao.addEventListener('click', () => {
    const conteudo = document.querySelectorAll('input[type=checkbox][name=mycheckboxes]:checked');
    const conteudo2 = [];
    for (let index = 0; index < conteudo.length; index += 1) {
      conteudo2.push(conteudo[index].value);
    }
    const nota = document.querySelector('input[type=radio][name=rate]:checked').value;
    const textArea = document.querySelector('#textarea').value;
    const posicaoElementos = document.createElement('li');
    posicaoElementos.innerText = `Matérias: ${conteudo2.join(', ')}
    Avaliação: ${nota}
    Observações: ${textArea}`;
    principal.textContent = ' ';
    principal.appendChild(form);
    form.appendChild(posicaoElementos);
  });
}
checkBoxInformations();
