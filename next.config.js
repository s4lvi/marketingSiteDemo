/** @type {import('next').NextConfig} */
let prefix = undefined
let fordDriveLink = ""
let apiUrl = "http://localhost:8080"


const currentEnv = process.env.APP_ENV ? process.env.APP_ENV : "dev";
const cacheTtl = 1000 * 60 * 60 * 24;

console.log(`current app env is ${currentEnv}`);

console.log(`prefix is configured to ${prefix}`);

module.exports = {
  publicRuntimeConfig: {
    app_env: currentEnv
  },
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix : prefix,
  env: {
    fordDriveLink: fordDriveLink,
    apiUrl: apiUrl,
    cdn : prefix ? prefix : "",
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Methods", value: "GET" },
          { key: "Access-Control-Allow-Headers", value: "X-Requested-With, Content-Type" },
          { key: 'Cache-Control', value: `public, max-age=${cacheTtl}, must-revalidate`, }
        ]
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ]
    });
  
    return config;
  }
}
