import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import logger from './middlewares/logger'
import rootSaga from './middlewares/saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = applyMiddleware(
	logger,
	sagaMiddleware
)

const store = createStore(
	reducers(),
	compose(middlewares)
)

sagaMiddleware.run(rootSaga)

export default store
