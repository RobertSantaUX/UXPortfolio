<template>
  <main class="d-flex flex-column align-items-center">
    <p class="paragraph-1">
      Hi, I am <b class="hl-color-purple">Róbert Sánta</b>, an aspiring UX Designer, currently based in Hungary.
    </p>
    <p class="paragraph-2">
      This is my page to showcase my work and to introduce myself.<br> Feel free to look around!
    </p>
    <div class="d-flex flex-row justify-content-center align-items-end">
      <router-link to="/introduction" class="m-4 card card-about border-rounded d-flex flex-column justify-content-end">
        <div class="card-footer element-dark text-center" >About me</div>
      </router-link>
      <router-link to="/projects" class="m-4 card card-projects border-rounded d-flex flex-column justify-content-end">
        <div class="card-footer element-dark text-center">My projects</div>
      </router-link>
      <router-link to="/contact" class="m-4 card card-contact border-rounded d-flex flex-column justify-content-end">
        <div class="card-footer element-dark text-center">Contact me</div>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style scoped>
.paragraph-1 {
  font-size: 40px;
  line-height: 49px;
  margin: 1em 0;
  width: 80%;
}

.paragraph-2 {
  font-size: 34px;
  line-height: 41px;
  margin-bottom: 1em;
  width: 50%;
}

.card {
  overflow: hidden;
  text-decoration: inherit;
  border: none;
  -webkit-box-shadow: 0 0 1em -0.3px rgba(0,0,0,1);
  -moz-box-shadow: 0 0 1em -0.3em rgba(0,0,0,1);
  box-shadow: 0 0 1em -0.3em rgba(0,0,0,1);
  transition: transform .4s;
}

.card:hover {
  transform: scale(1.02);
  letter-spacing: 0.2em;
  -webkit-box-shadow: 0 0 1em -0.1px rgba(0,0,0,1);
  -moz-box-shadow: 0 0 1em -0.1em rgba(0,0,0,1);
  box-shadow: 0 0 1em -0.1em rgba(0,0,0,1);
}

.card-about {
  width: 25vw;
  height: 19vw;
  font-size: 1.8vw;
  line-height: 2vw;
  background: transparent url('~@/assets/images/intro.jpg') 50% 35% / 100% auto no-repeat padding-box;
}

.card-projects {
  width: 37vw;
  height: 25vw;
  font-size: 2.3vw;
  line-height: 2.5vw;
  background: transparent url('~@/assets/images/projects.jpeg') 50% 50% / 100% 100% no-repeat padding-box;
}

.card-contact {
  width: 25vw;
  height: 19vw;
  font-size: 1.8vw;
  line-height: 2vw;
  background: transparent url('~@/assets/images/live-chat-apps.jpg') 50% 50% / auto 100% no-repeat padding-box;
}
</style>
