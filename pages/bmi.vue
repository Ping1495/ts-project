<template>
  <div>
    <h1
      class="text-3xl font-bold underline flex flex-col items-center mt-10 mb-10"
    >
      BMI Calculator
    </h1>

    <!-- input -->

    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-row items-center gap-4">
        <input class="border py-1 px-2" type="text" placeholder="weight (kg)" />
      </div>

      <div class="flex flex-row items-center gap-4">
        <input class="border py-1 px-2" type="text" placeholder="height (cm)" />
      </div>
      <button class="border py-1 px-2 rounded-lg">Calculate</button>

      <!-- ผลลัพธ์ -->
      <!-- คำอธิบาย -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const weight: Ref<Number> = ref(0);

// const mmm: Re

const height = ref(0);
const Bmi = ref(0);
const messages = ref("");

weight.val;

const calBmi = () => {};
</script>

<style></style>
