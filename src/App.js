import { Outlet } from 'react-router-dom'
import { Tags } from './components/Tags'
function App() {
  return (
    <div className="App">
      <h1>Formik demo</h1>
      <div>
      <Tags />
    </div>
      <Outlet />
    </div>
  );
}

export default App;
