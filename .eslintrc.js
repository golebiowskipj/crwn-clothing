module.exports = {
    "extends": ["eslint:recommended","plugin:react/recommended"],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
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