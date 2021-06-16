function verifyLogin() {
  const loginValue = document.querySelector('#login');
  const senhaValue = document.querySelector('#senha');
  const loginPadrao = 'tryber@teste.com';
  const senhaPadrao = '123456';

  if (loginValue.value !== loginPadrao && senhaValue.value !== senhaPadrao) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
const loginVerify = document.querySelector('#buttonLogin');
loginVerify.addEventListener('click', verifyLogin);
