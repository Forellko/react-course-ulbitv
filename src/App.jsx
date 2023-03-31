import { useMemo } from 'react';
import { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
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

  const [search, setSearch] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const sortedPosts = useMemo(() => {
    if (!selectedSort) return posts;
    return [...posts].sort((a, b) =>
      a[selectedSort].localeCompare(b[selectedSort])
    );
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.includes(search));
  }, [search, sortedPosts]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const sortChange = (value) => {
    setSelectedSort(value);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          placeholder={'Поиск...'}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <MySelect
          value={selectedSort}
          defaultValue={'Сортировка по'}
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
          onChange={sortChange}
        />
        <PostList
          posts={sortedAndSearchedPosts}
          title="JavaScript"
          deletePost={deletePost}
        />
      </div>
    </div>
  );
}

export default App;
