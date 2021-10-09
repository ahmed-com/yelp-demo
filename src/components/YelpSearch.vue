<template>
  <div class="container">
    <label  class="container" id="service-container" for="service-input">
      <span id="service-label">Find</span>
      <span id="service-placeholder" >{{computedServiceTypeahead}}</span>
      <input @focus="showServiceSuggestions = true" @blur="showServiceSuggestions = false" autocomplete="off" type="text" id="service-input" :placeholder="servicePlaceholder" v-model="service">
    </label>
    <ul v-if="serviceSuggestions && showServiceSuggestions" id="serviceOptions">
      <li v-for="suggestion in serviceSuggestions"
        :key="suggestion"
        class="serviceSuggestion"
        @click="()=>{ search({service: suggestion}) }"

      >{{suggestion}}</li>
    </ul>
    <label  class="container" id="location-container" for="location-input">
      <div id="line-break"></div> 
      <span id="location-label">Near</span>
      <span id="location-placeholder" >{{computedLocationTypeahead}}</span>
      <input @focus="showLocationSuggestions = true" @blur="showLocationSuggestions = false" autocomplete="off" type="text" id="location-input" :placeholder="locationPlaceholder" v-model="location">
    </label>
    <button id="search-btn" @click="search">
      <img width="25px" src="../../assets/magnifying.svg" alt="">
    </button>
    <ul v-if="locationSuggestions && showLocationSuggestions" id="locationOptions">
      <li v-for="suggestion in locationSuggestions"
        :key="suggestion"
        class="locationSuggestion"
        @click="()=>{ search({location: suggestion}) }"
      >{{suggestion}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YelpSearch',
  props:[
    "value",
    "servicePlaceholder",
    "serviceTypeahead",
    "locationPlaceholder",
    "locationTypeahead",
    "serviceSuggestions",
    "locationSuggestions"
  ],

  data: function () {
    const vm = this;
    return {
      service: vm.value.service,
      location: vm.value.location,
      showServiceSuggestions: false,
      showLocationSuggestions: false,
    }
  },

  computed: {
    computedServiceTypeahead(){
      let typeahead = ""

      if(this.service && this.serviceTypeahead){
        for (let index = 0; index < this.service.length; index++) {
          if(this.service[index].toLowerCase() === this.serviceTypeahead[index].toLowerCase()){
            typeahead += this.service[index];
          }else{
            return ""
          }
        }

        for (let index = this.service.length; index < this.serviceTypeahead.length; index++) {
          typeahead += this.serviceTypeahead[index]
        }
      }

      return typeahead;
    },
    
    computedLocationTypeahead(){
      let typeahead = ""
      
      if(this.location && this.locationTypeahead){
        for (let index = 0; index < this.location.length; index++) {
          if(this.location[index].toLowerCase() === this.locationTypeahead[index].toLowerCase()){
            typeahead += this.location[index];
          }else{
            return ""
          }
        }

        for (let index = this.location.length; index < this.locationTypeahead.length; index++) {
          typeahead += this.locationTypeahead[index]
        }
      }

      return typeahead;
    }
  },

  methods: {
    search(input){
      const service = input.service || this.service;
      const location = input.location || this.location;
      this.$emit("search",{service, location});
    }
  },

  watch: {
    service(userInput){
      this.$emit('input',{service: userInput, location: this.location});
    },

    location(userInput){
      this.$emit('input',{service: this.service, location: userInput});
    }
  }
}
</script>


<style scoped>
  .container{
    display: inline-grid;
  }

  #location-container{
    grid-row: 1;
    grid-column: 2;
    font-size: 18px;
    padding: 11px;
    overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
  }
  #line-break{
    grid-column: 1;
    grid-row: 1;
    content: "";
    width: 1px !important;
    margin: 0 -11.5px;
    background-color: #ccc;
    z-index: 1;
  }
  #service-container{
    grid-row: 1;
    grid-column: 1;
    font-size: 18px;
    border-radius: 4px 0 0 4px;
    padding: 11px;
    background-color: #fff;
    box-sizing: border-box;
    overflow: hidden;
  }
  #location-label, #service-label{
    grid-row: 1;
    grid-column: 1;
    color: #666;
    margin-right: 12px;
    font-weight: 700;
  }

#serviceOptions{
  grid-row:2;
  grid-column: 1;
}


#location-input, #location-placeholder, #service-input, #service-placeholder{
  grid-column: 2;
  grid-row: 1;
  box-sizing: border-box;
}

  #locationOptions{
    grid-row:2;
    grid-column: 2;
  }

  #service-placeholder, #location-placeholder {
  text-align: left;
  font-family: inherit;
	font-size: 100%;
  box-sizing: border-box;
	padding-left: 2.4px;
	padding-top: 1px;
  /* padding: 0; */
	pointer-events: none;
	opacity: 0.6;
}

#service-input, #location-input {
	font-family: inherit;
  font-size: 100%;
  background: transparent;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  outline: 0;
  box-shadow: none;
  margin-bottom: 12px;
  /* vertical-align: baseline !important; */
}

#locationOptions, #serviceOptions{
  font: inherit;
  vertical-align: baseline;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 21px 38px rgb(0 0 0 / 20%);
  margin-top: 0!important;
  border-top: none;
  background-color: #fff;
  padding: 0;
  line-height: 1.28571em;
  font-size: 14px;
  margin: -3px 0 0;
  list-style: none;
  max-height: 430px;
  overflow-y: auto; 
}

.locationSuggestion, .serviceSuggestion{
  padding: 8px 15px;
  color: #000;
  cursor: pointer;
  font-size: 14px;
}

.locationSuggestion:hover, .serviceSuggestion:hover{
  background-color:#4682B4;
  color: #fff;
}

#search-btn{
  grid-row: 1;
  grid-column: 3;
  border-radius: 0 4px 4px 0;
  border: 0;
  background: #d32323;
  padding: 14px 20px 13px;
  box-shadow: none;
  font-size: 12px;
  line-height: 1.5em;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

</style>
