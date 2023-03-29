<template>
  <div class="container py-5">
    <h1 class="text-center">Employee App</h1>
    <div class="row">
      <div class="mt-4">
        <div class="card">
          <div class="card-header d-flex justify-content-center"><h3>Employees</h3></div>
          <div class="card-body">
            <ul class="list-group ">
              <li v-for="(employee, id) in employees" :key="id" class="list-group-item ">
                {{ employee.id }}- {{ employee.firstName }} {{ employee.lastName }}
                <span style="font-weight: bold ">Email: {{ employee.email }}</span>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-danger" @click="deleteEmployee(employee.id)">Sil</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      url: "http://localhost:8080/employee",
      employees: [],
    };
  },
  mounted() {
    axios.get(this.url).then((res) => (this.employees = res.data));
  },
  methods:{
    deleteEmployee(id){
      axios.delete(this.url+`/${id}`).then (response => {
          console.log(response.data)
          const index = this.employees.findIndex(emp => emp.id === id)
          this.employees.splice(index, 1)
      })
      }
    },
  }
</script>

<style>

</style>