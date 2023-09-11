<template>
<div>
    <div>id: {{item.id}}</div>
    <div>name: {{item.name}}</div>
    <div v-if="flag">client only</div>
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
      return {
        flag: false
      }
    },
    mounted() {
      this.flag = true;
    },
    asyncData({ store, route }) {
        // 触发 action 后，会返回 Promise
        console.log(route.query.id);
        return store.dispatch('fetchItem', 2)
    },
    computed: {
        // 从 store 的 state 对象中的获取 item。
        item() {
            return this.$store.state.item;
        }
    }
}
</script>