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
            return this.$store.getters['counter/getCounter']
        }
    },
    methods: {
        inc(){
            this.$store.dispatch('counter/actionIncCounter',2)
        }
    },
}
</script>
<style lang="">
    
</style>