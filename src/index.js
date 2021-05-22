import { initPathRouter } from '@bjornlu/svelte-router';
import App from './App.svelte'
import Blank from './pages/Blank.svelte';
import Circle from './pages/Circle.svelte';
import Cost from './pages/Cost.svelte';
import Sheet from './pages/Sheet.svelte';
import Equals from './pages/Equals.svelte';

initPathRouter([
  { path: '/', component: Blank } ,
  { path: '/cost', component: Cost } ,
  { path: '/sheet', component: Sheet } ,
  { path: '/circle', component: Circle },
  { path: '/equals', component: Equals}
  ])

let app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
