<template>
  <div>
<!--    <Toast />-->

    <div class="card">
      <PrimeSteps :model="items" aria-label="Form Steps" />
    </div>

    <router-view v-slot="{Component}" :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogIn from "@/components/LogIn.vue";

export default defineComponent({
  name: "AmsSteps",
  computed: {
    LogIn() {
      return LogIn
    }
  },
  data() {
    return {
      items: [
        {
          label: 'login',
          to: '/login'
        },
        {
          label: 'about',
          to: '/about'
        },
        // {
        //   label: 'Payment',
        //   to: '/payment'
        // },
        // {
        //   label: 'Confirmation',
        //   to: '/confirmation'
        // }
      ],
      formObject: {}
    }
  },
  methods: {
    nextPage(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }

      this.$router.push(this.items[event.pageIndex + 1].to);
    },
    prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
    },
    complete() {
      alert("successful")
      // this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
    }
  }
})
</script>

<style scoped>
::v-deep(b) {
  display: block;
}

::v-deep(.p-card-body) {
  padding: 2rem;
}
</style>