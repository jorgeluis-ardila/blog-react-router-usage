import { Link } from 'react-router-dom';

const BlogLink = ({ title, slug }) => (
  <li>
    <Link to={`/blog/${slug}`}>{title}</Link>
  </li>
);

export { BlogLink };
