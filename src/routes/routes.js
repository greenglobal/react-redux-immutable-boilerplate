// import App from 'components/app';
import HomePage from 'components/pages/HomePage.jsx';
import Calendar from 'components/pages/Calendar.jsx';
import Document from 'components/pages/Document.jsx';
import ProcedureDetail from 'components/pages/ProcedureDetail.jsx';
import FindProcedure from 'components/pages/FindProcedure.jsx';
import FindProcedureDetail from 'components/pages/FindProcedureDetail.jsx';
import Feedback from 'components/pages/Feedback.jsx';

import RatingList from 'components/pages/RatingList.jsx';
import RatingDetail from 'components/pages/RatingDetail.jsx';
import SearchFile from 'components/pages/SearchFile.jsx';
import SearchDetail from 'components/pages/SearchDetail.jsx';

const routes = [
    {
      component: HomePage,
      exact: true,
      path: '/',
    },
    {
      component: Calendar,
      exact: true,
      path: '/calendar',
    },
    {
      component: Document,
      exact: true,
      path: '/document',
    },
    {
      component: ProcedureDetail,
      exact: true,
      path: '/procedure-detail',
    },
    {
      component: FindProcedure,
      exact: true,
      path: '/find-procedure',
    },
    {
      component: FindProcedureDetail,
      exact: true,
      path: '/find-procedure-detail',
    },
    {
      component: Feedback,
      exact: true,
      path: '/feedback',
    },
    {
      component: RatingDetail,
      exact: true,
      path: '/rating-detail',
    },
    {
      component: RatingList,
      exact: true,
      path: '/rating-list',
    },
    {
      component: SearchDetail,
      exact: true,
      path: '/search-detail',
    },
    {
      component: SearchFile,
      exact: true,
      path: '/search-file',
    }
];

export default routes;
