import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/routes/AppRouter';
import { Layout } from '@/organisms';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
