<template>
  <form class="m-5" @submit.prevent="createNewEmployee">
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" placeholder="Enter First Name" required v-model="newEmployee.firstName" />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="newEmployee.lastName" required placeholder="Enter Last Name" />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="newEmployee.email" required placeholder="Enter Email" />
    </div>
    <button type="submit" class="btn btn-primary mt-2">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  name: 'NewEmployee',
  data() {
    return {
      newEmployee: {
        firstName: '',
        lastName: '',
        email: '',
      },
    };
  },
  methods: {
    createNewEmployee() {
      axios.post('http://localhost:8080/employee/add', this.newEmployee)
        .then(response => {
          console.log(response.data);
          this.newEmployee = {
            firstName: '',
            lastName: '',
            email: '',
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
}
</script>

<style></style>