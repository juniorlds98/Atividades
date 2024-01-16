
var titulo = document.querySelector('#titulo');
const segundoTitulo = document.querySelector('a');
const terceiroTitulo = document.querySelector('h1');
var listaordenada = document.querySelector('#listaordenarda')

titulo.innerText = 'Bem vindo ao mundo Tech';
segundoTitulo.innerText = 'Saiba três passos para entrar nesse mundo'
terceiroTitulo.innerHTML = '<ul><li> Estude muito</li><li> Faça faculdade</li><li> Faça projetos </li></ul>'

if (listaordenada){
listaordenada.innerHTML = 'www.instagram.com.br, www.facebook.com.br, www.twitter.com.br'
}
