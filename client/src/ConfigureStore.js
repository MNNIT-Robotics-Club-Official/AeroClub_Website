import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './Reducers'

const persistConfig = {
    key: 'root',
    storage,
}

export const history = createBrowserHistory()
const persistedReducer = persistReducer(persistConfig, rootReducer(history))


export default function configureStore() {
    const store = createStore(
        persistedReducer,
        compose(
            applyMiddleware(
                routerMiddleware(history),
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ),
    )
    const persistor = persistStore(store)

    return { store, persistor }
}