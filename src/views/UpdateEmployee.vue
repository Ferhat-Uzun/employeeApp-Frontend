<template>
    <form class="m-5" @submit.prevent="updateEmployee">
        <div class="form-group">
            <label>Employee Id</label>
            <input type="text" class="form-control" placeholder="Enter Employee Id" required v-model="employee.id" />
        </div>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" placeholder="Enter First Name" required v-model="employee.firstName" />
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model="employee.lastName" required placeholder="Enter Last Name" />
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="employee.email" required placeholder="Enter Email" />
        </div>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            employee: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
            },
        };
    },
    methods: {
        updateEmployee() {
            axios.put('http://localhost:8080/employee/updateemployee', this.employee)
                .then(response => {
                    console.log(response.data);
                    this.employee = {
                        id: '',
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