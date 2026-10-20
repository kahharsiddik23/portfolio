export const config = {
  personal: {
    name: "Kahhar Siddik",
    title: "Bug Bounty Hunter | Cybersecurity Researcher",
    tagline: "Breaking systems to make them stronger.",
    description: "Security researcher focused on discovering vulnerabilities, understanding attack surfaces, and helping organizations build more secure applications.",
    about: "I'm Kahhar Siddik, a cybersecurity enthusiast and bug bounty hunter focused on discovering vulnerabilities in modern web applications and digital systems. My approach combines systematic reconnaissance, creative security testing, vulnerability analysis, and automation. I continuously learn, experiment, document findings, and improve my methodology to become a better security researcher.",
    status: "Available for Security Research & Collaboration",
    email: "khaharsiddik@gmail.com",
  },
  social: {
    github: "https://github.com/kahharsiddik23",
    linkedin: "https://linkedin.com", // Placeholder
    hackerone: "https://hackerone.com", // Placeholder
    twitter: "https://twitter.com", // Placeholder
    youtube: "https://youtube.com", // Placeholder
  },
  stats: {
    reports: "00+",
    programs: "00+",
    criticals: "00+",
    hours: "00+",
  },
  skills: {
    webSecurity: [
      "XSS", "IDOR / BOLA", "SQL Injection", "SSRF", "CSRF", 
      "Authentication Issues", "Authorization Issues", 
      "Business Logic Vulnerabilities", "Security Misconfigurations"
    ],
    reconnaissance: [
      "Subdomain Enumeration", "Asset Discovery", "Endpoint Discovery", 
      "Technology Fingerprinting", "Attack Surface Mapping"
    ],
    tools: [
      "Burp Suite", "Nmap", "Subfinder", "Amass", "Assetfinder", 
      "httpx", "GAU", "Waybackurls", "Nuclei", "ffuf", "Gobuster", 
      "Gowitness", "Linux"
    ],
    programming: [
      "Bash", "Python", "C", "JavaScript"
    ]
  },
  projects: [
    {
      title: "Recon Automation Framework",
      description: "A personal reconnaissance workflow designed to automate asset discovery, enumeration, validation, and result organization.",
      tech: ["Bash", "Linux", "Subfinder", "Amass", "httpx", "Nuclei"],
      github: "https://github.com",
      link: "#"
    },
    {
      title: "Web Security Research Lab",
      description: "Personal environment for testing modern web application vulnerabilities and attack scenarios.",
      tech: ["Burp Suite", "JavaScript", "Linux", "Python"],
      github: "https://github.com",
      link: "#"
    },
    {
      title: "Security Automation Toolkit",
      description: "Collection of scripts and utilities created to improve repetitive security research workflows.",
      tech: ["Bash", "Python", "Linux"],
      github: "https://github.com",
      link: "#"
    }
  ],
  writeups: [
    {
      title: "Stored XSS: From Input Validation Bypass to Impact",
      category: "XSS",
      summary: "A deep dive into bypassing input filters and escalating a simple stored XSS into a full account takeover.",
      date: "2026-05-12",
      readTime: "5 min",
      link: "#"
    },
    {
      title: "How I Approach Subdomain Reconnaissance",
      category: "Recon",
      summary: "My methodology for discovering hidden assets and expanding the attack surface during a bug bounty engagement.",
      date: "2026-06-21",
      readTime: "8 min",
      link: "#"
    },
    {
      title: "Understanding IDOR and Authorization Failures",
      category: "IDOR",
      summary: "Analyzing common patterns in broken object level authorization and how to identify them efficiently.",
      date: "2026-08-03",
      readTime: "6 min",
      link: "#"
    },
    {
      title: "Bug Chaining: Turning Small Issues Into Real Impact",
      category: "Bug Chaining",
      summary: "Case study on chaining an open redirect with an authentication flaw to achieve high impact.",
      date: "2026-09-15",
      readTime: "7 min",
      link: "#"
    }
  ],
  certifications: [
    {
      name: "Certification Name",
      issuer: "Issuing Organization",
      year: "2025"
    },
    {
      name: "Certification Name",
      issuer: "Issuing Organization",
      year: "2026"
    }
  ],
  workflow: [
    {
      step: "01 — Recon",
      description: "Discover assets and understand the attack surface."
    },
    {
      step: "02 — Enumeration",
      description: "Identify endpoints, technologies, parameters, and hidden functionality."
    },
    {
      step: "03 — Vulnerability Hunting",
      description: "Test applications for security weaknesses."
    },
    {
      step: "04 — Validation",
      description: "Confirm impact and reproduce vulnerabilities safely."
    },
    {
      step: "05 — Reporting",
      description: "Create clear, professional vulnerability reports."
    },
    {
      step: "06 — Retesting",
      description: "Verify fixes and ensure vulnerabilities are properly resolved."
    }
  ]
};
