/**
 * Bank.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    autoPK: false,

    attributes: {
        bank: {
            type: 'string',
            required: true,
            unique: true,
            primaryKey: true
        },
        name: {
            type: 'string',
            required: true
        },
        adapter: {
            type: 'string'
        }
    },

    seedData: __dirname + '/../../lib/data/banks.json'
};

