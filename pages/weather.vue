<template>
  <div>
    <h1
      class="text-3xl font-bold underline flex flex-col items-center mt-10 mb-10"
    >
      Weather Now
    </h1>
    <div class="flex flex-col items-center">
      <!-- search city -->
      <div>
        <input
          v-model="city"
          type="text"
          class="border border-black rounded-md py-1 px-2 w-[300px]"
          placeholder="your city"
        />
        <button
          class="bg-black text-white py-1 px-2 rounded-lg ml-4"
          @click="fetchData"
        >
          search
        </button>
      </div>

      <div v-if="weatherData">
        <div class="flex flex-col justify-center items-center">
          <p class="text-4xl font-semibold pt-6">
            {{ weatherData.name }}, {{ weatherData.sys.country }}
          </p>
          <h1 class="text-9xl">
            {{ Number(weatherData.main.temp).toFixed(0) }}
            °C
          </h1>
          <p class="text-2xl font-semibold pt-2">{{ currentDate }}</p>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// กำหนดชนิดข้อมูลสำหรับข้อมูลที่จำเป็น
const city = ref<string>("Bangkok");
const weatherData = ref<any>(null);
const error = ref<string | null>(null);
const currentDate = ref<string>("");
// useAsyncData
// useFetch
const fetchData = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&lang=en&appid=06720c1269fc4979c1f0043411535b92`
    );
    if (!response.ok) {
      throw new Error("ไม่สามารถดึงข้อมูลสภาพอากาศได้");
    }
    const data = await response.json();
    weatherData.value = data;

    // อัปเดตวันที่เมื่อข้อมูลถูกดึงสำเร็จ
    currentDate.value = new Date().toLocaleString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (err) {
    error.value = err instanceof Error ? err.message : "เกิดข้อผิดพลาด";
  }
};

onMounted(() => {
  fetchData();
  Date();
});
</script>

<style></style>
