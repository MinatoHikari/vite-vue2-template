module.exports = {
    extends: ['@antfu', 'prettier'],
    rules: {
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        'arrow-parens': 'off',
        'vue/html-indent': ['warn', 4],
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/component-tags-order': 'off',
    },
};
