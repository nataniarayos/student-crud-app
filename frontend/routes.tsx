
import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import StudentsView from './views/students/StudentsView';
import StudentProfile from './views/students/StudentProfile';
import AddStudent from './views/students/AddStudent';
import EditStudent from './views/students/EditStudent';

const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <StudentsView />, handle: { title: 'Students' } },
      { path: '/about', element: <AboutView />, handle: { title: 'About' } },
      { path: '/add-student', element: <AddStudent/>, handle: { title: 'Add Student' } },
      { path: '/student-profile/:id', element: <StudentProfile />, handle: { title: 'Student Profile' } },
      { path: '/edit-student/:id', element: <EditStudent />, handle: { title: 'Edit Student' } },
    ],
  },
];

export default createBrowserRouter(routes);
