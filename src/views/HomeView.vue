<script setup>
import { ref } from "vue";

const title = ref("");
const slug = ref("");

const formatString = (str) => {
  slug.value = str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
</script>

<template>
  <div class="container">
    <section>
      <h2 class="mb-4">Title2Slug</h2>

      <p>format a title to slug for blogs articles</p>
      <section class="pb-4">
        <div class="bg-white border rounded-5">
          <section
            class="w-100 p-4 pb-4 d-flex justify-content-center align-items-center flex-column"
          >
            <img src="../assets/image/slug-scream.gif" alt="" />
            <div>
              <div class="input-group">
                <div class="form-outline">
                  <input
                    placeholder="enter your title"
                    id="form1"
                    class="form-control"
                    v-model="title"
                    @change="formatString(title)"
                  />
                  <label
                    class="form-label"
                    for="form1"
                    style="margin-left: 0px"
                  ></label>
                </div>
              </div>
            </div>
          </section>

          <div class="p-4 text-center border-top mobile-hidden">
            {{ slug }}
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
