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
        <div class="flex flex-col">
          <button
            @click="changeFrase()"
            class="bg-blue-700 hover:bg-blue-500 rounded-lg text-white font-bold py-4 px-10 mb-10 text-2xl"
          >
            Puxar assunto
          </button>
          <select
            v-model="selectedCategory"
            class="p-4 border border-1 border-slate-500 bg-white rounded-lg"
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

let frase = ref("Clique no botão para puxar um assunto!");
const answeredQuestions = ref([]);
const selectedCategory = ref("");
const categories = questions.categories;
let unansweredQuestions = ref([]);

function changeFrase() {
  // Verificar se uma categoria foi selecionada
  if (selectedCategory.value === "") {
    frase.value = "Selecione uma categoria antes de puxar um assunto!";
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

<style></style>
