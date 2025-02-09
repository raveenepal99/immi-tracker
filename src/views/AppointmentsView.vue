<template>
    <div>
      <h2>Appointments</h2>
      <ul>
        <li v-for="(appointment, index) in appointments" :key="index">
          {{ appointment.date }} - {{ appointment.time }}: {{ appointment.details }}
          <button class="btn btn-danger btn-sm" @click="deleteAppointment(index)" aria-label="Delete appointment">
            Delete
          </button>
        </li>
      </ul>
      <form @submit.prevent="addAppointment">
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" v-model="newAppointment.date" id="date" class="form-control" required aria-label="Date">
        </div>
        <div class="form-group">
          <label for="time">Time</label>
          <input type="time" v-model="newAppointment.time" id="time" class="form-control" required aria-label="Time">
        </div>
        <div class="form-group">
          <label for="details">Details</label>
          <input type="text" v-model="newAppointment.details" id="details" class="form-control" required aria-label="Details">
        </div>
        <button class="btn btn-primary mt-3" type="submit" aria-label="Add appointment">Add Appointment</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppointmentsView",
    data() {
      return {
        appointments: [
        ],
        newAppointment: { date: "", time: "", details: "" },
      };
    },
    methods: {
      addAppointment() {
        if (
          this.newAppointment.date &&
          this.newAppointment.time &&
          this.newAppointment.details
        ) {
          this.appointments.push({ ...this.newAppointment });
          this.newAppointment = { date: "", time: "", details: "" };
        }
      },
      deleteAppointment(index) {
        this.appointments.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  </style>
  