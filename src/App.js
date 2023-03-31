import { useState } from 'react';
import PostList from './components/PostList';
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
      <PostList posts={posts} />
    </div>
  );
}

export default App;
