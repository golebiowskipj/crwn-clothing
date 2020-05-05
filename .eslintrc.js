module.exports = {
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
        "comma-dangle": ["error", "never"],

    },
    "env": {
        "browser": true,
        "node": true
    }
}