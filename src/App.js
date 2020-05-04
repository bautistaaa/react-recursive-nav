import React from 'react';
import Sidebar from './Sidebar';

const links = [
  {
    label: 'Link',
    path: '/link',
  },
  {
    label: 'Link2',
    path: '/link2',
  },
  {
    label: 'Parent',
    children: [
      {
        label: 'Child',
        path: '/child',
      },
      {
        label: 'Child2',
        path: '/child',
      },
      {
        label: 'Child3',
        path: '/child',
      },
      {
        label: 'Child4',
        path: '/child',
      },
      {
        label: 'Child5',
        path: '/child',
      },
      {
        label: 'Child with Children',
        children: [
          {
            label: 'GrandChild 1',
            path: '/c1',
          },
          {
            label: 'GrandChild 2',
            children: [
              {
                label: 'GreatGrandChild',
                path: '/gc1',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Parent2',
    children: [
      {
        label: 'Parent2Child',
        path: '/child',
      },
      {
        label: 'Parent2Child2',
        path: '/child',
      },
    ],
  },
];

function App() {
  return (
    <div>
      <Sidebar links={links} />
    </div>
  );
}

export default App;
