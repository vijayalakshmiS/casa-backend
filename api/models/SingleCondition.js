/**
 * SingleCondition.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    operandValue: {

      type : 'string'

    },

    operatorFunction: {

      type : 'string'

    },

    constantValue: {

      type : 'integer'

    },

    ruleId: {
      model : 'rule'
    }
  }
};

