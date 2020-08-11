<template>
  <v-container>
    <div v-if="loading">Loading...</div>
    <div v-if="pokemons" class="skeketon-pokemon">
      <b-row>
        <b-col cols="2" v-for="(p, index) in pokemons" :key="index">
          <div class="pokemon-card">
            <div v-bind:class="p.image == '' ? 'skeleton-pokemon-image': 'pokemon-image' ">
              <img style="display: block; margin: auto;" :src="p.image" />
            </div>
            <div v-bind:class="p.image == '' ? 'skeleton-pokemon-title': 'pokemon-title' ">
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
  name: "pokemon",
  created() {
    for(var i=1;i<=104;i++){
      this.pokemons[i-1] = { name: '', image: ''}
    }
  },
  data() {
    return {
      loading: false,
      pokemons: [],
    };
  },
  mounted() {
    var index = 1;
    this.getPokemonData(index);
    this.loading = false;
  },
  methods: {
    genURL(range) {
      var url = []
      for(var i=1;i<=range;i++){
        url[i-1] = "https://pokeapi.co/api/v2/pokemon/" + i;
      }
      return url
    },
    getPokemonData() {
      // var self = this;
      this.loading = true;
      setTimeout(1000);
      let url = this.genURL(104)
      let res = url.map(x => Axios.get(x));
      Axios.all(res)
        .then(Axios.spread((...responses) => {
          responses.forEach((x, index) => {
            this.pokemons[index] = { name: x.data.name, image: x.data.sprites.front_default}
          })
          this.pokemons = [...this.pokemons];
        }))
        .catch((error) => {
          console.log(error);
        });
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
  margin: auto;
}

.pokemon-title {
  width: 100%;
  margin-top: 10px;
  min-height: 20px;
  background: black;
  color: white;
  text-align: center;
  border-radius: 10px;
}

.skeleton-pokemon-image {
  min-height: 100px;
  width: 100%;
  margin: auto;
  background-color: #cedbd9;
  padding: 20px;
  border-radius: 10px;
}

.skeleton-pokemon-title {
  width: 100%;
  margin-top: 10px;
  min-height: 20px;
  background: #7d7d7d;
  border-radius: 10px;
}
</style>