'use strict';

var logoSrc = require('./../../assets/images/vb-logo.svg');

function view(){
    return m('nav', [
        m('.logo-wrapper',
            m('img', {src: logoSrc}),
        ),
    ]);
}

module.exports = {
    view: view,
};