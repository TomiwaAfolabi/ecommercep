<template>
  <div class="font-Courgette w-screen bg-stone-300 p-4">
    <h2 class="text-4xl p-4">Explore</h2>

    <div class="flex gap-4">
      <!-- links container -->
      <div class="w-96 h-96 bg-sky-900 m-2">
        <ul class="grid gap-12 w-auto h-auto p-4 mt-8 cursor-default">
          <li
            class="bg-emerald-50 p-4 text-center text-2xl hover:bg-sky-900"
            @click.prevent="view = 'store'"
          >
            Stores
          </li>
          <li
            class="bg-emerald-50 p-4 text-center text-2xl hover:bg-sky-900"
            @click.prevent="view = 'services'"
          >
            Services
          </li>
          <li
            class="bg-emerald-50 p-4 text-center text-2xl hover:bg-sky-900"
            @click.prevent="view = 'sales'"
          >
            Sales
          </li>
        </ul>
      </div>

      <!-- content for the  above links-->
      <div class="w-screen h-screen bg-sky-900 m-2 overflow-auto">
        <!-- Stores -->

        <div v-show="view === 'store'">
          <p class="text-4xl text-emerald-50 p-4 text-center">Stores</p>
          <div class="grid grid-rows-2 grid-flow-col ml-1220">
            <div
              class="w-60 h-auto bg-emerald-50 p-4 transition hover:scale-110 scale-75"
              v-for="Store in Stores"
              :key="Store.id"
            >
              <div class="w-50 h-40">
                <img :src="Store.imgUrl" class="w-full h-full" />
              </div>
              <div class="mt-4">
                <span class="font-Courgette text-2xl text-center">
                  {{ Store.StoreName }}</span
                ><br />
                <span class="text-1xl">Category: {{ Store.Category }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- <transition name="fade" mode="in-out">
    <h2 v-if="flag" key="main">Hello World </h2>
    <h2 v-else  key="secondary">Another World </h2>
  </transition>
  -->
        <!-- Services -->

        <div v-show="view === 'services'">
          <p class="text-4xl p-12">Services</p>
          <div></div>
        </div>
        <!-- Sales -->
        <div v-show="view === 'sales'">
          <p class="text-4xl p-12">Sales</p>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explore",
  props: ["Stores"],
  data() {
    return {
      view: "store",
    };
  },
};
</script>
