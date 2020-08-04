module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "eslint-config-airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "rules": {
        'no-console': "off",
        "no-unused-vars": "off",
        // "import/prefer-default-export": "off",
        // "import/no-unresolved": "off",
        "max-len": "off",
        // "semi": ["error", "never", { "beforeStatementContinuationChars": "always"}],
        // "no-extra-semi": "error",
        // "no-restricted-imports": ["error", "import1", "import2"]
    }
};
