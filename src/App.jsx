import { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './index.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 1', body: 'Description' },
    { id: 3, title: 'Javascript 2', body: 'Description' },
    { id: 4, title: 'Javascript 3', body: 'Description' },
    { id: 5, title: 'Javascript 4', body: 'Description' },
    { id: 6, title: 'Javascript 5', body: 'Description' },
  ]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="JavaScript" deletePost={deletePost} />
    </div>
  );
}

export default App;
