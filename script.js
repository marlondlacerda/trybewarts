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
