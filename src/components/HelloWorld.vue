<template>
  <div class="content container d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center row">
      <h1 class="d-none">Magic Cleaner</h1>
      <div class="mx-auto col-12 d-flex justify-content-center">
        <img src="../assets/unnamed.png" alt="" height="90px" width="90px">
      </div>
      <h3 class="col-12 col-sm-10 col-xl-7 col-lg-8 col-md-10 text-center">{{'translate_element_1' | localize}}</h3>
      <p class="col-12 col-sm-10 col-xl-7 col-lg-8 col-md-10 text-center">{{'translate_element_2' | localize}}</p>
      <ul class="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7">
        <li>{{'translate_element_3' | localize}}</li>
        <li>{{'translate_element_4' | localize}}</li>
        <li>{{'translate_element_5' | localize}}</li>
        <li>{{'translate_element_6' | localize}}</li>
        <li>{{'translate_element_7' | localize}}</li>
      </ul>
      <div class="col-12 col-xl-7 col-lg-8 col-md-10 col-sm-10 foot">
        <ol>
          <li>{{'translate_element_8' | localize}}</li>
          <li>{{'translate_element_9' | localize}}</li>
        </ol>
        <a href="https://www.google.com/" class="text-center d-block w-100">{{'translate_element_10' | localize}}</a>
      </div>
      <div class="custom-control custom-switch">
        <label class="en">en</label>
        <input type="checkbox" class="custom-control-input" id="customSwitch1" v-model="isRuLocale">
        <label class="custom-control-label" for="customSwitch1">ru</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    isRuLocale: true
  })
}

localStorage.setItem("greeted", true);
if (localStorage.getItem("greeted") !== true)
  alert("Пам пам")

var inactivityTime = function () {
  var time;
  window.onload = resetTimer;
  document.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onmousedown = resetTimer;
  document.ontouchstart = resetTimer;
  document.onclick = resetTimer;
  document.onkeydown = resetTimer;
  document.addEventListener('scroll', resetTimer, true);
    
  function logout() {
    window.location.href = 'https://www.google.com/';
  }

  function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 10000)
  }
};
window.onload = function() {
  inactivityTime(); 
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 4px;
  opacity: 0.6;
}
p {
  font-size: 14px;
  margin-top: 8px;
  padding-left: 0;
  padding-right: 0;
}
ul {
  list-style: none;
  padding-left: 0;
  padding-right: 0;
  font-size: 14px;
  li {
    margin-bottom: 4px;
    &::before {
      content: "\2605 ";
    }
    &:last-child {
      margin-bottom: 0;
    }
    p{
      margin: 0;
    }
  }
}
.foot {
  background-color: #eeeeee;
  border-radius: 8px;
  border: 1px solid #cccccc;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  ol {
    color: #224b7a;
  }
  a {
    padding: 4px;
    background-color: #224b7a;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 900;
    &:hover {
      text-decoration: none;
    }
  }
}
.custom-control {
  position: absolute;
  top: 8px;
  right: 16px;
}
#customSwitch1 {
  position: unset;
}
.en {
  position: absolute;
  left: -5px;
}
@media all and (max-width: 576px) {
  .container {
    width: unset;
  }
  .content {
    margin: 8px;
  }
  h3, p, ul, .foot {
    font-size: 12px;
  }
}
@media all and (min-width: 576px) {
  .content {
    height: 100%;
    min-height: 500px;
  }
}
@media all and (max-width: 768px) {
  .content {
    margin-top: 8px;
    margin-bottom: 8px;
    height: unset;
  }
}
</style>
