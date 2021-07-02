<template>
    <div class="InitialQuiz">
        <div class="question">
            {{ questions[q_index] }}
        </div>
        <div align="center" class="question_images">
            <v-container>
                <v-row v-if="question_imgaes[q_index].length==2" no-gutters>
                    <v-col cols="6">
                        <v-img :src="question_imgaes[q_index][0]" class="vertical_image"></v-img>
                    </v-col>
                    <v-col cols="6">
                        <v-img :src="question_imgaes[q_index][1]" class="vertical_image"></v-img>
                    </v-col>
                </v-row>
                <v-img v-else-if="question_imgaes[q_index].length==1" :src="question_imgaes[q_index][0]" class="vertical_unique_image"></v-img>
            </v-container>
        </div>
        <div align="center" class="answers">
            <v-container>
                <v-row>
                    <v-col>
                        <v-btn rounded class="answer_button" v-on:click="click_button(1)" color="rgb(241,196,99)">
                            {{answers[q_index][0]}}
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn rounded class="answer_button" v-on:click="click_button(2)" color="rgb(241,196,99)">
                            {{answers[q_index][1]}}
                        </v-btn>
                    </v-col>
                </v-row>
                
                <v-row v-if="answers[q_index].length==3">
                    <v-col>
                        <v-btn rounded class="answer_button" v-on:click="click_button(3)" color="rgb(241,196,99)">
                            {{answers[q_index][2]}}
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row v-if="answers[q_index].length==4">
                    <v-col>
                        <v-btn rounded class="answer_button" v-on:click="click_button(3)" color="rgb(241,196,99)">
                            {{answers[q_index][2]}}
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn rounded class="answer_button" v-on:click="click_button(4)" color="rgb(241,196,99)">
                            {{answers[q_index][3]}}
                        </v-btn>
                    </v-col>
                </v-row>
            
            </v-container>
        </div>
        <div align="center">
            <v-btn v-if="player_feelings_analysis.length==0" rounded class="next-question-button" v-on:click="next_question()" :disabled="isDisabled" color="rgb(240,157,88)">
                NEXT QUESTION
            </v-btn>
            <v-btn v-else rounded class="next-question-button" v-on:click="next_question()" color="rgb(240,157,88)">
                NEXT SECTION
            </v-btn>
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  
  export default {
    name: 'PreviousConceptsQuiz',
    data: () => ({
        questions: ["Have you ever heard about the concept of \"Body Dysmorphia\"?", "Have you ever heard about the concept of \"Filter Bubble\"?"],
        question_imgaes: [[require("../assets/previous_knowlege_quiz/body_dysmorphia.jpg")],[require("../assets/previous_knowlege_quiz/filter_bubble.jpg")]],
        answers: [["Never", "Yes", "Not sure"], ["Never", "Yes", "Not sure"]],
        aux_answer: [],
        subsection_answers: [],
        q_index: 0,
        section_index: 0,
        question_subsection: false,
        player_feelings: [],
        player_feelings_analysis: [],
        next_button_disabled: true,
        gender_identif: "not_set"
    }),
    methods:{
        next_question(){
            if(this.question_subsection){
                this.question_subsection = false
                this.section_index++
            }
            else{
                if(this.section_index == 0){
                    //If the answer was yes
                    if(this.aux_answer[0] == 2){
                        this.question_subsection = true
                        this.questions.splice(1, 0, "Do you suffer Body Dysmorphia?")
                        this.answers.splice(1, 0, ["No", "Yes", "Not sure"])
                        this.question_imgaes.splice(1, 0, [require("../assets/previous_knowlege_quiz/body_dysmorphia.jpg")])
                    }
                    else this.section_index++
                }

                else if(this.section_index == 1){
                    //If the answer was yes
                    if(this.aux_answer[1] == 2){
                        this.question_subsection = true
                        this.questions.splice(this.questions.length, 0, "Are you trapped in a Filter Bubble?")
                        this.answers.splice(this.questions.length, 0, ["No", "Yes", "Not sure"])
                        this.question_imgaes.splice(this.questions.length   , 0, [require("../assets/previous_knowlege_quiz/filter_bubble.jpg")])
                    }
                    else this.section_index++
                }
            }

            

            if(this.q_index < this.questions.length - 1){
                this.q_index++
                this.next_button_disabled = true
            }
            else{
                this.$router.push("/PreviousConcepts")
            }
            
            
        },
        click_button(ans){
            //Next button reenable
            this.next_button_disabled = false
            if(!this.question_subsection) this.aux_answer[this.section_index] = ans
            else this.subsection_answers[this.section_index] = ans
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
        margin: 13px;
        margin-top: 20px;
        text-align: center;
        /*border: 2px solid black;*/
        font-size: 30px;
    }
    .next-question-button{
        margin-top: 20px;
    }
    .answers{
        margin-top: 5px;
    }
    .answer_button{
        background-color: purple;
    }
    .vertical_image{
        width: 90%;
        height: width;
    }.vertical_unique_image{
        width: 70%;
        height: width;
        border-radius: 5%;
    }
    .vertical_image_analysis{
        width: 20%;
        height: width;
    }

  </style>
  