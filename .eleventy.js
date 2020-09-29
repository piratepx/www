module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false)

  eleventyConfig.addWatchTarget('./public')

  eleventyConfig.addWatchTarget('./tmp')

  eleventyConfig.addPassthroughCopy({ './public': '.' })

  eleventyConfig.addPassthroughCopy('./src/_assets/*.(jpg|svg)')

  eleventyConfig.addPassthroughCopy({
    './tmp/_assets/main.css': './_assets/main.css',
  })

  eleventyConfig.addShortcode('version', () => String(Date.now()))

  eleventyConfig.addPairedShortcode('env', (content, env) =>
    (process.env.NODE_ENV || 'development') === env ? content : ''
  )

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
