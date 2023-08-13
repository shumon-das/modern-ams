<template>
  <div class="grid">
    <div class="col-4">
      <BasicChart />
    </div>

    <div class="col-4">
      <VerticalChart />
    </div>

    <div class="col-4">
      <HorizontalChart />
    </div>

    <div class="col-4">
      <StackedBarChart />
    </div>

    <div class="col-4">
      <DoughnutChart />
    </div>

    <div class="col-4">
      <PieChart />
    </div>

    <div class="col-4">
      <LineChart />
    </div>

    <div class="col-4">
      <LineStyleChart />
    </div>

    <div class="col-4">
      <PolarChart />
    </div>

    <div class="col-4">
      <RadarChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AmsCharts",
});
</script>
