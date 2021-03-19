<template>
  <div class="card d-flex flex-row">
    <div class="row">
      <div class="card-header">
        <div class="card-header-text">
          {{isNaN(index) ? '' : `Persona #${index} - `}}<i class="hl-color-purple">{{ data.name }}</i>,<br>
          <i class="hl-color-purple">{{ data.age }}</i> year old <i class="hl-color-purple">{{ data.job }}</i>
        </div>
        <div class="flex-center">
          <img :alt="data.name" :src="require('@/assets/images/' + data.picture)">
        </div>
      </div>
      <div class="col-sm-1 card-button-open"></div>
      <div class="col-sm-5 card-body d-flex flex-column">
        <div>
          <div class="d-flex flex-row justify-content-start">
            <section>
              What {{ data.gender === 'male' ? 'he' : 'she' }} likes:
              <ul>
                <li v-for="like in data.likes" :key="like">{{ like }}</li>
              </ul>
            </section>
            <section>
              What {{ data.gender === 'male' ? 'he' : 'she' }} doesn't like:
              <ul>
                <li v-for="dislike in data.dislikes" :key="dislike">{{ dislike }}</li>
              </ul>
            </section>
          </div>
          <p>{{ data.description }}</p>
        </div>
      </div>
    </div>
    <div class="col-sm-1 card-button-open-end"></div>
    <!-- <div>
      (Open icon)
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Persona",
  props: {
    index: Number,
    data: {
      name: String,
      age: Number,
      job: String,
      picture: String,
      gender: String,
      likes: Array,
      dislikes: Array,
      description: String
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #2A2A2A;
  border-radius: 15px;
  overflow: hidden;

  margin-bottom: 25px;

  /* top left, top right, bottom right, bottom left */
  clip-path: polygon(0% 0%, 400px 0%, 400px 100%, 0% 100%);
  transition-duration: 0.5s;
}

.card-body {
  opacity: 0;
  transition-duration: 0.5s;
}

.card:hover {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  transition-duration: 0.5s;
}

.card:hover .card-body {
  opacity: 1;
  transition-duration: 0.5s;
}

.card-button-open-end {
  right: 0% !important;
}

.card-button-open, .card-button-open-end {
  height: 100%;
  max-width: 15px;
  
  background-color:black;
  background-image: 
    repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.8),
      rgba(122, 11, 126, 0.8) 25px,
      transparent 50px,
      transparent 50px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.8),
      rgba(122, 11, 126, 0.8) 25px,
      transparent 50px,
      transparent 50px
    );

  backface-visibility: visible !important;
  transition-duration: 0.5s;
}

.card:hover .card-button-open {
  opacity: 0;
  transition-duration: 0.1s;
}

.flex-center {
  display: flex;

  width: 100%;

  justify-content: center;
  align-items: center;
}

.card-header-text {
  margin: auto;
  text-align: center;
}

img {
  display: block;

  max-width: 325px;
  max-height: 500px;

  margin: auto;
}

.card-header {
  background-color: white;
  border: none;
  margin: 15px;
}
</style>
