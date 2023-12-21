import { getHashId } from '../utils/helpers';

export const INITIAL_POSTS = [
  {
    id: getHashId(
      JSON.stringify({
        title: 'A Journey into JavaScript',
        slug: 'journey-into-javascript',
        content: 'In this post, we explore the fascinating world of JavaScript and its versatile applications...',
        author: 'John Doe',
      })
    ),
    title: 'A Journey into JavaScript',
    slug: 'journey-into-javascript',
    content: 'In this post, we explore the fascinating world of JavaScript and its versatile applications...',
    author: 'John Doe',
  },
  {
    id: getHashId(JSON.stringify({})),
    title: 'The Art of CSS Styling',
    slug: 'art-of-css-styling',
    content: 'Learn the art of crafting beautiful and responsive user interfaces using CSS...',
    author: 'Jane Smith',
  },
  {
    id: getHashId(
      JSON.stringify({
        title: 'Node.js: Unleashing the Power of Server-Side JavaScript',
        slug: 'nodejs-power',
        content: 'Discover the capabilities of Node.js and how it revolutionizes server-side development...',
        author: 'Sam Johnson',
      })
    ),
    title: 'Node.js: Unleashing the Power of Server-Side JavaScript',
    slug: 'nodejs-power',
    content: 'Discover the capabilities of Node.js and how it revolutionizes server-side development...',
    author: 'Sam Johnson',
  },
  {
    id: getHashId(
      JSON.stringify({
        title: 'Diving into React: Building Modern User Interfaces',
        slug: 'diving-into-react',
        content: 'Explore the React library and its component-based approach to building interactive UIs...',
        author: 'Emily White',
      })
    ),
    title: 'Diving into React: Building Modern User Interfaces',
    slug: 'diving-into-react',
    content: 'Explore the React library and its component-based approach to building interactive UIs...',
    author: 'Emily White',
  },
  {
    id: getHashId(
      JSON.stringify({
        title: 'Python: From Beginner to Pro',
        slug: 'python-journey',
        content: 'Embark on a journey to master Python programming from the basics to advanced concepts...',
        author: 'Alex Brown',
      })
    ),
    title: 'Python: From Beginner to Pro',
    slug: 'python-journey',
    content: 'Embark on a journey to master Python programming from the basics to advanced concepts...',
    author: 'Alex Brown',
  },
];
