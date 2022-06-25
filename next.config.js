/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const env = {
  'BASE_IMAGE_URL': 'https://image.tmdb.org/t/p/w500/',
  'BASE_API_URL': 'https://api.themoviedb.org/3/',
  'API_KEY': 'f62f750b70a8ef11dad44670cfb6aa57'
}

module.exports = {nextConfig, env}
