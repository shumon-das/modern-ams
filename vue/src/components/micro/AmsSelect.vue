<template>
  <PDropdown
      v-if="selectData"
      v-model="selectedOption"
      :options="selectData"
      optionLabel="name"
      :placeholder="placeholder"
      @change="getSelectedOption()"
  />
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AmsSelect",
  emits: ["selectResult"],
  data() {
    return {
      placeholder: "Select a city",
      selectedOption: {name: String, code: String},
      selectData: [],
    };
  },
  methods: {
    getSelectedOption() {
      this.$emit("selectResult", this.selectedOption.name);
    },
    getSelectData() {
      const response = fetch("https://127.0.0.1:8000/select-data");
      response
        .then((data) => data.json())
        .then((data) => this.selectData = data)
    },
  },
  mounted() {
    this.getSelectData();
  },
})
</script>

<style scoped>

</style>