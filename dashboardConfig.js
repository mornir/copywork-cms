export default {
  widgets: [
    {
      name: 'netlify',
      layout: {
        width: 'medium',
        height: 'medium',
      },
      options: {
        title: 'Rebuild',
        description: 'Trigger a rebuild of the website',
        sites: [
          {
            buildHookId:
              '5e78bffc9e337d02228afa59?trigger_title=Sanity+use_cache',
            title: 'https://copywork.netlify.com',
            name: 'copywork',
            apiId: 'eeec1609-923c-4ac8-9822-a4661b2c8953',
          },
        ],
      },
    },
  ],
}
