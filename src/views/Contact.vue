<template>
  <main class="d-flex flex-column">
    <section id="socials-section" class="d-flex flex-column align-items-center">
      <h1>Want to chat with me about anything UX? Feel free to get in touch!</h1>
      <h2>Reach out on my socials:</h2>
      <div class="d-flex flex-column flex-lg-row justify-content-center align-items-stretch">
        <a v-for="(social, i) in socials" :key="i" :href="social.link"
           class="d-flex justify-content-between align-items-center mt-3 mb-3 mt-lg-0 mb-lg-0 ml-4 mr-4 position-relative logo not-link">
          <img :alt="social.name" :src="social.logo && require('@/assets/images/' + social.logo)"
               width="57" height="57" class="float-left ml-4 mr-4 ml-lg-0 mr-lg-0">
          <span class="d-inline-block d-lg-none float-right mr-4">{{social.name}}</span>
          <span class="d-none d-lg-flex logo-overlay" :style="{'border-radius': social.borderRadius}"></span>
        </a>
      </div>
    </section>
    <section id="form-section" class="flex-grow-1">
      <h2>Or write a message:</h2>
      <form :action="contactFormHandler" method="post" class="w-100 w-lg-75 w-xl-50 pl-1 pr-1 pl-lg-5 pr-lg-5 pt-lg-4">
        <label for="name">Your name</label>
        <input id="name" type="text" name="name" required
               class="form-control" placeholder="Type your name here...">
        <label for="email">Your email</label>
        <input id="email" type="email" name="email" required
               class="form-control" placeholder="Type your email here...">
        <label for="subject">Subject</label>
        <input id="subject" type="text" name="subject"
               class="form-control" placeholder="What are you writing to me about?">
        <label for="message">Message</label>
        <textarea id="message" name="message" required
                  rows="6" class="form-control" placeholder="Type your message here..."/>
        <input type="hidden" name="_gotcha">
        <button type="submit" class="btn btn-dark">Send</button>
      </form>
    </section>
  </main>
</template>

<script>
import config from "@/config.js";
import socials from "@/assets/data/socials.json";

export default {
  name: "Contact",
  data: function () {
    return {
      socials,
      contactFormHandler: config.CONTACT_FORM_HANDLER
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
  background-color: white;

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
  margin: 0.8em 0;
  padding-left: 1em;
  padding-right: 1em;
}

button[type="submit"]:hover {
  background-color: #2A2A2A;
  border: 1px solid #4B006E;
}

.logo {
  border-left: 2px solid #4B006E;
  border-right: 2px solid #4B006E;
}

@media (min-width: 992px) {
  .logo {
    border: none;
  }

  .logo .logo-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    background-color: transparent;
    transition: background-color ease-in-out .2s;
  }

  .logo:hover .logo-overlay {
    background-color: #0000004D;
  }

  .logo .logo-overlay:after {
    content: "→";
    font-size: 1.4em;
    font-weight: bold;
    color: white;
    transform: scaleX(0);
    transform-origin: left;
    transition: ease-in-out .2s;
  }

  .logo:hover .logo-overlay:after {
    transform: scaleX(1);
  }
}
</style>
