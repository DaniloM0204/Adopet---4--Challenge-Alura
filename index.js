const cadastroPessoa = document.querySelector('.form-control');
const inputName = cadastroPessoa.querySelector('#nome');
const inputEmail = cadastroPessoa.querySelector('#email');
const inputPassword = cadastroPessoa.querySelector('#senha');
const submitForm = document.querySelector('.btn-cadastro');

const pessoas = JSON.parse(localStorage.getItem('pessoas')) || []

const handleSubmitForm = (event) => {
  event.preventDefault()
  console.log({ name: inputName.value, email: inputEmail.value})
  if (!inputName.validity.valid) {
    alert('Nome invalido');
  }
  if (!inputEmail.validity.valid) {
    alert('Email invalido');
  }
  if (!inputPassword.validity.valid) {
    alert('Senha invalido');
  } else inputName.validity.valid && inputEmail.validity.valid
  {
    pessoas.push({ nome: inputName.value, email: inputEmail.value })
    localStorage.setItem('pessoas', JSON.stringify(pessoas));

    cadastroPessoa.reset();
  }
}

cadastroPessoa.addEventListener('submit', handleSubmitForm);
