// Page list
const HOME_PAGE = 'HomePage';
const FRONT_HOME_PAGE = 'FrontHomePage';

// Reference to export
export const FIRST_PAGE_RUN = HOME_PAGE;
export const MAIN_PAGE = FRONT_HOME_PAGE;

export const ROOT_MENU: any[] = [
  { title: 'Home', component: FIRST_PAGE_RUN },
  { title: 'Front', component: FRONT_HOME_PAGE },
];
