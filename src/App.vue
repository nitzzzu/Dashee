<template>
  <div id="app">
    <dashboard class="font-sans">
      <twitter position="a1:a24"></twitter>
      <time-weather
        position="b13:b24"
        date-format="ddd DD/MM"
        time-zone="Europe/Brussels"
        weather-city="Antwerp"
      ></time-weather>
      <message position="c13:c24"></message>
      <chart position="b1:d12"></chart>
    </dashboard>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard';
import TimeWeather from './components/TimeWeather';
import Twitter from './components/Twitter';
import Message from './components/Message';
import Chart from './components/Chart';

export default {
    name: 'app',
    components: {
        Dashboard,
        TimeWeather,
        Twitter,
        Message,
        Chart
    }
};
</script>
