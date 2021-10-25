import { Blog } from '../../model/blog/blog.model';
import { EMPLOYEES } from '../employee/employee.data';

export const BLOG: Blog[] = [
  {
    key: 'what-is-open-template-hub',
    url: 'blog-1.md',
    date: '21 Oct 2021',
    title: 'What is Open Template Hub?',
    excerpt: 'We, as Open Template Hub contributors, keep developing new functionalities and capabilities every week. You can create your microservices or create your mobile and web applications which are integrated with those microservices, that means you can create your own business ground up through Open Template Hub extremely fast..',
    author: EMPLOYEES[ 1 ],
    tag: 'tech',
  },
  {
    key: 'what-is-open-template-hub-2',
    url: 'blog-1.md',
    date: '21 Oct 2021',
    title: 'What is Open Template Hub?',
    excerpt: 'We, as Open Template Hub contributors, keep developing new functionalities and capabilities every week. You can create your microservices or create your mobile and web applications which are integrated with those microservices, that means you can create your own business ground up through Open Template Hub extremely fast..',
    author: EMPLOYEES[ 0 ],
    tag: 'daily',
  },
  {
    key: 'what-is-open-template-hub-3',
    url: 'blog-1.md',
    date: '21 Oct 2021',
    title: 'What is Open Template Hub?',
    excerpt: 'We, as Open Template Hub contributors, keep developing new functionalities and capabilities every week. You can create your microservices or create your mobile and web applications which are integrated with those microservices, that means you can create your own business ground up through Open Template Hub extremely fast..',
    author: EMPLOYEES[ 2 ],
    tag: 'life',
  }
];
