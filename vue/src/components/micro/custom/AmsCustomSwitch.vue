<template>
    <div class="button-box">
        <div class="btn-switch" :style="this.val ? 'left: 50%' : 'left: 0%'"></div>
        <button type="button" class="toggle-btn" :class="this.val ? 'text-black' : 'text-white'" @click="updateValue(false)">
            {{ leftOption }}</button>
        <button type="button" class="toggle-btn" :class="this.val ? 'text-white' : 'text-black'" @click="updateValue(true)">
            {{ rightOption }}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AmsCustomSwitch",
    emits: ["update"],
    props: {
        leftOption: { type: String, default: "Left" },
        rightOption: { type: String, default: "Right" },
        value: { type: Boolean, default: false },
    },
    data() {
        return {
            val: this.value ? this.value : false,
        };
    },
    methods: {
        updateValue(value: boolean) {
            this.val = value;
            this.$emit("update", this.val);
        },
    },
});
</script>

<style scoped>
.button-box {
    width: 90%;
    margin: auto;
    position: relative;
    border-radius: 30px;
    background: #fff;
    border: 1px solid lightgray;
}

.toggle-btn {
    width: 50%;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
    text-align: center;
    padding: 5px 0px;
}

.btn-switch {
    position: absolute;
    width: 50%;
    height: 100%;
    background: #0d89ec;
    border-radius: 30px;
    transition: .5s;
}
</style>
