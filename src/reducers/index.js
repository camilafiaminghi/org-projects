import { combineReducers } from 'redux'
import repos from './repos'
import branches from './branches'

export default () => combineReducers({
	repos,
	branches
})


