import { useState } from 'react';
import PostItem from './components/PostItem';
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

  return (
    <div className="App">
      <h1>Список постов</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
