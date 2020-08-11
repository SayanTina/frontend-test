<template>
  <v-container>
    <br />Date 2020-08-10T14:54:52+07:00
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
      return this.date_init.getUTCDate() + "/" + this.date_init.getUTCMonth() +"/" +this.date_init.getFullYear() +
        " " +this.date_init.getUTCHours() +":" +this.date_init.getUTCMinutes()
      
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
      return this.date_init.getUTCDate() +
        " " +
        monthNamesThai[this.date_init.getUTCMonth()-1] +
        " " +
        (this.date_init.getFullYear() + 543) +
        " ";
    },
    getDayOfMonth() {
      return new Date(Date.UTC(
        this.date_init.getFullYear(),
        this.date_init.getUTCMonth(),
        0)
      ).getUTCDate();
    },
    getQuater() {
      return Math.ceil(this.date_init.getUTCMonth() / 3);
    },
    getTimestamp() {
      return this.date_init.getTime();
    }
  },
  data() {
    return {
      date_init: new Date(Date.UTC(2020,8,10,14,54,52)),
    };
  },
};
</script>
