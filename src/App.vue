<template>
  <div id="app">
    <YelpSearch class="search" v-model="search"
      servicePlaceholder="service"
      serviceTypeahead="Restaurant"
      :serviceSuggestions="serviceSuggestions"
      :locationSuggestions="locationSuggestions"
      @search="search"
    />
  </div>
</template>

<script>
import YelpSearch from './components/YelpSearch.vue'

export default {
  name: 'App',
  data: ()=>({
    search: {
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
    YelpSearch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  min-height: 1000px;
  background-image: url("https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/8a6cc705477a/assets/img/home/hero_photos/uteUmycsbh0UibXk-At-3A.jpg");
}

.search{
  margin-top: 60px;
  margin-left: 60px ;
  width: 1000px;
}
</style>
