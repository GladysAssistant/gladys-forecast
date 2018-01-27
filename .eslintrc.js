module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        "no-console":0,
        "indent": ["error", 2],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'semi': [
            'error',
            'always'
        ]
    },
    'globals': {
        'gladys': true,
        'it': true,
        '__base': true,
        'beforeEach': true,
        'describe': true,
        'process': true,
        '__api': true,
        '__base': true,
        '__dirname': true
    }
};