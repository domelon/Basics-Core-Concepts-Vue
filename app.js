const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn VUE',
            vueLink: 'https://vuejs.org/'
        }
    }
});

app.mount('#user-goal');