<template>
  <div>{{ time }}</div>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",
  props: {
    format: { type: String, default: "HH:mm:ss" }
  },
  data: function() {
    return { time: null };
  },
  mounted: function() {
    let callback = () => this.time = moment().format(this.format)
    callback();
    this.timerId = setInterval(callback, 1000);
  },
  beforeDestroy: function() {
    clearInterval(this.timerId);
  }
}
</script>

<style scoped>
div { display: inline-block; font-size: 15pt; padding:3px 12px; border: 1px solid gray; }
</style>