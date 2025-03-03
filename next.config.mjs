import { remarkCodeHike, recmaCodeHike } from "codehike/mdx"
import createMDX from "fumadocs-mdx/config"

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  components: {
    code: "Code",
  },
}

const withMDX = createMDX({
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
    jsx: true,
  },
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['fonts.googleapis.com', 'fonts.gstatic.com'],
  },
}

export default withMDX(config)

