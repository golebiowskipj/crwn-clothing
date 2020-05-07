module.exports = {
    "extends": ["eslint:recommended","plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "arrowFunction": true,
            "classes": true
        }
    },
    "rules": {
        "semi": [2, "always"],
        "quotes": [2, "double"],
        "jsx-quotes": [2, "prefer-double"],
        "no-console": 1,
        "newline-before-return": 2,
        "comma-dangle": [2, "never"],
        "no-unused-vars": 0,
        "react/prop-types": 0
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    }
}