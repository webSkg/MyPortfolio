/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/webSkg",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/boxRPS",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/sudhanshu-kumar-dwivedi-4ab2771a6/",
        permanent: true,
      },
{
        source: "/resume",
        destination: "/MYPORTFOLIO/publi/SKDresume.pdf",
        permanent: true,
      },


    ]
  },
}
