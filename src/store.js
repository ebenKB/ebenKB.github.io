import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './features/categories/categorySlice';
import articleReducer from './features/articles/articleSlice';
import eventReducer from './features/events/eventsSlice';
import videoReducer from "./features/videos/videosSlice";
import placesReducer from './features/places/placesSlice';
import tagsReducer from "./features/tags/tagsSlice";
import regionsReducer from "./features/regions/regionsSlice";

export default configureStore({
  reducer: {
    categories: categoryReducer,
    articles: articleReducer,
    events: eventReducer,
    videos: videoReducer,
    places: placesReducer,
    tags: tagsReducer,
    regions: regionsReducer
  }
})