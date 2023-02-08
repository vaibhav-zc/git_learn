<template>
  <div class="content-box">
    <h3>{{ filldata.title }}</h3>
    <p>{{ filldata.description }}</p>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
// import Title from "@/components/title.vue";
// import Description from "@/components/description.vue";

export default {
  name: "ContentBox",
  //   props: {
  //     localTitle: String,
  //     localDescription: String,
  //   },
  data() {
    return {
      localTitle: "",
      localDescription: "",
    };
  },
  mounted() {},
  computed: {
    ...mapGetters({
      filldata: "App/filldata",
    }),
  },
  methods: {},
};
</script>

<style>
.content-box {
  text-align: center;
}
h3 {
  text-align: center;
  font-size: xx-large;
  height: fit-content;
  width: fit-content;
}
</style>