export default defineNitroPlugin(async (nitroApp) => {
  if (!import.meta.prerender) {
    return
  }

  const routes: string[] = []

  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    // Collect blog post routes for prerendering
    if (file._path && !file.draft) {
      if (file._path.startsWith('/en/blog/') || file._path.startsWith('/fa/blog/')) {
        routes.push(file._path)
      }
    }
  })

  nitroApp.hooks.hook('prerender:generate', async () => {
    for (const route of routes) {
      console.log(`Prerendering blog route: ${route}`)
    }
  })
})
