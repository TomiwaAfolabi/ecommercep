<template>
  <div>
    <div class="w-screen bg-sky-900 pt-4">
      <div class="w-screen h-96 bg-emerald-50 mt-6">
        <h2 class="font-Courgette text-5xl p-4">Categories</h2>
        <div class="flex gap-4">
          <div
            class="w-60 h-60 bg-sky-900 p-4 m-4 hover:bg-emerald-50"
            v-for="Category in Categories"
            :key="Category.id"
          >
            <div class="w-50 h-40">
              <img :src="Category.imgUrl" class="w-full h-full" />
            </div>

            <p class="font-Courgette text-2xl text-center mt-4">
              {{ Category.CategoryName }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Category",
  props: ["Categories"],
};
</script>
