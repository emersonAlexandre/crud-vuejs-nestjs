import Vue from 'vue'
import Router from 'vue-router'
const Pessoas = () => import('./views/Pessoas.vue')
const About = () => import('./views/About.vue')
const FormPessoa = () => import('./components/FormPessoa.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pessoas',
      name: 'pessoas',
      component: Pessoas
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/new',
      name: 'pessoaNew',
      component: FormPessoa,
      meta: {
        title: 'Nova Pessoa'
      }
    },
    {
      path: '/edit',
      name: 'pessoaEdit',
      component: FormPessoa,
      props: true,
      meta: {
        title: 'Editar Pessoa'
      }
    }
  ]
})
