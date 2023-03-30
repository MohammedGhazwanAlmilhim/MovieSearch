import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SearchResults from './pages/SearchResults';
import AboutMovie from './pages/AboutMovie';
import './css/main.css';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<SearchResults />} />
                <Route path='/about-movie/:id' element={<AboutMovie />} />
            </Route>
        </Routes>
    );
}
export default App;