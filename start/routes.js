'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Survey Tatu API' }
})

Route.get('/questions', 'QuestionController.index').middleware('auth');
Route.post('/questions', 'QuestionController.update').middleware('auth');
Route.post('/questions/create', 'QuestionController.create');

Route.post('/login', 'UserController.login');