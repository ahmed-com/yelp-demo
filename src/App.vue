<template>
  <div id="app">
    <YelpSearchMobile class="search" v-model="searchInput"
      servicePlaceholder="service"
      serviceTypeahead="Restaurant"
      :serviceSuggestions="serviceSuggestions"
      :locationSuggestions="locationSuggestions"
      @search="search"
    />
  </div>
</template>

<script>
import YelpSearchMobile from './components/YelpSearchMobile.vue'

export default {
  name: 'App',
  data: ()=>({
    searchInput: {
      location: "Alex",
      service: "Restaur"
    },

    serviceSuggestions: [
      "Restaurant",
      "Plumbers",
      "Delivery",
      "A",
      "B",
      "C",
      "D",
      "E",
    ],
    locationSuggestions: [
      "Restaurant",
      "Plumbers",
      "Delivery",
      "A",
      "B",
      "C",
      "D",
      "E",
    ],
  }),

  methods: {
    search(){}
  },
  components: {
    YelpSearchMobile
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  min-height: 1000px;
  background-color: lightblue;
}

.search{
  margin-top: 60px;
  margin-left: 60px ;
  width: 1000px;
}
</style>
