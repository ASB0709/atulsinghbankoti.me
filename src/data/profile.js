// ============================================================
// All personal content lives here. Edit this file only.
// ============================================================

export const profile = {
  name: 'Atul Singh Bankoti',
  title: 'Senior Software Engineer',
  tagline: 'Building scalable, low-latency distributed systems that drive measurable business impact.',
  location: 'Bangalore, Karnataka, India',
  avatar: '', // e.g. '/avatar.jpg' (place the file in /public)

  about: [
    'Senior Software Engineer at Walmart with 8+ years of experience building distributed, high-throughput systems across e-commerce, insurance, and data platforms.',
    'Skilled in designing resilient microservices and scalable architectures that serve millions of users with low latency and strong reliability.',
  ],

  skills: {
    'Languages & Frameworks': [
      'Java',
      'Python',
      'Scala',
      'SQL',
      'Spring Boot',
      'Spring WebFlux',
      'Spring Data',
      'Hibernate',
      'REST',
      'Microservices',
      'React',
      'JUnit',
      'Mockito',
      'Cucumber',
      'BDD',
    ],
    'Technologies & Tools': [
      'Cassandra',
      'Kubernetes',
      'Docker',
      'Kafka',
      'Spark',
      'Splunk',
      'Grafana',
      'AWS (EC2, S3, SQS, SNS, Lambda, DynamoDB)',
      'GCP Storage',
      'GCP Cloud Functions',
      'Elasticsearch',
      'GitHub Copilot',
      'Claude',
    ],
  },

  projects: [
    {
      name: 'Promise Service Revamp',
      description:
        'Re-architected Walmart’s Promise service into a scalable, low-latency system, reducing P99 response time from 200 ms to <60 ms, increasing throughput by 3×, and handling equivalent traffic with 40% fewer resources.',
      tech: ['Java', 'Spring Boot', 'Spring WebFlux', 'Cassandra', 'Kubernetes', 'Kafka'],
      link: '',
      repo: '',
    },
    {
      name: 'Simplified Shipping Settings',
      description:
        'Led development of Simplified Shipping Settings, automating shipping configurations to improve delivery-promise accuracy, reduce Customer-to-Promise time by 1–2 days, and drive 67% organic adoption.',
      tech: ['Java', 'Spring Boot', 'Cassandra', 'Kubernetes', 'GCP'],
      link: '',
      repo: '',
    },
    {
      name: 'Distributed Hollow Cache',
      description:
        'Designed and implemented distributed in-memory Hollow cache for precomputed delivery data, replacing Cassandra reads and reducing average data-retrieval latency from ~20–30 ms to ~3–5 ms.',
      tech: ['Java', 'Cassandra', 'Caching'],
      link: '',
      repo: '',
    },
    {
      name: 'Medi-Cal Expansion Module',
      description:
        'Implemented the Medi-Cal expansion module under California’s 2022 program update, enabling full-scope benefits for 39M+ individuals, automating transitions and reducing manual processing.',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS'],
      link: '',
      repo: '',
    },
  ],

  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Walmart',
      period: 'May 2026 - Present',
      summary:
        'Re-architected Walmart’s Promise service, reducing P99 from 200 ms to <60 ms, improving throughput by 3× while using 40% fewer resources. Led Simplified Shipping Settings (1–2 day C2P improvement, 67% organic adoption). Reduced regression error rates from 20% to <2%. Implemented distributed Hollow cache reducing retrieval latency from ~20–30 ms to ~3–5 ms.',
    },
    {
      role: 'Software Engineer III',
      company: 'Walmart',
      period: 'Dec 2022 - Apr 2026',
      summary:
        'Contributed to the Promise service revamp and related fulfillment initiatives, strengthening testing/monitoring and improving release reliability.',
    },
    {
      role: 'Consultant',
      company: 'Deloitte USI',
      period: 'Apr 2021 - Dec 2022',
      summary:
        'Worked on a large-scale health insurance platform. Implemented the Medi-Cal expansion module for 39M+ individuals, resolved 100+ production issues improving stability, and supported SQL Server → PostgreSQL migration using AWS SCT.',
    },
    {
      role: 'Programming Analyst',
      company: 'Cognizant',
      period: 'Nov 2018 - Apr 2021',
      summary:
        'Contributed to a Data-as-a-Service platform: built CloudWatch/SNS alerting, implemented S3 multipart upload with compression reducing storage costs by 75%, and developed Spring Boot microservices with SQS/Lambda for event-driven processing.',
    },
    {
      role: 'Project Engineer',
      company: 'Wipro',
      period: 'Nov 2016 - Oct 2018',
      summary:
        'Developed Finance Reference Data Management app ingesting 500K+ records daily. Built REST APIs with Lucene indexing reducing search time from ~1s to <10ms, increased unit test coverage by 20%, and resolved 100+ SonarQube issues.',
    },
  ],

  contact: {
    email: 'atulbankoti9@gmail.com',
    github: '',
    linkedin: 'https://linkedin.com/in/atulsb',
    twitter: '',
  },
};
