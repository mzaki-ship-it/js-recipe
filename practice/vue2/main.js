new Vue({
    el: '#v-if',
    data: {
      seen: false
    },
    methods: {
      hyouji: function () {
        this.seen = true
      }
    }
  })
  new Vue({
    el: "#v-if-sign-in",
    data: {
      user: null
    },
    methods: {
      signIn() {
        this.user = {
          name: "ギーク太郎"
        }
      },
      signOut() {
        this.user = null
      }
    },
  });
  new Vue({
    el: "#v-for",
    data: {
      animals: ["ふらみんご", "ごりら", "らいおん"],
    }
  })
  new Vue({
    el: "#v-for-push",
    data: {
      animals: ["ふらみんご", "ごりら", "らいおん"],
    },
    methods: {
      addAnimal: function () {
        this.animals.push("んらいおん")
      },
    },
  })
  new Vue({
    el: "#v-bind",
    data: {
      helloClass: "hello",
    },
  })  