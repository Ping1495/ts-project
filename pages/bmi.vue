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
        <input
          v-model="height"
          class="border py-1 px-2"
          type="text"
          placeholder="height (cm)"
        />
      </div>
      <div class="flex flex-row items-center gap-4">
        <input
          v-model="weight"
          class="border py-1 px-2"
          type="text"
          placeholder="weight (kg)"
        />
      </div>

      <button class="border py-1 px-2 rounded-lg" @click="calBmi">
        Calculate
      </button>

      <!-- ผลลัพธ์ -->
      <span v-if="bmi">your BMI is {{ bmi }}</span>
      <!-- คำอธิบาย -->
      {{ messages }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const weight = ref<number | null>(null);
const height = ref<number | null>(null);
const bmi = ref<number | null>(null);
const messages = ref<string>("");

const calBmi = (): void => {
  if (!height.value) {
    return;
  }

  if (!weight.value) {
    return;
  }

  if (height.value && height.value > 0 && weight.value && weight.value > 0) {
    const heightMeter: number = height.value / 100;
    bmi.value = parseFloat((weight.value / heightMeter ** 2).toFixed(2));
  }

  if (!bmi) {
    return;
  } else if (bmi.value && bmi.value < 18.5) {
    messages.value = "Underweight / Thin";
  } else if (bmi.value && bmi.value >= 18.5 && bmi.value <= 22.9) {
    messages.value = "Normal weight (healthy)";
  } else if (bmi.value && bmi.value >= 23 && bmi.value <= 24.9) {
    messages.value = "Chubby / Starting to over weight";
  } else if (bmi.value && bmi.value >= 25 && bmi.value <= 29.9) {
    messages.value = "Overweight / Fat";
  } else if (bmi.value && bmi.value > 30.0) {
    messages.value = "Obese / Very overweight";
  }
};
</script>

<style></style>
