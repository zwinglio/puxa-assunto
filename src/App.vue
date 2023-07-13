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
import questions from "./data/questions.json";

let frase = ref("Clique no botão para puxar um assunto!");

const list = questions.categories[0].questions;

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
