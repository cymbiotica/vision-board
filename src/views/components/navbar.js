'use strict';

var logoSrc = require('./../../styles/images/vb-logo.svg');

function view(){
    return m('nav', [
        m('.container', [
            m('.one-third.column', [
                m('img', {src: logoSrc}),
            ]),
            m('.hide-btn'),
        ]),
    ]);
}

module.exports = {
    view: view,
};