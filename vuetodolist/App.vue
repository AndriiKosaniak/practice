<template>
  <div id="app">
    {{ msg }}
    <input type="text" v-model="text">
    <button @click="add" v-if="arr.length <= 10">Add</button>
    <button @click="remove(i)">Remove</button>
    <ol>
      <li v-for="(item, i) in arr" :key="i">
        <span>{{item}}</span>
      </li>
    </ol>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      text: '',
      arr: []
    }
  },
  methods: {
    add(){
      this.arr.push(this.text)
    },
    remove(i) {
      this.arr.splice(i, 1)
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
