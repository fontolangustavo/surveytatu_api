'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Question = use('App/Models/Question')
const Answer = use('App/Models/Answer')
const User = use('App/Models/User')
/**
 * Resourceful controller for interacting with questions
 */
class QuestionController {
  /**
   * Show a list of all questions.
   * GET questions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ }) {
    let user_id = 2;
    return Answer.query()
      .rightJoin('questions', function () {
        this
          .on('answers.question_id', 'questions.id')
          .on('answers.user_id', user_id)
      })
      .fetch();
  }

  /**
   * Create/save a new question.
   * POST questions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
  }

}

module.exports = QuestionController
