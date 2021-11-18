import React from 'react';

//Courses
const ListCoursesComponent = React.lazy(() => import('./views/administration/course/list/'))
const CreateCoursesComponent = React.lazy(() => import('./views/administration/course/create/'))
const EditCoursesComponent = React.lazy(() => import('./views/administration/course/edit/'))
const DeleteCoursesComponent = React.lazy(() => import('./views/administration/course/delete/'))

//Class
const ListClassComponent = React.lazy(() => import('./views/administration/class/list/'))
const CreateClassComponent = React.lazy(() => import('./views/administration/class/create/'))
const EditClassComponent = React.lazy(() => import('./views/administration/class/edit/'))
const DeleteClassComponent = React.lazy(() => import('./views/administration/class/delete/'))

//Registration
const ListMatriculateComponent = React.lazy(() => import('./views/administration/matriculate/list/'))
const CreateMatriculateComponent = React.lazy(() => import('./views/administration/matriculate/create/'))
const EditMatriculateComponent = React.lazy(() => import('./views/administration/matriculate/edit/'))
const DeleteMatriculateComponent = React.lazy(() => import('./views/administration/matriculate/delete/'))

//Student
const ListStudentComponent = React.lazy(() => import('./views/administration/student/list/'))
const CreateStudentComponent = React.lazy(() => import('./views/administration/student/create/'))
const EditStudentComponent = React.lazy(() => import('./views/administration/student/edit/'))
const DeleteStudentComponent = React.lazy(() => import('./views/administration/student/delete/'))


const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/administration/course/list', name: 'Consultar', component: ListCoursesComponent },
  { path: '/administration/course/create', name: 'Criar', component: CreateCoursesComponent },
  { path: '/administration/course/edit:id', exact: true, name: 'Editar', component: EditCoursesComponent },
  { path: '/administration/course/delete', name: 'Deletar', component: DeleteCoursesComponent },

  { path: '/administration/class/list', name: 'Consultar', component: ListClassComponent },
  { path: '/administration/class/create', name: 'Criar', component: CreateClassComponent },
  { path: '/administration/class/edit:id', exact: true, name: 'Editar', component: EditClassComponent },
  { path: '/administration/class/delete', name: 'Deletar', component: DeleteClassComponent },

  { path: '/administration/matriculate/list', name: 'Consultar', component: ListMatriculateComponent },
  { path: '/administration/matriculate/create', name: 'Criar', component: CreateMatriculateComponent },
  { path: '/administration/matriculate/edit:id', exact: true, name: 'Editar', component: EditMatriculateComponent },
  { path: '/administration/matriculate/delete', name: 'Deletar', component: DeleteMatriculateComponent },


  { path: '/administration/student/list', name: 'Consultar', component: ListStudentComponent },
  { path: '/administration/student/create', name: 'Criar', component: CreateStudentComponent },
  { path: '/administration/student/edit:id', exact: true, name: 'Editar', component: EditStudentComponent },
  { path: '/administration/student/delete', name: 'Deletar', component: DeleteStudentComponent },



  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
