<template>
  <div class="card d-flex flex-column">
    <div>
      <div class="card-header">
        {{isNaN(index) ? '' : `Persona #${index} - `}}<i class="hl-color-purple">{{ data.name }}</i>,<br>
        <i class="hl-color-purple">{{ data.age }}</i> year old <i class="hl-color-purple">{{ data.job }}</i>
      </div>
      <div class="card-body d-flex flex-column">
        <img :alt="data.name" :src="require('@/assets/images/' + data.picture)" height="50" width="50">
        <div>
          <div class="d-flex flex-column justify-content-start">
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
    <div>
      (Open icon)
    </div>
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
}

.card-header {
  background-color: white;
  border: none;
}
</style>
