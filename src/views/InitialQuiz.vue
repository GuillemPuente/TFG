<template>
    <div class="InitialQuiz">
        <div class="question">
            {{ questions[q_index] }}
        </div>
        <div align="center" class="question_images">
            <v-container>
                <v-row v-if="question_images[q_index].length==2" no-gutters>
                    <v-col cols="6">
                        <v-img :src="question_images[q_index][0]" class="vertical_image"></v-img>
                    </v-col>
                    <v-col cols="6">
                        <v-img :src="question_images[q_index][1]" class="vertical_image"></v-img>
                    </v-col>
                </v-row>
                <v-img v-else-if="question_images[q_index].length==1" :src="question_images[q_index][0]" class="vertical_unique_image"></v-img>
            </v-container>
        </div>
        <div align="center" class="answers">
            <v-container v-if="player_feelings_analysis.length==0">
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
            <v-container v-else>
                <div>
                    <v-img v-if="question_images[1].length==1" :src="question_images[1][0]" class="vertical_image_analysis"></v-img>
                    <v-row v-else no-gutters>
                        <v-col cols="6">
                            <v-img :src="question_images[1][0]" class="vertical_image_analysis_other"></v-img>
                        </v-col>
                        <v-col cols="6">
                            <v-img :src="question_images[1][1]" class="vertical_image_analysis_other"></v-img>
                        </v-col>
                    </v-row>
                    {{player_feelings_analysis[0]}}
                </div>
                
                
                <div>
                    <v-img v-if="question_images[2].length==1" :src="question_images[2][0]" class="vertical_image_analysis"></v-img>
                    <v-row v-else no-gutters>
                        <v-col cols="6">
                            <v-img :src="question_images[2][0]" class="vertical_image_analysis_other"></v-img>
                        </v-col>
                        <v-col cols="6">
                            <v-img :src="question_images[2][1]" class="vertical_image_analysis_other"></v-img>
                        </v-col>
                    </v-row>
                    {{player_feelings_analysis[1]}} 
                </div>
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
    name: 'InitialQuiz',
    data: () => ({
        questions: ["With what gender do you identify the most?", "How does this image make you feel?", "And this one?", "Analysis"],
        question_images: [[require("../assets/genders/female_sign.png"), require("../assets/genders/male_sign.png")],[],[],[]],
        answers: [["FEMALE", "MALE", "OTHER"],["CONFIDENT", "INSECURE", "INDIFFERENT"],["CONFIDENT", "INSECURE", "INDIFFERENT"],[]],
        aux_answer: "",
        q_index: 0,
        player_feelings: [],
        player_feelings_analysis: [],
        next_button_disabled: true,
        gender_identif: "not_set"
    }),
    methods:{
        next_question(){
            if(this.q_index == 0){
                if(this.aux_answer == 1){
                    this.gender_identif = "female";
                    this.question_images[1] = [require("../assets/genders/gl_woman.png")];
                    this.question_images[2] = [require("../assets/genders/avg_woman.png")];
                }
                else if(this.aux_answer == 2){
                    this.gender_identif = "male";
                    this.question_images[1] = [require("../assets/genders/gl_man.png")];
                    this.question_images[2] = [require("../assets/genders/avg_man.png")];
                }
                else{
                    this.gender_identif = "other";
                    this.question_images[1] = [require("../assets/genders/gl_woman.png"), require("../assets/genders/gl_man.png")];
                    this.question_images[2] = [require("../assets/genders/avg_woman.png"), require("../assets/genders/avg_man.png")];
                }
            }
            if(this.q_index == 1 || this.q_index == 2){
                this.player_feelings[this.q_index-1] = this.answers[this.q_index][this.aux_answer-1]
                console.log(this.player_feelings)
            }

            if(this.q_index == 2){
                //Analysis for the first answer
                this.player_feelings_analysis[0] = this.answer_analysis(0, this.player_feelings[0])
                //Analysis for the second one
                this.player_feelings_analysis[1] = this.answer_analysis(1, this.player_feelings[1])
            }

            if(this.q_index < this.questions.length - 1){
                this.q_index++
                this.next_button_disabled = true
            }
            else{
                this.$router.push("/picturequiz")
            }
            this.answers[this.answers.length] = this.aux_answer
            
        },
        click_button(ans){
            //Next button reenable
            this.next_button_disabled = false
            this.aux_answer = ans
        },
        answer_analysis(ind, feeling){
            var analysis = ""
            switch(feeling){
                case "INDIFFERENT":
                    if(ind == 0) analysis = "It is a good thing that this kind of images don't bother you, it's a sign of a healthy body image,"
                    else analysis = "Indifference when seeing body related images is a sign of a healty body image."
                break;
                case "CONFIDENT":
                    if(ind == 0) analysis = "Feeling confident is a sign of a healthy body image, great!"
                    else analysis = "Confidence is a good reaction, it implies a healty body image!"
                break;
                case "INSECURE":
                    if(ind == 0) analysis = "Feeling insecure with this images is usual, being exposed daily to this images may cause an unhealthy body image."
                    else analysis = "Insecurity against this images is a sign of an unhealthy body image, this may be caused by a daily exposure to body related images."
                break;
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
        border-radius: 5%;
    }
    .vertical_unique_image{
        width: 55%;
        height: width;
        border-radius: 5%;
    }
    .vertical_image_analysis{
        width: 25%;
        height: width;
        border-radius: 5%;
    }
    .vertical_image_analysis_other{
        width: 50%;
        height: width;
        border-radius: 5%;
    }

  </style>
  