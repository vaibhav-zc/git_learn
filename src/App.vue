<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link
        :to="`/${lang}`"
        v-for="lang in languages"
        :key="lang"
        @click.native="getdata(lang)"
        >{{ lang }}</router-link
      >
    </nav>
    <router-view></router-view>
    <!-- <div class="content" @click="getdata()">click</div> -->
    <ContentBox></ContentBox>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import ContentBox from "@/views/content.vue";
export default {
  mounted() {
    console.log("mounted");
  },
  data() {
    return {
      languages: ["English", "Vietnamese", "Indonesian", "Arabic"],
      currentlanguage: "English",
    };
  },
  components: {
    ContentBox,
  },
  methods: {
    // getdata() {
    //   console.log("getdata local");
    // },
    ...mapActions({
      getdata: "App/getdata",
    }),
    ...mapGetters({
      filldata: "App/filldata",
    }),
  },
};
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  height: fit-content;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 25px;
  padding: 4px;
  height: fit-content;
  width: fit-content;
}
router-link {
  display: block;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
