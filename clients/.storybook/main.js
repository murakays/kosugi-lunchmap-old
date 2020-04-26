const custom = require('../webpack.common');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    webpackFinal(config) {
        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: [
                            {
                                loader: 'babel-loader'
                            },
                            {
                                loader: 'ts-loader',
                                options: {
                                    transpileOnly: true
                                }
                            }],
                        exclude: /node_modules/,
                    },
                ]
            },
            resolve: custom.resolve,
            plugins: [
                ...config.plugins,
                ...custom.plugins,
            ],
            context: custom.context
        };
    }
};