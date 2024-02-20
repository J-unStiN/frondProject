import { createRouter, createWebHistory } from 'vue-router';
import HeaderComponent from '../components/HeaderComponent';
import LoginComponent from '../components/LoginComponent'
import SignupComponent from '../components/SignupComponent'
import ModalLoginComponent from '../components/ModalLoginComponent'
import ModalSignupComponent from '../components/ModalSignupComponent'
import ModalComponent from '../components/ModalComponent'
import NotLoginMainComponent from '../components/NotLoginMainComponent'




const routes = [
    { path: '/', redirect: '/notlogin', },
    { path: '/header', component: HeaderComponent, },
    { path: '/login', component: LoginComponent, },
    { path: '/signup', component: SignupComponent, },
    { path: '/modallogin', component: ModalLoginComponent, },
    { path: '/modalsignup', component: ModalSignupComponent, },
    { path: '/modal', component: ModalComponent, },
    { path: '/notlogin', component: NotLoginMainComponent, },
    
  ];
  
  export default createRouter({
    history: createWebHistory(),
    routes,
  });