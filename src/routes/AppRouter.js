import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import { AnimeListScreen } from '../components/anime/AnimeListScreen';
import { AnimeScreen } from '../components/anime/AnimeScreen';
import { MangaListScreen } from '../components/manga/MangaListScreen';
import { MangaScreen } from '../components/manga/MangaScreen';
import { Navbar } from './Navbar';

export const AppRouter = () => {

  return (
    <Router>

      <Navbar />
      
      <div className="container my-3">
        <Switch>
          <Route
            path="/anime"
            component={ AnimeListScreen }
            exact
          />

          <Route
            path="/anime/:animeId"
            component={ AnimeScreen }
            exact
          />

          <Route
            path="/manga"
            component={ MangaListScreen }
            exact
          />

          <Route
            path="/manga/:mangaId"
            component={ MangaScreen }
            exact
          />

          <Redirect to="/anime" />
        </Switch>
      </div>
    </Router>
  );

};
