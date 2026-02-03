export function generateStructuredData(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Herensys',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/assets/images/meta-logo.jpg`, //TODO
        },
        sameAs: [
          'https://www.facebook.com/herensys',
          'https://www.instagram.com/herensys',
          'https://www.linkedin.com/company/herensypro', //replace //TODO
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'support@herensys.com',
          availableLanguage: ['en'],
          areaServed: 'Global',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        name: 'Herensys',
        url: baseUrl,
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Global Recruiting',
            item: `${baseUrl}/global-recruiting`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Employer of Record',
            item: `${baseUrl}/employer-of-record`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'BPO Services',
            item: `${baseUrl}/bpo`,
          },
          // {
          //   '@type': 'ListItem',
          //   position: 5,
          //   name: 'HR Consulting',
          //   item: `${baseUrl}/hr-consulting`,
          // },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'Global Payroll',
            item: `${baseUrl}/global-payroll`,
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'Visas and Work Permits',
            item: `${baseUrl}/visas-work-permits`,
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: 'Countries',
            item: `${baseUrl}/countries`,
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'Pool of Candidates',
            item: `${baseUrl}/pool-of-candidates`,
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'Job Board',
            item: `${baseUrl}/job-board`,
          },
          {
            '@type': 'ListItem',
            position: 11,
            name: 'About Us',
            item: `${baseUrl}/about-us`,
          },
          {
            '@type': 'ListItem',
            position: 12,
            name: 'Blog',
            item: `${baseUrl}/blog`,
          },
        ],
      },
    ],
  };
}
