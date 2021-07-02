<template>
    <div class="PreviousConcepts">
        <div class="concept">
            {{concepts[c_index]}}
        </div>
        <div align="center" class="description">
            <v-container>
                {{concept_descriptions[c_index]}}            
            </v-container>
        </div>
        <div align="center">
            <v-btn rounded class="next-concept-button" v-on:click="next_concept()" color="rgb(240,157,88)">
                {{next_button_text[c_index]}}
            </v-btn>
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  
  export default {
    name: 'PreviousConcepts',
    data: () => ({
        concepts: ["Before starting, let's introduce some basic concepts", "Body image", "Healthy body image", "Unhealthy body image", "Body dysmorphia", "Filter Bubble"],
        concept_descriptions: ["", "Your body image is the way you percieve and feel about your own body and looks", "A healthy body image means feeling comfortable with your body and the way you look", "An unhealthy body image is synonim of feeling dissatisfaction or shame about your body or your looks", "Mental disorder where you feel some aspect of your body is incorrect and you do whatever you can to change it or hide it", "Once trapped in a filter bubble most of the content you consume is curated to match your preferences very frequent on social media platforms"],
        next_button_text: ["SURE", "GOT IT", "GOT IT", "GOT IT", "GOT IT", "GOT IT"],
        c_index: 0
    }),
    methods:{
        next_concept(){
            if(this.c_index < this.concepts.length - 1){
                this.c_index++
            }
            else{
                this.$router.push("/initialQuiz")
            }
            
        },
        click_button(ans){
            //Next button reenable
            this.next_button_disabled = false

            this.aux_answer = ans
        }
    },
    computed:{
        isDisabled(){
            return this.next_button_disabled;
        }
    }
  }
  </script>

  <style scoped>
      .concept{
          margin: 13px;
          margin-top: 20px;
          text-align: center;
          /*border: 2px solid black;*/
          font-size: 45px;
      }
      .next-concept-button{
          margin-top: 30px;
      }
      .description{
          margin-top: 0px;
          font-size: 30px;
          /*color: rgb(46, 46, 46);*/
      }
      .answer_button{
          background-color: purple;
          font-size: 50px;
      }

  </style>
  