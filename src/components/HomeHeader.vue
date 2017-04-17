<template>
  <div class="work">
    <div class="work-header">
      <span>Programming for</span>
      <h1>Frontend & backend</h1>
      <p>every day</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work'
}
</script>

<style scoped>
.work-header {
  background-image: url(../assets/image/workBg.jpg);
  height: 485px;
  background-size: 100%;
  margin: 0;
}

span {
  text-align: center;
  font-family: "BitterRegular",Georgia,serif;
  display: block;
  color: white;
  padding-top: 180px;
  margin-bottom: 15px;
  font-size: 1.25em;
}

h1 {
  font-family: "NovecentowideBookBold",Arial,sans-serif;
  font-size: 3.6em;
  color: white;
  text-align: center;
  margin: 0 0 25px 0;
}

p {
  display: block;
  max-width: 500px;
  text-align: center;
  margin: 0 auto 15px auto;
  font-family: "BitterRegular",Georgia,serif;
  line-height: 1.7em;
  color: white;
  font-size: 0.9em;
  text-transform: uppercase;
}

p::before, p::after {
    content: "";
    display: block;
    border-top: 1px solid rgb(255, 255, 255);
    max-width: 220px;
    width: 31%;
    margin-top: 11px;
    opacity: 0.3;
}

p::before {
  float: left;
}

p::after {
  float: right;
}
</style>
