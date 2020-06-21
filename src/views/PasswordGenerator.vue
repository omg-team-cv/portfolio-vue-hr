<template>
  <div class="body">
    <div class="inputBox">
      <h2>Random Password Generator App</h2>
      <div class="lenght" >
        <h3>Password Length</h3>
        <input class="password" type="number" v-model="passwordLenght">
        <h3>Variant</h3>
        <div class="checkbox__container">
        <div class="">
          <input type="checkbox" id="cb1" v-model="cb1.state">
          <label for="cb1">{{cb1.value}}</label>
        </div>
        <div class="">
          <input type="checkbox" id="cb2" v-model="cb2.state">
          <label for="cb2">{{cb2.value}}</label>
        </div>
        <div class="">
          <input type="checkbox" id="cb3" v-model="cb3.state">
          <label for="cb3">{{cb3.value}}</label>
        </div>
        <div class="">
          <input type="checkbox" id="cb4" v-model="cb4.state">
          <label for="cb4">{{ cb4.value }}</label>
        </div>        
        </div>
      </div>
      <input type="text" name="" placeholder="Create Password" class="password" id="pass" readonly :value="password">
      <div class="btn" v-on:click="passRand()" >Generate Password</div>
      <div class="btn btn_second" v-on:click="copyPassword()">Copy</div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    // chars: "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+?><:{}[]",
    passwordLenght: 16,
    password: '',
    cb1: {value:'0123456789', state: true},
    cb2: {value:'qwertyuiopasdfghjklzxcvbnm', state: true},
    cb3: {value:'QWERTYUIOPASDFGHJKLZXCVBNM', state: true},
    cb4: {value:'!@#$%^&*()_+?><:{}[]', state: true},
    x: ''

  }
},
methods: {
  passRand() {
    this.password = ''
    this.x = ''
    if(this.cb1.state == true){
      this.x = this.x.concat(this.cb1.value)
    }else{ this.x = this.x.concat('')}
    if(this.cb2.state == true){
      this.x = this.x.concat(this.cb2.value)
    }else{ this.x = this.x.concat('')}
    if(this.cb3.state == true){
      this.x = this.x.concat(this.cb3.value)
    }else{ this.x = this.x.concat('')}
    if(this.cb4.state == true){
      this.x = this.x.concat(this.cb4.value)
    } else{ this.x = this.x.concat('')}   
    for (let i = 0; i<this.passwordLenght; i++){
      let randomNumber = Math.floor(Math.random() * this.x.length)
      this.password += this.x.substring(randomNumber, randomNumber+1)
    }
  },
  copyPassword(){
    let copy = document.getElementById("pass")
    copy.select()      
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
  }
}

}
</script>

<style  scoped>
*{
  user-select: none;
  margin: 0;
  padding: 0;
  font-family: consolas;
}
.body{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f3f3;
}
.inputBox{
  position: relative;
  width: 450px;
}
.inputBox h2{
  font-size: 28px;
  color: #333;
}
.lenght{
  padding: 10px 10px;
}
.inputBox .password{
  position: relative;
  width: 100%;
  height: 60px;
  border: none;
  margin: 15px 0 20px;
  background: transparent;
  outline: none;
  padding: 0 20px;
  font-size: 24px;
  letter-spacing: 4px;
  box-sizing: border-box;
  border-radius: 8px;
  color: #333;
  box-shadow: -4px -4px 10px rgba(255, 255, 255,1),
              inset 4px 4px 10px rgba(0, 0, 0,0.15),
              inset -4px -4px 10px rgba(255, 255, 255,1),
               4px 4px 10px rgba(0, 0, 0,0.15);
}
.inputBox input::placeholder{
  letter-spacing: 0px;
}
.checkbox__container{
  display: block;
}
.checkbox__container input{
  margin: 15px 10px;
}
.inputBox .btn{
  position: relative;
  cursor: pointer;
  color: #fff;
  background: #333;
  font-size: 2rem;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 10px;
}
.inputBox .btn_second{
  font-size: 1.2rem;
}
.inputBox .btn:active{
  background: purple !important;
}
</style>