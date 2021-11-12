<template>
    <div class="wrapper">
        <nav>
            <span>Remaining Time: </span>
            <span>{{ time }}</span>
        </nav>

        <div class="questions">
            <div
                class="question-card"
                v-for="question in questions"
                :key="question.id"
                :style="{ pointerEvents: question.answered ? 'none' : 'auto' }"
            >
                <p class="question">{{ question.id }}. {{ question.title }}</p>
                <p
                    :class="option.selected ? 'answer-selected' : 'answer'"
                    v-for="(option, optIndex) in question.options"
                    :key="option"
                    @click="
                        $emit('answer', {
                            questionId: question.id,
                            answerGiven: option.text,
                            answerIndex: optIndex,
                        })
                    "
                >
                    <i
                        :class="
                            option.selected ? 'fas fa-circle' : 'far fa-circle'
                        "
                    ></i>
                    {{ option.text }}
                </p>
            </div>
            <div class="btn-wrapper">
                <button class="btn" @click="resetTimer">Finish Quiz</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Quiz',
    props: {
        questions: Array,
    },
    time: '',
    data: () => ({
        time: '',
        total_seconds: 1800,
        timerInterval: 0,
    }),
    mounted() {
        this.showTimeRemaining();
    },
    methods: {
        timeFormat(time: number) {
            return time > 10 ? `${time}` : `0${time}`;
        },
        showTimeRemaining() {
            this.timerInterval = setInterval(() => {
                this.total_seconds -= 1;

                if (this.total_seconds < 0) {
                    clearInterval(this.timerInterval);
                    this.$emit('finish');
                }

                let seconds = this.total_seconds % 60;
                let minutes = Math.floor((this.total_seconds % 3600) / 60);
                let hours = Math.floor(
                    (this.total_seconds % (3600 * 24)) / 3600
                );

                let time = `${this.timeFormat(hours)} : ${this.timeFormat(
                    minutes
                )} : ${this.timeFormat(seconds)}`;
                this.time = time;
            }, 1000);
        },
        resetTimer() {
            this.total_seconds = 1800;
            clearInterval(this.timerInterval);
            this.$emit('finish');
        },
    },
});
</script>

<style lang="scss" scoped>
@import '../styles/_constants.scss';

.wrapper {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 10px;
}

nav {
    height: 117px;
    width: 100%;
    background: $secondary-bg;
    border-radius: $general-border-radius;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    color: $primary-bg;
    font-weight: bold;
}

.questions {
    width: 100%;
    min-height: 50vh;
    // background: #000;
    padding: 30px 0;

    display: flex;
    flex-direction: column;
    gap: 20px;

    .btn-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        height: 8vh;
    }

    .question-card {
        width: 100%;
        height: $card-height;
        background: $secondary-bg;
        border-radius: $general-border-radius;
        padding: 30px;
        color: $primary-bg;

        .question {
            font-weight: bold;
            margin-bottom: 10px;
        }
        label {
            margin-left: 10px;
            font-size: 1.2rem;
        }
        .answer {
            margin: 10px 0;
            cursor: pointer;

            &:active {
                font-weight: bold;
            }

            &-selected {
                color: magenta;
            }
        }
    }
}
</style>
