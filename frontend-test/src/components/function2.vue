<template>
  <v-container>
    function2
    <br />Date form 2020-08-10T14:54:52+07:00
    <br />-----------------------------------
    <br />
    {{getDateForm}}<br>
    {{getThaiDateForm}}<br>
    {{getDayOfMonth}}<br>
    {{getQuater}}<br>
    {{getTimestamp}}
  </v-container>
</template>

<script>
export default {
  name: "function2",
  computed: {
    getDateForm() {
      return this.date_init.getUTCDate() + "/" + this.date_init.getMonth() +"/" +this.date_init.getFullYear() +
        " " +this.date_init.getHours() +":" +this.date_init.getMinutes()
      
    },
    getThaiDateForm() {
      let monthNamesThai = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤษจิกายน",
        "ธันวาคม",
      ];
      return this.date_init.getDate() +
        " " +
        monthNamesThai[this.date_init.getMonth()] +
        " " +
        (this.date_init.getFullYear() + 543) +
        " ";
    },
    getDayOfMonth() {
      return new Date(
        this.date_init.getFullYear(),
        this.date_init.getMonth(),
        0
      ).getDate();
    },
    getQuater() {
      return this.date_init.getMonth() % 3;
    },
    getTimestamp() {
      return this.date_init.getTime();
    }
  },
  data() {
    return {
      date_init: new Date("2020-08-10T14:54:52+07:00"),
    };
  },
};
</script>
