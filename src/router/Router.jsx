import MainPage from "../pages/main/MainPage";
import ChartPage from "../pages/chart/ChartPage";
import RecordPage from "../pages/record/RecordPage";
import SummaryPage from "../pages/summary/SummaryPage";

import { router_type } from "./routerType";

export const ROUTES = {
  MAIN: {
    path: router_type.main.path,
    link: router_type.main.link,
    element: <MainPage />,
  },

  CHART: {
    path: router_type.chart.path,
    link: router_type.chart.link,
    element: <ChartPage />,
  },

  RECORD: {
    path: router_type.record.path,
    link: router_type.record.link,
    element: <RecordPage />,
  },

  SUMMARY: {
    path: router_type.summary.path,
    link: router_type.summary.link,
    element: <SummaryPage />,
  },
};

export const ROUTER_ARR = Object.value(ROUTES);
