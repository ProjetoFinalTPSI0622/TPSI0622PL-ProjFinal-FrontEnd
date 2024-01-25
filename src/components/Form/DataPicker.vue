<template>
    <datepicker/>
  </template>

<script>
import Datepicker from 'vuejs3-datepicker';

export default {
    components: {
        Datepicker
    },
    data(){
        return {
            picked: new Date()
        }
    }
}
</script>