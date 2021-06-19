// << ======== Verificador de Login Padrão ======== >>
function verifyLogin() {
  const loginValue = document.querySelector('#login');
  const senhaValue = document.querySelector('#senha');

  if ((loginValue.value === 'tryber@teste.com') && (senhaValue.value === '123456')) {
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
