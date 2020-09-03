<template>
 <div>
    <h1>To Do List:</h1>
    <ol>
      <li v-for="(item, i) in arr" :key="i">
        <span>{{item}}</span>
      </li>
    </ol>
    <input type="text" v-model="text">
    <button @click="add" v-if="arr.length < 10">Add</button>
    <button @click="remove(i)">Remove</button>
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

</style>
