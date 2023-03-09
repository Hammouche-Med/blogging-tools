<script setup>
import { ref } from "vue";

const pwd = ref("");
const pwdLength = ref(8);
const useNumbers = ref(true);
const useSpecialChars = ref(false);
const useUpperCase = ref(true);

const numbers = "0123456789";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChars = "!@#$%^&*()";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";

const finalString = ref("");

const generatePwd = () => {
  pwd.value = "";
  finalString.value = "";

  finalString.value += lowerChars;

  if (useNumbers.value) finalString.value += numbers;
  if (useSpecialChars.value) finalString.value += specialChars;
  if (useUpperCase.value) finalString.value += upperChars;

  const passwordLength = pwdLength.value;
  for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * finalString.value.length);
    pwd.value += finalString.value.substring(randomNumber, randomNumber + 1);
  }
};
</script>
<template>
  <div class="container">
    <section>
      <h2 class="mb-4">Strong Password Generator</h2>

      <p>generates a random string</p>
      <section class="pb-4">
        <div class="bg-white border rounded-5">
          <section
            class="w-100 p-4 pb-4 d-flex justify-content-center align-items-center flex-column"
          >
            <img src="../assets/image/pwd.gif" alt="" />
            <div class="form-row">
              <div class="col m-2">
                <label class="form-check-label" for="lenght">
                  Choose length:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lenght"
                  v-model="pwdLength"
                  onchange=""
                />
              </div>

              <div class="col m-2">
                <input
                  class="form-check-input m-1"
                  type="checkbox"
                  v-model="useNumbers"
                />
                <label class="form-check-label"> use Numbers? </label>
              </div>
              <div class="col m-2">
                <input
                  class="form-check-input m-1"
                  type="checkbox"
                  v-model="useUpperCase"
                />
                <label class="form-check-label"> use Uppercase Letters? </label>
              </div>
              <div class="col m-2">
                <input
                  class="form-check-input m-1"
                  type="checkbox"
                  v-model="useSpecialChars"
                />
                <label class="form-check-label">
                  use Special Characters?
                </label>
              </div>
            </div>
            <br />
            <button @click="generatePwd" type="button" class="btn btn-primary">
              Generate
            </button>
            <div class="p-4 text-center border-top mobile-hidden">
              {{ pwd }}
            </div>
          </section>
        </div>
      </section>
    </section>
  </div>
</template>
