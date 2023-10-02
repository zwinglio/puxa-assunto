<template>
  <div class="min-w-full min-h-screen">
    <div class="flex flex-col min-h-screen justify-between">
      <div class="flex flex-row justify-center p-4">
        <div class="flex-flex-col justify-center align-middle text-center">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mt-4">
            Puxa Assunto 🗣️
          </h1>
          <p class="text-gray-400 text-sm mt-3">
            Aplicativo para puxar conversa quanto faltar assunto...
          </p>
        </div>
      </div>

      <div class="flex justify-center align-middle px-5 py-10 xl:w-1/2 m-auto">
        <div
          class="p-10 border-8 border-cyan-500 bg-white rounded-lg text-center w-full"
        >
          <h2 class="text-3xl font-bold">{{ frase }}</h2>
          <p class="text-gray-400 text-xs mt-4">Versão 1.0.5 por: Zwinglio</p>
        </div>
      </div>

      <div class="flex justify-center py-4">
        <div class="flex flex-col w-2/3 xl:w-1/2">
          <button
            @click="changeFrase()"
            class="bg-amber-500 hover:bg-amber-400 rounded-lg text-orange-950 font-bold py-8 w-full mb-10 text-lg uppercase shadow-amber-500 shadow-[0px_0px_150px] hover:shadow-[0px_0px_100px] hover:shadow-yellow-500 transition-all"
          >
            Puxar assunto
          </button>
          <select
            v-model="selectedCategory"
            class="p-4 mt-10 border border-1 border-slate-500 bg-white rounded-lg text-lg transition-all"
            name="category"
            id=""
          >
            <option value="">Selecione uma categoria</option>
            <option
              v-for="(category, index) in categories"
              :value="index"
              :key="index"
            >
              {{ category.category_name }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useHead } from "@vueuse/head";
import questions from "./data/questions.json";

let frase = ref("Clique no botão para puxar um assunto! 👇");
const answeredQuestions = ref([]);
const selectedCategory = ref("");
const categories = questions.categories;
let unansweredQuestions = ref([]);

function changeFrase() {
  // Verificar se uma categoria foi selecionada
  if (selectedCategory.value === "") {
    frase.value = "Selecione uma categoria antes de puxar um assunto! 👇";
    return;
  }

  const categoryIndex = parseInt(selectedCategory.value);
  const categoryQuestions = categories[categoryIndex].questions;

  // Verificar se todas as perguntas da categoria foram respondidas
  if (unansweredQuestions.value.length === 0) {
    frase.value = "Todas as perguntas desta categoria foram respondidas!";
    return;
  }

  const randomIndex = Math.floor(
    Math.random() * unansweredQuestions.value.length
  );
  const selectedQuestion = unansweredQuestions.value[randomIndex];

  frase.value = selectedQuestion;
  answeredQuestions.value.push(selectedQuestion);
  unansweredQuestions.value.splice(randomIndex, 1);
}

function updateUnansweredQuestions() {
  if (selectedCategory.value === "") {
    unansweredQuestions.value = [];
    return;
  }

  const categoryIndex = parseInt(selectedCategory.value);
  const categoryQuestions = categories[categoryIndex].questions;

  unansweredQuestions.value = categoryQuestions.filter(
    (question) => !answeredQuestions.value.includes(question)
  );
}

onMounted(() => {
  useHead({
    title: "Puxa Assunto",
  });
});

watch(selectedCategory, updateUnansweredQuestions);
</script>

<style>
body {
  background-color: #010503;
}
</style>
