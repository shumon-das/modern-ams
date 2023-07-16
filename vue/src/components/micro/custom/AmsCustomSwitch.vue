<template>
  <div class="switch-box flex justify-content-between">
    <button class="switch h-full text-white"
            :style="checked ? 'right: 0;' : 'left: 0'"
    >
      {{ checked ? this.optionB : this.optionA }}
    </button>
    <span class="leftRight" @click="changePosition(false)">{{ this.optionA }}</span>
    <span class="leftRight" @click="changePosition(true)">{{ this.optionB }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AmsCustomSwitch",
  emits: ["update"],
  props: {
    value: { type: Boolean, required: true },
    optionA: { type: String, default: 'Left' },
    optionB: { type: String, default: 'Right' },
  },
  data () {
    return {
      checked: this.value,
    };
  },
  methods: {
    changePosition(val: boolean) {
      this.checked = val;
      this.$emit("update", val);
    }
  },
});
</script>

<style scoped>
.switch-box {
  width: 200px;
  position: relative;
  border-radius: 30px;
  background: white;
  border: 1px solid lightgrey;
}
.switch {
  position: absolute;
  width: 100px;
  border-radius: 30px;
  background: #0d89ec;
  border: none;
  transition:all 1s linear;
}
.leftRight {
  padding: 5px 20%;
  text-align: center;
  cursor: pointer;
}
</style>