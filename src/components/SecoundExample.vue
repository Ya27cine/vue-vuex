<template lang="">
    <div>
        <h1>Vue vueX</h1>
        <h5>{{ counter }}</h5>
        <button @click="inc">Secound Compo</button>
    </div>
</template>
<script>
export default {
    computed: {
        counter(){
            return this.$store.state.count
        }
    },
    methods: {
        inc(){
            this.$store.state.count++;
        }
    },
}
</script>
<style lang="">
    
</style>