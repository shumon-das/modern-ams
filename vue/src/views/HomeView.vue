<template>
  <AmsHeader />
  <SectionOne />
  <SectionTwo />
  <SectionThree />

</template>
<script lang="ts">
import { defineComponent } from "vue";
import AmsHeader from "@/views/AmsHeader.vue";
import SectionOne from "@/components/home/SectionOne.vue";
import SectionTwo from "@/components/home/SectionTwo.vue";
import SectionThree from "@/components/home/SectionThree.vue";

export default defineComponent({
  name: "HomeView",
  components: {AmsHeader, SectionOne, SectionTwo, SectionThree},
});

</script>
