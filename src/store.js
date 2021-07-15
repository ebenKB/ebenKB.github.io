import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import categoryReducer from './features/categories/categorySlice';
import articleReducer from './features/articles/articleSlice';
import eventReducer from './features/events/eventsSlice';
import videoReducer from "./features/videos/videosSlice";
import placesReducer from './features/places/placesSlice';
import tagsReducer from "./features/tags/tagsSlice";
import regionsReducer from "./features/regions/regionsSlice";
import featuredContentsReducer  from "./features/featuredContents/featuredContentsSlice";
import thunk from 'redux-thunk'


// export default configureStore({
//   reducer: {
//     categories: categoryReducer,
//     articles: articleReducer,
//     events: eventReducer,
//     videos: videoReducer,
//     places: placesReducer,
//     tags: tagsReducer,
//     regions: regionsReducer
//   }
// })


const rootReducer = combineReducers({
  categories: categoryReducer,
  articles: articleReducer,
  events: eventReducer,
  videos: videoReducer,
  places: placesReducer,
  tags: tagsReducer,
  regions: regionsReducer,
  featuredContent: featuredContentsReducer,
})

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export default store;