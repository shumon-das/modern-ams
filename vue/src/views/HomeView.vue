<template>
  <AmsHeader />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AmsHeader from "@/views/AmsHeader.vue";

export default defineComponent({
  name: "HomeView",
  components: {AmsHeader},
});

</script>
