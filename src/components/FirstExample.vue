<template lang="">
    <div>
        <h1>Vue vueX</h1>
        <h5>{{ counter }}</h5>
        <button @click="inc(2)">First Compo</button>
        <h2>{{ name}}</h2>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        //counter(){
         //   return this.$store.getters.getCounterNormalise
        //}
        ...mapGetters('counter',{
            'counter' : 'getCounterNormalise',
            'name': 'getName'
        })
    },
    methods: {
       // inc(){
        //    this.$store.dispatch('actionIncCounter',3)
        //}
        ...mapActions('counter',{
            'inc': 'actionIncCounter'
        })
    },
}
</script>
<style lang="">
    
</style>