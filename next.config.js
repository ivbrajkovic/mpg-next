// next.config.js
// const withPlugins = require('next-compose-plugins');
// const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withSass = require('@zeit/next-sass');

module.exports = withSass({ minified: true });

// module.exports = withBundleAnalyzer({
//     analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
//     analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
//     bundleAnalyzerConfig: {
//         server: {
//             analyzerMode: 'static',
//             reportFilename: '../bundles/server.html'
//         },
//         browser: {
//             analyzerMode: 'static',
//             reportFilename: '../bundles/client.html'
//         }
//     }
// });

// module.exports = withPlugins([
//     [withSass, {}],
//     [
//         withBundleAnalyzer,
//         {
//             analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
//             analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
//             bundleAnalyzerConfig: {
//                 server: {
//                     analyzerMode: 'static',
//                     reportFilename: '../bundles/server.html'
//                 },
//                 browser: {
//                     analyzerMode: 'static',
//                     reportFilename: '../bundles/client.html'
//                 }
//             }
//         }
//     ]
// ]);

// module.exports = withBundleAnalyzer(
//     withSass({
//         minified: true,
//         analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
//         analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
//         bundleAnalyzerConfig: {
//             server: {
//                 analyzerMode: 'static',
//                 reportFilename: '../bundles/server.html'
//             },
//             browser: {
//                 analyzerMode: 'static',
//                 reportFilename: '../bundles/client.html'
//             }
//         }
//     })
// );
