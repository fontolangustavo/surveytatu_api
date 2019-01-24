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
  async index({ auth }) {
    let user_id = auth.user.id;
    return Answer.query()
      .rightJoin('questions', function () {
        this
          .on('answers.question_id', 'questions.id')
          .on('answers.user_id', user_id)
      })
      .orderBy('questions.id', 'asc')
      .fetch();
  }

  async create({ request }) {
    const { title } = request.post();
    try {
      if (title.length == 0) throw new Error('Failed create new question.');

      let question = await Question.create({ title });

      return question;

    } catch (e) {
      return { status: false, msg: e.toString() }
    }
  }

  /**
   * Create/save a new question.
   * POST questions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, auth }) {
    const { data } = request.post();

    let dados = JSON.parse(data);
    let user_id = auth.user.id;
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].value != null) {
        let answer = await Answer.findOrCreate(
          { question_id: dados[i].id, user_id: user_id },
        )

        answer.value = dados[i].value;
        await answer.save();
      }
    }

    return dados;
  }

}

module.exports = QuestionController
