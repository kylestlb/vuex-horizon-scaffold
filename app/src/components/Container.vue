<template>
  <div>
    <input type="text" v-model="message" placeholder="Enter a thing!">
    <button @click='submitThing(message)'>Enter</button>
    <div v-for="thing in things">
      <p>{{ thing.name }}</p>
    </div>
  </div>
</template>

<script>
import { submitThing, fetchThings } from '../vuex/actions/submitThing.js'
import { getThings } from '../vuex/getters/getters.js'

// Eventually, you'll import more components like so:
// import someComponent from './SomeComponent.vue'

export default {
  ready () {
    this.fetchThings()
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      message: ''
    }
  },
  components: {
    // someComponent
  },
  vuex: {
    actions: {
      submitThing,
      fetchThings
    },
    getters: {
      things: getThings
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
