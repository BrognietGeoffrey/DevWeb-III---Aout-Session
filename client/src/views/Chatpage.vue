<!--
Fichier pour le chat - Non fonctionnel
File for the chat - Not working
-->
<template>
  <div class="chatwindow">
      <div class="messages">
          <div class="mess">
              <div class="username">

              </div>
              <div class="textmessage">

              </div>
          </div>
      </div>
      <form class="input-container" v-on:submit="sendText">
          <input type="text" v-model="msg">
          <button v-on:click="sendText" v-bind:disabled="!msg">Send</button>
      </form>
  </div>
</template>

<script>
export default {
    name:'chatpage',
    props: ['messages'],
    data : function () {
        return {
            msg:""
        }
    },
    methods : {
        sendText : function () {
            if (!this.msg) {
                alert("Please enter a message");
                return;
            }
            this.$emit("sendText", this.msg);
            this.msg = "";
        }
    }
}
</script>

<style>
.chatwindow {
	flex: 1;
	display: flex;
	flex-direction: column;
	background-color: #F9F9F9;
	box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.15);
};
.chatwindow .messages {
    flex : 1;
    overflow: scroll;

}
.chatwindow .message{
    display : flex;
    border-bottom: 1px solid #efefef;
    padding : 10px;
};
*:last-of-type {
    border-bottom: none;
};
.chatwindow .username {
    width : 100px;
    margin-right: 15px;
};
.chatwindow .textMessage {
    flex:1;
}
.input-container {
		display: flex;
}
		.input-container .input {
			flex: 1;
			height: 35px;
			font-size: 18px;
			box-sizing: border-box;
		}
		.input-container button {
			width: 75px;
			height: 35px;
			box-sizing: border-box;
		}
</style>
