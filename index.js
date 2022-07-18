const cadastroPessoa = document.querySelector(".form-control");
const submitForm = document.querySelector('.btn-login');
const inputSenha = cadastroPessoa.querySelector('.senha'); 
const inputEmail = cadastroPessoa.querySelector('.email');

const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];

const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log({ name: inputSenha.value, email: inputEmail.value});
    if (!inputSenha.validity.valid) {
        alert('Senha invalida');
    } if (!inputEmail.validity.valid) {
        alert('Email invalido');
    } else (inputSenha.validity.valid && inputEmail.validity.valid);{
        pessoas.push({nome: inputSenha.value, email: inputEmail.value});
        localStorage.setItem('pessoas', JSON.stringify(pessoas));
        
        cadastroPessoa.reset();
    }
}