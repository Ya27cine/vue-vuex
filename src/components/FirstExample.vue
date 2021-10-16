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
            return this.$store.state.count
        }
    },
    methods: {
        inc(){
            this.$store.commit('inc',3)
        }
    },
}
</script>
<style lang="">
    
</style>