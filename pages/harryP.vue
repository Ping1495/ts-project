<template>
  <div>
    <h1
      class="text-3xl font-bold underline flex flex-col items-center mt-10 mb-10"
    >
      🧹 Harry Potter ⚡
    </h1>

    <div class="flex flex-row justify-center">
      <input
        type="text"
        name="charecterName"
        class="border border-black py-1 px-2 w-[300px]"
        placeholder="Charecter Name"
      />
      <radio class="bg-black text-white py-1 px-2">Search</radio>
    </div>
    <div class="flex flex-col items-center">
      <div class="flex flex-row gap-2 mt-4">
        <label for="house"><strong> House:</strong></label>
        <div class="flex flex-row gap-2">
          <input
            type="radio"
            name="house"
            value="Gryffindor🦁"
            @click="house = 'Gryffindor🦁'"
            :class="{ selected: house === 'Gryffindor🦁' }"
          />
          <label for="Gryffindor🦁"> Gryffindor</label>
        </div>
        <div class="flex flex-row gap-2">
          <input
            type="radio"
            name="house"
            value="Ravenclaw🦅"
            @click="house = 'Ravenclaw🦅'"
            :class="{ selected: house === 'Ravenclaw🦅' }"
          />
          <label for="Ravenclaw🦅"> Ravenclaw</label>
        </div>
        <div class="flex flex-row gap-2">
          <input
            type="radio"
            name="house"
            value="Hufflepuff🦡"
            @click="house = 'Hufflepuff🦡'"
            :class="{ selected: house === 'Hufflepuff🦡' }"
          />
          <label for="Hufflepuff🦡">Hufflepuff</label>
        </div>
        <div class="flex flex-row gap-2">
          <input
            type="radio"
            name="house"
            value="Slytherin🐍"
            @click="house = 'Slytherin🐍'"
            :class="{ selected: house === 'Slytherin🐍' }"
          />
          <label for="Slytherin🐍"> Slytherin</label>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center">
          <div class="flex flex-row gap-2 mt-4">
            <label for="blood"><strong>Blood:</strong> </label>
            <input
              type="radio"
              name="blood"
              value="muggleborn"
              @click="blood = 'muggleborn'"
              :class="{ selected: blood === 'muggleborn' }"
            />
            <label for="muggleborn">muggleborn</label>
            <input
              type="radio"
              name="blood"
              value="half-blood"
              @click="blood = 'half-blood'"
              :class="{ selected: blood === 'half-blood' }"
            />
            <label for="half-blood">half-blood</label>
            <input
              type="radio"
              name="blood"
              value="pure-blood"
              @click="blood = 'pure-blood'"
              :class="{ selected: blood === 'pure-blood' }"
            />
            <label for="pure-blood">pure-blood</label>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex flex-row gap-2 mt-4">
            <label for="gender"><strong>Gender:</strong> </label>
            <input
              type="radio"
              name="gender"
              value="female"
              @click="gender = 'female'"
              :class="{ selected: gender === 'female' }"
            />
            <label for="muggleborn">female</label>
            <input
              type="radio"
              name="gender"
              value="male"
              @click="gender = 'male'"
              :class="{ selected: gender === 'male' }"
            />
            <label for="male">male</label>
          </div>
        </div>
      </div>
      <p
        v-if="house || blood || gender"
        class="bg-black text-white py-1 px-2 mt-4"
      >
        Your selected : <strong>{{ house }} {{ blood }} {{ gender }}</strong>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const house = ref<string>("");
const blood = ref<string>("");
const gender = ref<string>("");


</script>

<style></style>
