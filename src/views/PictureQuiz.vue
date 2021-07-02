<template>
  <div class="PictureQuiz">
      <div v-if="!image_pahse_done" class="question">
          {{ questions[q_index] }}
      </div>
      <div v-else class="question">
        Analysis
      </div>
      <div align="center" class="answers">
        <v-container v-if="!image_pahse_done">
            <v-row no-gutters>
                <v-col cols="6">
                  <v-img :src="this.quiz_images[0]" class="answer_image" v-on:click="reenable_button(1)"></v-img>
                </v-col>
                <v-col cols="6">
                  <v-img :src="this.quiz_images[1]" class="answer_image" v-on:click="reenable_button(2)"></v-img>
                </v-col>
            </v-row>
            
            <v-row no-gutters v-if="quiz_images.length==4" style="margin-top:10%">
                <v-col cols="6">
                  <v-img :src="this.quiz_images[2]" class="answer_image" v-on:click="reenable_button(3)"></v-img>
                </v-col>
                <v-col cols="6">
                  <v-img :src="this.quiz_images[3]" class="answer_image" v-on:click="reenable_button(4)"></v-img>
                </v-col>
            </v-row>
        
        </v-container>
        <v-container v-else>
          {{answer_analysis}}
        </v-container>
    </div>
      <div align="center">
          <v-btn rounded class="next-question-button" v-on:click="next_question()" :disabled="isDisabled" color="rgb(240,157,88)">
            {{button_text}}
          </v-btn>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'FirstQuiz',
  data() {
    return{
      questions: ["Who would you follow?", "Who would you follow?", "Who would you follow?", "Who would you follow?"],
      q_index: 0,
      quiz_images: [require("../assets/quiz_images/img_quiz_q0_1.png"), require("../assets/quiz_images/img_quiz_q0_2.png"), require("../assets/quiz_images/img_quiz_q0_3.png"), require("../assets/quiz_images/img_quiz_q0_4.png")],
      player_answers: [],
      image_pahse_done: false,
      answer_analysis: "analysis goes here",
      next_button_disabled: true,
      button_text: "NEXT QUESTION"
    }
  },
  methods:{
      next_question(){
          if(this.q_index < this.questions.length - 1){
              this.q_index++
              this.next_button_disabled = true
              this.quiz_images = [require("../assets/quiz_images/img_quiz_q" + this.q_index + "_1.png"), require("../assets/quiz_images/img_quiz_q" + this.q_index + "_2.png"), require("../assets/quiz_images/img_quiz_q" + this.q_index + "_3.png"), require("../assets/quiz_images/img_quiz_q" + this.q_index + "_4.png")]
          }
          else{
            if(!this.image_pahse_done){
              this.q_index++
              this.image_pahse_done = true;
              this.answer_analysis = this.image_selection_analysis()
              this.button_text = "NEXT SECTION"
            }
            else this.$router.push("/finalquiz")
          }
        },
          
          reenable_button(ind){
            this.player_answers[this.q_index] = ((ind) + this.q_index) % 4
            this.next_button_disabled = false
        },
        image_selection_analysis(){
          var percentages = [0,0,0,0] //Green, Yellow Blue, Purple
          var max_choosen_profile = 0
          var max_profile_index = 0
          var analysis = ""
          var profiles = ["Hot boay", "avg dude", "hot girl", "avg girl"]
          for(var i = 0; i < 4; i++) percentages[this.player_answers[i]]++
          for(var i = 0; i < 4; i++){
            if(percentages[i] > max_choosen_profile){
              max_choosen_profile = percentages[i]
              max_profile_index = profiles[i]
            }
          }
          if(max_choosen_profile < 3) analysis = "It seems like your choices are divers and you do not focus on any body type in particular. This can help into having a healthy body image"
          if(max_choosen_profile == 3){
            analysis = "It seems like most of your choices have the same body profile. This might cause an increase on posts with similar body profiles and normalize them. If a certain body type gets normalized and you don't feel identified with it, it may cause an unhealthy body image"
          }
          if(max_choosen_profile >= 4){
            analysis = "All of your choices are people of the same body profile. This might trap you into a filter bubble where all the images/content you get is centered on people with that same body profile, which could cause an unhealthy body image by this body profile becoming your idealized body"
          }
         return analysis
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
    .question{
        margin: 40px;
        margin-top: 50px;
        text-align: center;
        /*border: 2px solid black;*/
        font-size: 40px;
    }
    .next-question-button{
        margin-top: 50px;
    }
    .answer_image{
      width: 60%;
      height: width;
      border-radius: 5%;
    }

</style>
