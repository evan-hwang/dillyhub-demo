import Vue from 'vue';
import Router from 'vue-router';

// Routes
import paths from './paths';

function route (path, view, name, children) {
  children = children || []
  return {
    name: name || view,
    path,
    component: (resovle) => import(
      `@/views/${view}.vue`
    ).then(resovle),
    children: children.map(child => route(child.path, child.view, child.name, child.children))
  }
}

Vue.use(Router)

// Create a new router
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: paths.map(path => route(path.path, path.view, path.name, path.children)).concat([
    { path: '*', redirect: '/' }
  ])
});