import { useMemo } from 'react';
import { useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyModal from './components/UI/modal/MyModal';
import './index.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'a', body: 'a' },
    { id: 2, title: 's', body: 'd' },
    { id: 3, title: 'd', body: 'b' },
    { id: 4, title: 'a', body: 'e' },
    { id: 5, title: 'd', body: 'c' },
    { id: 6, title: 'c', body: 'd' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (!filter.sort) return posts;
    return [...posts].sort((a, b) =>
      a[filter.sort].localeCompare(b[filter.sort])
    );
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <MyModal />
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        title="JavaScript"
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;
