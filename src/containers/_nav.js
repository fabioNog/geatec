import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Administração']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Cursos',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gerenciar',
        to: '/administration/course/list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cadastrar',
        to: '/administration/course/create',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Turmas',
    route: '/buttons',
    icon: 'cil-spreadsheet',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gerenciar',
        to: '/administration/class/list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cadastrar',
        to: '/administration/class/create',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Lista de Presença',
        to: '/administration/classe/presencelist',
      },

    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Matrículas',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gerenciar',
        to: '/administration/matriculate/list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cadastrar',
        to: '/administration/matriculate/create',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Alunos',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gerenciar',
        to: '/administration/student/list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cadastrar',
        to: '/administration/student/create',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Fórum',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gerenciar',
        to: '/base/breadcrumbs',
      }
    ]
  },

  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Conteúdo'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Avaliações',
    route: '/pages',
    icon: 'cil-align-left',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gerenciar',
        to: '/login',
      }
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Atividades Extras',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gerenciar',
        to: '/login',
      }
      
    ],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Desempenho'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Boletins',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gerenciar',
        to: '/login',
      }
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Certificados',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gerenciar',
        to: '/login',
      }
      
    ],
  },
]

export default _nav
