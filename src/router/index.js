import { createRouter, createWebHistory } from 'vue-router'
import NewEmployee from '../views/NewEmployee.vue'
import AllEmployee from '../views/AllEmployee'
import UpdateEmployee from '../views/UpdateEmployee'


const routes = [
  {
    path: '/newemployee',
    name: 'newEmployee',
    component: NewEmployee
  },
  {
    path: '/employee',
    name: 'employee',
    component: AllEmployee
  },
  {
    path: '/update',
    name: 'updateEmployee',
    component: UpdateEmployee
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
