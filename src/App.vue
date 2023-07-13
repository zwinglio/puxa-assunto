<template>
  <div class="min-w-full min-h-screen bg-slate-300">
    <div class="flex flex-col min-h-screen justify-between bg-red-50">
      <div class="flex flex-row justify-center py-4">
        <div class="flex-flex-col justify-center align-middle text-center">
          <h1 class="text-3xl font-bold">Puxa Assunto</h1>
          <p>Aplicativo para puxar conversa quanto faltar assunto...</p>
        </div>
      </div>
      <div class="flex justify-center align-middle">
        <div class="p-4 border border-1 border-slate-500 bg-white rounded-lg">
          <h2 class="text-4xl font-bold">{{ frase }}</h2>
        </div>
      </div>
      <div class="flex justify-center py-4">
        <button
          @click="changeFrase()"
          class="bg-blue-700 hover:bg-blue-500 rounded-lg text-white font-bold py-4 px-10 mb-10 text-2xl"
        >
          Puxar assunto
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let frase = ref("Clique no botão para puxar um assunto!");

var list = [
  "Qual é o seu filme favorito?",
  "Qual é o seu livro favorito?",
  "Qual é sua música favorita?",
  "Qual é sua comida favorita?",
  "Qual é sua cor favorita?",
  "Qual é seu animal favorito?",
  "Qual é seu lugar favorito para visitar?",
  "Qual é sua atividade favorita?",
  "Qual é sua memória favorita?",
  "Qual é seu sonho?",
  "Qual é sua maior esperança?",
  "Qual é seu maior medo?",
  "Qual é sua maior força?",
  "Qual é sua maior fraqueza?",
  "Qual é seu maior arrependimento?",
  "Qual é a coisa mais importante para você na vida?",
  "Qual é sua maior conquista?",
  "Qual é sua maior inspiração?",
  "Qual é sua maior lição de vida?",
  "Qual é a coisa mais importante que você quer que as pessoas saibam sobre você?",
];

var psiList = [
  "Qual é a coisa mais importante que você quer que as pessoas saibam sobre você?",
];

function changeFrase() {
  frase.value = list[Math.floor(Math.random() * list.length)];
}
</script>

<style>
/* body {
  background-color: #025464;
  color: #f8f1f1;
} */
</style>
