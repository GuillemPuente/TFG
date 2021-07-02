<template>
    <div class="FinalQuiz">
        <div class="question">
            {{ questions[q_index] }}
        </div>
        <div align="center" class="answers">
            <v-container>
                <v-row v-if="answers[q_index].length >= 2"> 
                    <v-col>
                        <v-btn rounded class="answer_button" v-on:click="reenable_button()" color="rgb(241,196,99)">
                            {{answers[q_index][0]}}
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn rounded class="answer_button" v-on:click="reenable_button()" color="rgb(241,196,99)">
                            {{answers[q_index][1]}}
                        </v-btn>
                    </v-col>
                </v-row>
                
                <v-row v-if="answers[q_index].length==3">
                    <v-col>
                        <v-btn rounded class="answer_button" v-on:click="reenable_button()" color="rgb(241,196,99)">
                            {{answers[q_index][2]}}
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row v-if="answers[q_index].length==4">
                    <v-col>
                        <v-btn rounded class="answer_button" v-on:click="reenable_button()" color="rgb(241,196,99)">
                            {{answers[q_index][2]}}
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn rounded class="answer_button" v-on:click="reenable_button()" color="rgb(241,196,99)">
                            {{answers[q_index][3]}}
                        </v-btn>
                    </v-col>
                </v-row>
            
            </v-container>
        </div>
        <div align="center">
            
            <v-btn v-if="answers[q_index].length >= 2" rounded class="next-question-button" v-on:click="next_question()" :disabled="isDisabled" color="rgb(240,157,88)">
                NEXT QUESTION
            </v-btn>
            <v-btn v-else  rounded class="next-question-button" v-on:click="next_question()" color="rgb(240,157,88)">
                <v-img :src="this.google_forms_logo" class="logo_image" v-on:click="go_to_form()"></v-img>
                SURE
            </v-btn>
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  
  export default {
    name: 'FinalQuiz',
    data: () => ({
        questions: ["Let's revisit some questions"],
        answers: [[]],
        q_index: 0,
        google_forms_logo: require("../assets/final_quiz/google_forms_logo_mini.png"),
        next_button_disabled: true,
    }),
    methods:{
        next_question(){
            if(this.q_index < this.questions.length - 1){
                this.q_index++
                this.next_button_disabled = true
            }
            else{
                window.open("https://forms.gle/QQDx4c3p17aD4CS87", '_blank').focus();
                this.$router.push("/")
            }
            
        },
        reenable_button(){
            this.next_button_disabled = false
        },
        go_to_form(){
            //location.href = "https://forms.gle/QQDx4c3p17aD4CS87"
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
          margin: 10%;
          text-align: center;
          /*border: 2px solid black;*/
          font-size: 40px;
      }
      .next-question-button{
          margin-top: 30px;
      }
      .answers{
          margin-top: 30px;
      }
      .logo_image{
          width: 5%;
          height: width;
      }

  </style>
  