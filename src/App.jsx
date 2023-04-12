import { Post } from './Post';
import { Header } from './components/Header';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author='Diego Fernandes'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      />
      <Post
        author='Gabriel Buzzi'
        content='sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
      />
    </div>
  )
}