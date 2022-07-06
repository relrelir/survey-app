/** @type {import('next').NextConfig} */

const { mongodb_pass, mongodb_user, mongodb_host, mongodb_name } = process.env;

const nextConfig = {
  reactStrictMode: true,

  env: {
    mongodb_pass,
    mongodb_user,
    mongodb_host,
    mongodb_name,
  },
};

module.exports = nextConfig;
