<template>
    <div class="HomeScreen">
        <div class=text-center>
            <h1 class="main-title">BODY IMAGE,</h1>
            <h1 class="main-title-2">FILTER BUBBLES</h1>
            <h4 class="aux-title">&</h4>
            <h3 class="second-title">THEIR </h3>
            <h2 class="second-title-2"> DANGERS</h2>
        </div>
        <div class="text-center">
            <v-btn rounded class="play-button" v-on:click="transition()" color="rgb(240,157,88)">
                START
            </v-btn>
        </div>
    </div>
</template>

<script>
    export default{
        name:'HomeScreen',
        
        methods:{
            transition(){
                this.$router.push("/PreviousConceptsQuiz");
            }
        },
        computed:{
            next_button_color(){
                return this.$store.state.next_button_color
            }
        }
    }
</script>

<style scoped>
    .main-title{
        margin: 40px;
        margin-top:30px;
        margin-bottom: 0px;
        font-size: 40px;
    }
    .main-title-2{
        margin: 40px;
        margin-top:0px;
        margin-bottom: 0px;
        font-size: 40px;
    }
    .second-title-2{
        padding: 0;
        margin: 0;
        font-size: 55px;
        color: rgb(219, 28, 28);
    }
    .play-button{
        margin-top: 40px;
    }

</style>