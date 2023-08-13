<template>
  <div class="card">
    <h3>Vertical Bar</h3>
    <Chart type="bar" :data="verticalChartData" :options:="verticalChartOptions" class="h-30rem" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "VerticalChart",
  data() {
    return {
      verticalChartData: {},
      verticalChartOptions: {},
    };
  },
  mounted() {
    this.verticalChartData = this.setVerticalChartData();
  },
  methods: {

    setVerticalChartData() {
      // const documentStyle = getComputedStyle(document.documentElement);

      return {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        datasets: [
          {
            label: ["Asset"],
            data: [10, 20, 0, 0, 50],
            // backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            // borderColor: documentStyle.getPropertyValue('--blue-500'),
          },
          {
            label: ["Risk"],
            data: [10, 20, 60, 90, 30],
          },
        ],
      }
    },

  },
})
</script>
