<template>
  <div>
    <ContentRenderer :value="data"></ContentRenderer>
    <br />
    <div class="flex flex-col">
      <NuxtLink to="/todo-list">Go to To-do List</NuxtLink>
      <NuxtLink to="/bmi">Go to BMI Calculator</NuxtLink>
      <NuxtLink to="/weather">Go to Weather Now</NuxtLink>
      <NuxtLink to="/xo">Go to Play tic tac toe</NuxtLink>
      <NuxtLink to="/harryP">Go to Play Harry Potter Charecter</NuxtLink>
      <NuxtLink to="/article">📝 Go to Articles ✒️</NuxtLink>
    </div>
    <br />
  </div>
</template>

<script setup>
const { data } = await useAsyncData("home", () => queryContent("/").findOne());
</script>

<style></style>
