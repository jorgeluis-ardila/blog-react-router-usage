import { useAuth, usePosts } from '../../providers/context';
import { BlogContent, PostList } from './components';
import { BlogWrapper, ContentWrapper, Divider, SideBar } from './style';

const Blog = () => {
  const { user, isLogged } = useAuth();
  const { posts, userPosts, deleteAllPosts } = usePosts();

  return (
    <BlogWrapper>
      <h1>ESTO ES EL BLOG</h1>
      <ContentWrapper>
        <BlogContent
          isLogged={isLogged}
          isWriter={user.permissions.write}
          isEditor={user.permissions.delete && user.permissions.handleUser}
          userPosts={userPosts}
          deletePosts={deleteAllPosts}
        />
        <Divider />
        <SideBar>
          <PostList posts={posts} title="Todos los Posts" />
        </SideBar>
      </ContentWrapper>
    </BlogWrapper>
  );
};

export { Blog };
