export default {
    widgets: [
        {
        name: 'netlify',
        options: {
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
              buildHookId: 'xxxyyyxxxyyyyxxxyyy',
              name: 'sanity-gatsby-blog-20-studio',
            },
            {
              title: 'Website',
              apiId: '5c6de134-c5e0-4ace-a6dd-ca7b4329e511',
              buildHookId: 'yyyyxxxxxyyyxxdxxx',
              name: 'sanity-gatsby-blog-20-web',
              url: 'https://my-sanity-deployment.com',
            }
          ]
        }
      }
    ]
  }