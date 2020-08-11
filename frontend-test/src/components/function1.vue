<template>
  <v-container>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>Result: {{result}}</p>
    </div>
  </v-container>
</template>

<script>
// import Axios from "axios";
import exam_data from "./../../static/exam-data.json";

const concat = (x, y) => x.concat(y);

const flatMap = (f, xs) => xs.map(f).reduce(concat, []);

export default {
  name: "function1",
  data() {
    return {
      loading: false,
      exam_data: null,
      result: [],
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      this.loading = true;
      let obj_is_editable_price_false = flatMap(
        (x) => x.products,
        exam_data.filter((x) => !x.is_editable_price)
      );
      this.result = await obj_is_editable_price_false.reduce((init, obj) => {
        const key = obj["name"]
        const same = init.filter(x => x.name == key)
        if(same.length > 0) {
          same.totalSubProductWeight += obj["weight"]
        }else {
          init.push({ name: obj["name"], totalSubProductWeight: obj["weight"] })
        }
        return init
      }, []);

      this.loading = false;
    },
  },
};
</script>