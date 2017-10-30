// load the default config generator.
const path = require('path');
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    // add typescript loader:
    config.entry.bootstrap = 'bootstrap-loader/extractStyles';

    config.module.rules = config.module.rules.map((rule)=>{
      if(rule.loader && rule.loader.indexOf('vue-loader') !== -1) {
        rule.options = {
          loaders: {
            scss: 'vue-style-loader!css-loader!resolve-url-loader!sass-loader?{"includePaths":["src/style"]}'
          }
        }
        return rule
      }
      return rule
    })
    // config.module.rules.push({
    //     test: /\.(ts|tsx)$/,
    //     loader: require.resolve('awesome-typescript-loader'),
    //     options: {
    //         // allowSyntheticDefaultImports: true,
    //         transpileOnly: true,
    //         // silent: true,
    //         // target: 'es5',
    //         // useBabel: true,
    //         // useCache: true
    //     }
    // });

    // config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(
        {
            test: /\.scss$/,
            loaders: [
                "style-loader",
                "css-loader",
                "resolve-url-loader",
                {
                    loader: "sass-loader",
                    options: {includePaths: ['src/style']}
                }
            ],
        }
    );


    // config.target = 'webworker';
    // config.module.rules.push(
    //     {
    //         test: /\.(scss)$/,
    //         use: ExtractTextPlugin.extract({
    //                 fallback: "style-loader",
    //                 use: [
    //                     {
    //                         loader: 'css-loader',
    //                         options: {
    //                             sourceMap: true,
    //                         }
    //                     }, {
    //                         loader: 'resolve-url-loader'
    //                     }, {
    //                         loader: 'sass-loader',
    //                         options: {
    //                             sourceMap: true,
    //                             includePaths: ['style']
    //                         }
    //                     }
    //                 ],
    //             }
    //         )
    //     }
    // );

    // config.module.rules.push({
    //     test: /\.md$/,
    //     loader: "raw-loader"
    // });

    config.plugins = [...config.plugins,
        new ExtractTextPlugin("bootstrap.css"),
    ];

    return config;
};
