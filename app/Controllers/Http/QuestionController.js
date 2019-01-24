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
    let user_id = 1;
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
  async update({ request }) {
    const { data } = request.post();

    let dados = JSON.parse(data);
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].value != null) {
        let answer = await Answer.findOrCreate(
          { question_id: dados[i].question_id, user_id: dados[i].user_id },
        )
        
        answer.value = dados[i].value;
        await answer.save();
      }
    }

  }

}

module.exports = QuestionController
