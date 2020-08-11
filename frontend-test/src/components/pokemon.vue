<template>
  <v-container>
    pokemon
    <div v-if="loading">

    </div>
    <div v-if="pokemons">
      <b-row>
      <b-col cols="2" v-for="(p, index) in pokemons" :key="index">
        <div class="pokemon-card">
          <div class="pokemon-image">
            <img :src="p.image" />
          </div>
          <div class="pokemon-title">
            <p>{{p.name}}</p>
          </div>
        </div>
      </b-col>
    </b-row>
    </div>
  </v-container>
</template>

<script>
import Axios from "axios";

export default {
  name: 'pokemon',
  data() {
    return {
      loading: false,
      pokemons: []
    }
  },
  mounted() {
    var index = 1;
    do {
      this.getPokemonData(index)
      index++;
    } while (index <= 104);
    this.loading = false
  },
  methods: {
    getPokemonData(no) {
      var self = this
      this.loading = true
      let url = 'https://pokeapi.co/api/v2/pokemon/' + no
      Axios.get(url).then((response) => {
      self.pokemons.push({ name: response.data.name, image: response.data.sprites.front_default})
      this.pokemons = self.pokemons
      }).catch((error) => { console.log(error); });
    }
  },
};
</script>
<style scoped>
.pokemon-card {
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  min-height: 150px;
  overflow: hidden;
  position: relative;
}

.pokemon-image {
  width: 100%;
  min-height: 100px;
  background: #cccccc;
}

.pokemon-title {
  width: 100%;
  margin-top: 10px;
  min-height: 20px;
  background: #7d7d7d;
}
</style>