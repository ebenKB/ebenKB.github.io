import React, { useEffect } from "react";
// import  { getAyoba }  from './microapp'
import "./App.css" ;
import MainLayout from "./components/MainLayout/MainLayout";
import Videos from "./pages/Videos/Videos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav  from "./components/Navigation/Navigation";
import Places from "./pages/Places/Places";
import Events from "./pages/Events/Events"
import Articles from "./pages/Articles/Articles";
import ArticleDetails from "./pages/Articles/ArticleDetails";
import EventDetails from "./pages/Events/EventDetails";
import VideoDetails from "./pages/Videos/VideoDetails";
import PlaceDetails from "./pages/Places/PlaceDetails";
import { addCategories } from "./features/categories/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import RouteChangeTracker from "./components/RouteChangeTracker/RouteChangeTracker";

export default function App() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  useEffect(() => {
    if (categories.length === 0) {
      Axios.get("https://heritage.bypulse.africa/wp-json/wp/v2/categories")
      .then((res) => {
        dispatch(addCategories(res.data));
      })
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/videos" exact>
          <Videos/>
        </Route>
        <Route path="/videos/:id" exact>
          <VideoDetails/>
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/events" exact>
          <Events />
        </Route>
        <Route path="/events/:id" exact>
          <EventDetails />
        </Route>
        <Route path="/places" exact>
          <Places />
        </Route>
        <Route path="/places/:id" exact>
          <PlaceDetails />
        </Route>
        <Route path="/articles/:id/" exact>
          <ArticleDetails />
        </Route>
        <Route path="/">
          <MainLayout/>
        </Route>
      </Switch>
      <Nav />
      <RouteChangeTracker />
    </Router>
  );
}
