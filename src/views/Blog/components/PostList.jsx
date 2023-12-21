import { PostListWrapper } from './style';
import { BlogLink } from '.';

const PostList = ({ posts, title }) => {
  return (
    <PostListWrapper>
      <p className="post-title">{title}</p>
      <ul className="post-list">
        {posts.map(post => (
          <BlogLink key={post.id} title={post.title} slug={post.slug} />
        ))}
      </ul>
    </PostListWrapper>
  );
};

export { PostList };
