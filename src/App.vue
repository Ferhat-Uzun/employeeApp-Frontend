<template>
  <nav class="d-flex justify-content-center">
    <router-link :to= "{name: 'newEmployee'}">Add New Employee</router-link>
    <router-link :to= "{name: 'employee'}">All Employees</router-link>
    <router-link :to= "{name: 'updateEmployee'}">Update Employee</router-link>  
  </nav>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: blue;
}
</style>
