<template lang="">
    <div>
        <h1>Vue vueX</h1>
        <h5>{{ counter }}</h5>
        <button @click="inc">First Compo</button>
    </div>
</template>
<script>
export default {
    computed: {
        counter(){
            return this.$store.getters.getCounterNormalise
        }
    },
    methods: {
        inc(){
            this.$store.dispatch('actionIncCounter',3)
        }
    },
}
</script>
<style lang="">
    
</style>