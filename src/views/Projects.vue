<template>
  <main class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <router-link to="/projects/content_hub" class="card border-rounded d-flex flex-column not-link">
          <div class="card-title">
            <b class="hl-color-purple">Content Hub - new app</b>
          </div>
          <div class="card-desc">
            Content Hub aggregates new pieces of online content from the user's accounts to make choosing what to do faster.
          </div>
          <div id="content-hub" class="card-thumbnail">
            <img src="@/assets/images/search.svg" alt="Search" class="card-thumbnail-overlay">
          </div>
        </router-link>
      </div>
      <div class="col-12 col-lg-6">
        <router-link to="/projects/indeed" class="card border-rounded d-flex flex-column not-link">
          <div class="card-title">
            <b class="hl-color-purple">Indeed - evaluation & redesign - <span style="color: red">IN PROGRESS</span></b>
          </div>
          <div class="card-desc">
            A two-part project: the heuristic evaluation and then the redesign of the website www.indeed.co.uk.
          </div>
          <div id="indeed" class="card-thumbnail">
            <img src="@/assets/images/search.svg" alt="Search" class="card-thumbnail-overlay">
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
#content-hub {
  background: transparent url("~@/assets/images/showcase.jpg") 50% 50% / cover no-repeat padding-box;
}

#indeed {
  background: transparent url("~@/assets/images/indeed-logo.svg") 50% 50% / 110% auto no-repeat padding-box;
  transition: background-size 600ms;
}

.card:hover #indeed {
  background-size: 125% auto;
  transition: background-size 600ms;
}

.container {
  height: 100%;
  max-width: fit-content;
  margin: 3vw 3vw 0 3vw;
}

.col {
  margin: 0 4vw 0 4vw;
}

.row {
  min-height: 40vw;
}

.card {
  width: 86%;
  height: 60%;
  font-size: 28px;
  line-height: 35px;
  margin: 0 7% 4vw 7%;
  -webkit-box-shadow: 0 0 1em -0.3px rgba(0,0,0,1);
  -moz-box-shadow: 0 0 1em -0.3em rgba(0,0,0,1);
  box-shadow: 0 0 1em -0.3em rgba(0,0,0,1);
  transition: transform 600ms;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-0.2em);
  -webkit-box-shadow: 0 0 1em -0.1px rgba(0,0,0,1);
  -moz-box-shadow: 0 0 1em -0.1em rgba(0,0,0,1);
  box-shadow: 0 0 1em -0.1em rgba(0,0,0,1);
}

.card-title {
  margin-bottom: 0;
  font-size: 34px;
  line-height: 41px;
}

.card-desc {
  max-height: 100%;
  margin: 0.5em 1em;
  color: inherit;
  transition: color 200ms ease-in 0ms, max-height 600ms ease-in, margin-bottom 600ms, margin-top 600ms;
}

.card:hover .card-desc {
  max-height: 0;
  margin: 0 1em;
  color: transparent;
  transition: color 200ms ease-out 0ms, max-height 800ms cubic-bezier(0, 1, 0, 1), margin-bottom 800ms ease-out, margin-top 800ms ease-out;
}

.card-thumbnail {
  width: 100%;
  flex: 1 1 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.card-thumbnail:after {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2A2A2A66;
  opacity: 0;
  transition: opacity 400ms;
}

.card:hover .card-thumbnail:after {
  opacity: 1;
  transition: opacity 600ms;
}

.card-thumbnail-overlay {
  height: 8vw;
  width: 8vw;
  z-index: 1;
  filter: invert(98%) sepia(45%) saturate(4454%) hue-rotate(192deg) brightness(137%) contrast(80%);
  opacity: 0;
  transition: opacity 400ms;
}

.card:hover .card-thumbnail-overlay {
  opacity: 1;
  transition: opacity 600ms;
}
</style>
