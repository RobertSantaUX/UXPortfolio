<template>
  <main class="d-flex flex-column">
    <section id="socials-section">
      <h1>Want to chat with me about anything UX? Feel free to get in touch!</h1>
      <h2>Reach out on my socials:</h2>
      <div class="d-flex flex-row justify-content-center">
        <a v-for="social in socials" :key="social" :href="social.link" class="ml-4 mr-4">
          <img :alt="social.name" :src="social.logo && require('@/assets/images/' + social.logo)" width="57" height="57">
        </a>
      </div>
    </section>
    <section id="form-section" class="flex-grow-1">
      <h2>Or write a message:</h2>
      <form>
        <label for="name">Your name</label>
        <input id="name" type="text" class="form-control" placeholder="Type your name here...">
        <label for="email">Your email</label>
        <input id="email" type="email" class="form-control" placeholder="Type your email here...">
        <label for="subject">Subject</label>
        <input id="subject" type="text" class="form-control" placeholder="What are you writing to me about?">
        <label for="message">Message</label>
        <textarea id="message" rows="6" class="form-control" placeholder="Type your message here..."/>
        <button type="submit" class="btn btn-dark">Send</button>
      </form>
    </section>
  </main>
</template>

<script>
import socials from "@/assets/data/socials.json";

export default {
  name: "Contact",
  data: function () {
    return {
      socials
    }
  }
}
</script>

<style scoped>
#socials-section {
  background-color: #FFFFFF59;
}

#form-section {
  background-color: #2A2A2A0A;
  margin-top: 1em;
}

h1 {
  font-weight: bold;
  margin: 1em 0;
}

h2 {
  font-size: 36px;
  line-height: 44px;
  margin: 0.5em 0;
}

form {
  margin: auto;
  width: 50%;
  background-color: white;
  padding: 1em 2em;
  box-shadow: 1px 3px 9px #00000029;
}

label {
  font: italic normal normal 24px/29px Corbel;
  float: left;
  margin-top: 0.8em;
}

input, textarea {
  font: italic normal 300 26px/32px Corbel;
  background-color: #E6E6E6;
  color: #2A2A2A;
  border-style: none none solid none;
  border-bottom-color: #4B006E;
  border-bottom-width: 2px;
}

button[type="submit"] {
  font: normal normal normal 28px/35px Corbel;
  background-color: #4B006E;
  color: #E6E6E6;
  box-shadow: 2px 2px 5px #00000054;
  margin-top: 0.8em;
  padding-left: 1em;
  padding-right: 1em;
}
</style>
