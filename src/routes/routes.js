import HomePage from '../components/pages/HomePage.jsx';

export default function routes() {
  return {
    path: "/", component: 'HomePage',
    indexRoute: {
      component: HomePage
    },
    childRoutes: [
      {
        path: "test",
        component: 'HomePage'
      }
    ]
  };
}
