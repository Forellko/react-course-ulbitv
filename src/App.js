import PostItem from './components/PostItem';
import './index.css';

function App() {
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'Javascript', body: 'Description' }} />
    </div>
  );
}

export default App;
