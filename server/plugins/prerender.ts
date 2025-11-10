export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('prerender:routes' as any, async (ctx: any) => {
    try {
      // Import serverQueryContent dynamically
      const { serverQueryContent } = await import('#content/server' as any)

      // Fetch all blog posts from both English and Persian locales
      const locales = ['en', 'fa']
      const allPosts: any[] = []

      for (const locale of locales) {
        const posts = await serverQueryContent(nitroApp as any, `${locale}/blog`)
          .where({ draft: { $ne: true } })
          .find()

        allPosts.push(...posts)
      }

      if (allPosts.length === 0) {
        console.log('No blog posts found for prerendering')
        return
      }

      // Add routes for each published post
      for (const post of allPosts) {
        if (post._path) {
          ctx.routes.add(post._path)
          console.log(`Added route for prerendering: ${post._path}`)
        }
      }

      console.log(`Total blog routes added for prerendering: ${allPosts.length}`)
    } catch (error) {
      console.error('Error generating prerender routes:', error)
    }
  })
})
