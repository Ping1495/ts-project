<template>
  <div>
    <h1
      class="text-3xl font-bold underline flex flex-col items-center mt-10 mb-2"
    >
      TO-DO LIST
    </h1>
    <div class="flex flex-col items-center p-4">
      <input
        v-model="inputText"
        type="text"
        placeholder="Type your message here"
        class="border rounded p-2 w-80 mb-4"
      />
      <button
        @click="addMessage"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Next
      </button>
      <div class="mt-4 w-80">
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="flex items-center justify-between p-2"
        >
          <div class="flex items-center">
            <input type="checkbox" v-model="message.checked" class="mr-2" />
            <span
              :class="{ 'line-through': message.checked }"
              class="text-gray-800"
            >
              {{ message.text }}
            </span>
          </div>
          <button
            @click="removeMessage(index)"
            class="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Message {
  text: string;
  checked: boolean;
}

const inputText = ref("");
const messages = ref<Message[]>([]);

const addMessage = () => {
  if (inputText.value.trim()) {
    messages.value.push({ text: inputText.value.trim(), checked: false });
    inputText.value = "";
  }
};

const removeMessage = (index: number) => {
  messages.value.splice(index, 1);
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
