import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AppointmentsView from '../views/AppointmentsView.vue';
import DocumentsView from '../views/DocumentsView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/appointments', name: 'Appointments', component: AppointmentsView },
  { path: '/documents', name: 'Documents', component: DocumentsView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
