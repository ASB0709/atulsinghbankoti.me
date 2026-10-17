// ============================================================
// All personal content lives here. Edit this file only.
// ============================================================

export const profile = {
  name: 'Atul Singh Bankoti',
  title: 'Software Engineer',
  tagline: 'I build reliable, high-scale backend systems and enjoy turning complex distributed problems into simple, fast experiences.',
  location: 'Bengaluru, India',
  avatar: '', // e.g. '/avatar.jpg' (place the file in /public)

  about: [
    'Software Engineer III at Walmart, where I work on the fulfillment engine that computes promise and sourcing dates across all customer-facing platforms.',
    'I have nearly a decade of experience building backend services in Java and Spring Boot across retail, healthcare, and data platforms — with a focus on performance, reliability, and measurable impact.',
  ],

  skills: {
    'Languages & Frameworks': [
      'Java',
      'Spring Boot',
      'Spring WebFlux',
      'Hibernate',
      'Spring Data',
      'Microservices',
      'REST',
      'Python',
      'SQL',
      'React',
      'JUnit',
      'Mockito',
      'Cucumber',
    ],
    'Cloud & Data': [
      'AWS (EC2, S3, SQS, SNS, Lambda)',
      'DynamoDB',
      'GCP Storage',
      'GCP Cloud Functions',
      'Azure Storage',
      'Cassandra',
      'Kafka',
      'Elasticsearch',
    ],
    Tools: ['Kubernetes', 'Docker', 'Grafana', 'Splunk', 'GitHub Copilot', 'IntelliJ'],
  },

  projects: [
    {
      name: 'Simplified Shipping Settings',
      description:
        'Led development of a smarter, more automated shipping configuration system for Walmart Marketplace sellers. Re-architected the backend with Netflix Hollow caches, cutting response time from 400 ms to under 60 ms and reaching 67% organic adoption.',
      tech: ['Java', 'Spring Boot', 'Cassandra', 'Kubernetes', 'GCP'],
      link: '',
      repo: '',
    },
    {
      name: 'Fulfillment Promise & Sourcing Engine',
      description:
        'Designed a scalable master-worker model to precompute delivery dates for Marketplace nodes, and a prep-time feature that incorporates store cutoff and hold times to improve delivery promise accuracy by 20%.',
      tech: ['Java', 'Spring WebFlux', 'Kafka', 'Microservices'],
      link: '',
      repo: '',
    },
    {
      name: 'Medi-Cal Expansion Module',
      description:
        'Implemented the Medi-Cal expansion under California’s 2022 health program update, enabling full-scope benefits for 39M+ eligible individuals and automating the transition from restricted- to full-scope enrollment.',
      tech: ['Java', 'Spring Boot', 'React', 'AWS'],
      link: '',
      repo: '',
    },
    {
      name: 'Data-as-a-Service Platform',
      description:
        'Built AWS tooling for a subscription data platform: an S3 multipart upload pipeline that cut storage costs by 75%, and a containerized Spring Boot service that enqueued dynamic messages to SQS for AWS Lambda processing.',
      tech: ['Java', 'AWS', 'SQS', 'Lambda', 'Docker'],
      link: '',
      repo: '',
    },
  ],

  experience: [
    {
      role: 'Software Engineer III',
      company: 'Walmart',
      period: 'Dec 2022 - Present',
      summary:
        'Work on Walmart’s fulfillment engine, optimizing promise and sourcing dates across customer-facing platforms. Led Simplified Shipping Settings (400 ms to under 60 ms via Netflix Hollow caches, 67% adoption), built a master-worker model to precompute delivery dates, and reduced the regression error rate from 60% to 0%.',
    },
    {
      role: 'Consultant',
      company: 'Deloitte USI',
      period: 'Apr 2021 - Dec 2022',
      summary:
        'Built and maintained a large-scale health insurance platform serving millions. Implemented the Medi-Cal expansion module (39M+ eligible individuals) and resolved 100+ production issues across Java and React components.',
    },
    {
      role: 'Programming Analyst',
      company: 'Cognizant',
      period: 'Nov 2018 - Apr 2021',
      summary:
        'Built a Data-as-a-Service platform: CloudWatch/SNS alerting, S3 multipart uploads that cut storage costs by 75%, and a containerized Spring Boot service feeding SQS and Lambda. Deployed a multi-tenant JupyterHub on AWS EKS.',
    },
    {
      role: 'Project Engineer',
      company: 'Wipro',
      period: 'Nov 2016 - Oct 2018',
      summary:
        'Developed a Finance Reference Data Management application ingesting 500K+ records daily, exposed it through REST APIs, and improved document search latency from 1 s to under 500 ms using Lucene indexing.',
    },
  ],

  contact: {
    email: 'atulbankoti9@gmail.com',
    github: 'https://github.com/ASB0709',
    linkedin: 'https://linkedin.com/in/atulsb',
    twitter: '',
  },
};
