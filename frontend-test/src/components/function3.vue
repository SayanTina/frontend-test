<template>
  <v-container>
    use case<br>
    [] <br>
    [1] // 1<br>
    [1,2,3] // 2<br>
    [1,1] // 1<br>
    [1,2,3,4,5,6] // 5<br>
    [1,5,3,2,5,10] // 5<br>
    [100,5,3,2,99] // 99<br>
    [35,5,3,2,5,100] // 35<br>
    [1,5,101,2,5,10] // 10<br>
    [10,10,9] // 9<br><br>
    output<br>
    {{findSecoundMax([])}}<br>
    {{findSecoundMax([1])}}<br>
    {{findSecoundMax([1,2,3])}}<br>
    {{findSecoundMax([1,1])}}<br>
    {{findSecoundMax([1,2,3,4,5,6])}}<br>
    {{findSecoundMax([1,5,3,2,5,10])}}<br>
    {{findSecoundMax([100,5,3,2,99])}}<br>
    {{findSecoundMax([35,5,3,2,5,100])}}<br>
    {{findSecoundMax([1,5,101,2,5,10])}}<br>
    {{findSecoundMax([10,10,9])}}
  </v-container>
</template>

<script>
  export default {
    name: 'function3',
    computed: {
    },

    methods: {
      findSecoundMax(input) {
        if(input.length === 0 ) return null
        else if(input.length === 1 ) return input[0]
        else {
          let temp = input.sort(function(a, b){return b - a});
          let max = temp[0];
          let sec_max = temp[0];
          for(var i=1;i< temp.length;i++){
            if(temp[i] < max) {
             sec_max = temp[i]
             break;
            }
          }
          return sec_max;
        }
      }
    },
  }
</script>
