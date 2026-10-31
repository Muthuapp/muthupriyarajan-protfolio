// Portfolio Data for Muthu Priyarajan M
const portfolioData = {
  personalInfo: {
    name: "Muthu Priyarajan M",
    tagline: "Full-Stack Web & Mobile App Developer",
    status: "Available for Full-Time Roles & Freelance",
    email: "muthupriyarajanr@gmail.com",
    phone: "+91 9500338208",
    location: "Coimbatore, Tamil Nadu, India",
    bio: "Motivated, detail-oriented aspiring Web & Mobile App Developer and MCA candidate at SNS College of Technology. Experienced in developing responsive React web apps, cross-platform Flutter/Dart mobile suites, PHP & MySQL backends, and certified in Microsoft AI technologies.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:muthupriyarajanr@gmail.com",
      whatsapp: "https://wa.me/919500338208",
      phone: "tel:+919500338208"
    },
    roles: [
      "Full-Stack Web Developer",
      "Flutter & Dart App Engineer",
      "React & Modern UI Specialist",
      "AI-Augmented Solutions Builder",
      "Backend & MySQL Architect"
    ],
    stats: [
      { label: "Industry Internship", value: "4+", unit: "Months", sub: "Zemaraim Technology", icon: "briefcase" },
      { label: "Live Apps & Systems", value: "3+", unit: "Apps", sub: "Web & Enterprise Mobile", icon: "code" },
      { label: "Accredited Badges", value: "5+", unit: "Badges", sub: "Microsoft & AI Foundations", icon: "award" },
      { label: "Code Battle Organizer", value: "2025", unit: "Lead", sub: "Intercollegiate Festival Lead", icon: "users" }
    ]
  },

  skills: [
    { name: "React.js", category: "Frontend", level: 90, tag: "Advanced", desc: "Component architecture, hooks, state management, responsive UI" },
    { name: "Flutter", category: "Mobile", level: 86, tag: "Specialist", desc: "Cross-platform mobile UI, stateful widgets, role navigation" },
    { name: "Dart", category: "Mobile", level: 85, tag: "Proficient", desc: "OOP, asynchronous programming, streams, JSON serialization" },
    { name: "PHP", category: "Backend & DB", level: 84, tag: "Full-Stack", desc: "RESTful endpoints, session tokens, secure MySQL data pipelines" },
    { name: "MySQL", category: "Backend & DB", level: 88, tag: "Relational", desc: "Normalized schemas, complex joins, indexing, multi-tenant queries" },
    { name: "Firebase", category: "Backend & DB", level: 82, tag: "Cloud", desc: "Authentication, Firestore real-time sync, cloud storage" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 92, tag: "Core", desc: "Async/await, DOM manipulation, functional patterns, API handling" },
    { name: "Git & GitHub", category: "Tools & AI", level: 88, tag: "Essential", desc: "Branching workflows, version control, PR reviews, CI/CD basics" },
    { name: "REST API Integration", category: "Backend & DB", level: 90, tag: "Integration", desc: "JSON payloads, token authorization, error handling" },
    { name: "HTML5 & Tailwind CSS", category: "Frontend", level: 95, tag: "Design", desc: "CSS grid, flexbox, glassmorphism, responsive micro-interactions" },
    { name: "AI-Assisted Engineering", category: "Tools & AI", level: 89, tag: "Modern", desc: "Prompt engineering, code refactoring, schema synthesis" },
    { name: "Java & Android Studio", category: "Mobile", level: 80, tag: "Foundation", desc: "OOP concepts, Android manifests, Gradle setup, device debugging" }
  ],

  projects: [
    {
      id: "enterprise-app",
      title: "Multiple User Enterprise Mobile Application",
      subtitle: "Enterprise IT Management Suite with 4 Roles",
      category: "Mobile",
      badge: "Featured / Enterprise",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      description: "An IT enterprise management application featuring dedicated modules for Admin, HR, Employees, and Clients with mobile access. Engineered using Flutter, Dart, PHP backend, and MySQL database.",
      highlights: [
        "Role-based multi-user architecture (Admin, HR, Employee, Client)",
        "Integrated AI tools throughout development for UI creation, API scaffolding, and debugging",
        "Backend API development with custom PHP endpoints and relational MySQL database",
        "Real-time task tracking, leave requests, timesheets, and performance telemetry"
      ],
      tech: ["Flutter", "Dart", "PHP", "MySQL", "REST API", "AI Acceleration"],
      githubUrl: "https://github.com/muthupriyarajanr",
      liveUrl: "https://github.com/muthupriyarajanr"
    },
    {
      id: "gym-website",
      title: "Elite Dynamic Gym & Fitness Hub",
      subtitle: "High-Performance Interactive Fitness Portal",
      category: "Web",
      badge: "Live Production",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      description: "A fully responsive, high-energy gym and wellness web application built with dynamic pages, interactive workout programs, membership tiers, and intuitive navigation.",
      highlights: [
        "Dynamic workout catalog and trainer profiles",
        "Interactive membership tier comparison with clear CTAs",
        "Fluid responsive layout tested across mobile, tablet, and desktops",
        "Hosted with continuous Vercel deployment"
      ],
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Vercel", "Responsive Design"],
      githubUrl: "https://github.com/muthupriyarajanr",
      liveUrl: "https://gym-six-theta.vercel.app/"
    },
    {
      id: "healing-hands",
      title: "Healing Hands – Dental Care Platform",
      subtitle: "Healthcare Services & Patient Appointment Interface",
      category: "Web",
      badge: "Live Production",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      description: "A clean, comforting healthcare website created for dental practices. Built with a responsive interface, organized treatment showcases, doctor profiles, and easy patient inquiry booking.",
      highlights: [
        "Clean, trustworthy medical aesthetic with glassmorphism cards",
        "Intuitive treatment categories with procedural overviews",
        "Quick patient appointment booking interface with instant feedback"
      ],
      tech: ["React.js", "Tailwind CSS", "Modern UI", "Vercel", "UX Research"],
      githubUrl: "https://github.com/muthupriyarajanr",
      liveUrl: "https://healing-hands-black.vercel.app/"
    },
    {
      id: "ai-lab",
      title: "NeuralDev – AI-Assisted Engineering Lab",
      subtitle: "Interactive Prompt & Workflow Orchestrator",
      category: "AI",
      badge: "AI Powered",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      description: "An interactive laboratory demonstrating how generative AI models accelerate full-stack development — from automated PHP API generation to MySQL query optimization.",
      highlights: [
        "Simulated neural node interaction demonstrating real-time AI code generation",
        "Interactive prompt playground with live syntax-highlighted responses",
        "Showcase of Microsoft Generative AI & AI for Everyone certifications"
      ],
      tech: ["JavaScript", "Generative AI", "Tailwind CSS", "Prompt Engineering"],
      githubUrl: "https://github.com/muthupriyarajanr",
      liveUrl: "https://gym-six-theta.vercel.app/"
    }
  ],

  aiPresets: {
    api: {
      title: "PHP REST API Scaffolding",
      prompt: "Synthesize a secure PHP endpoint with JWT authorization, input validation, and MySQL prepared statement.",
      code: `<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

// Verify Bearer Token & User Role
$headers = getallheaders();
$auth = new AuthMiddleware($headers['Authorization'] ?? '');
$user = $auth->validateToken();

if (!$user || !in_array($user['role'], ['Admin', 'HR', 'Employee'])) {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Unauthorized Role Access"]);
    exit();
}

// Prepared Statement with PDO
$stmt = $pdo->prepare("SELECT id, name, role, status FROM enterprise_users WHERE org_id = :org_id");
$stmt->execute(['org_id' => $user['org_id']]);
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(["status" => "success", "count" => count($results), "data" => $results]);
?>`,
      metrics: { latency: "142ms", tokens: "284", confidence: "99.4%" }
    },
    flutter: {
      title: "Flutter Role-Based Guard",
      prompt: "Generate a Flutter widget navigation wrapper that restricts access based on dynamic user role.",
      code: `class RoleGuard extends StatelessWidget {
  final Widget child;
  final List<String> allowedRoles;

  const RoleGuard({
    Key? key,
    required this.child,
    required this.allowedRoles,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final userRole = Provider.of<AuthService>(context).currentRole;
    
    if (!allowedRoles.contains(userRole)) {
      return AccessDeniedView(requiredRoles: allowedRoles);
    }
    return AnimatedSwitcher(
      duration: const Duration(milliseconds: 300),
      child: child,
    );
  }
}`,
      metrics: { latency: "165ms", tokens: "196", confidence: "98.9%" }
    },
    mysql: {
      title: "Optimized MySQL Schema",
      prompt: "Design normalized schema for enterprise IT application supporting Admin, HR, Employees, and Client modules.",
      code: `CREATE TABLE enterprise_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid VARCHAR(36) UNIQUE NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(160) UNIQUE NOT NULL,
  role ENUM('Admin', 'HR', 'Employee', 'Client') NOT NULL,
  status ENUM('active', 'suspended', 'pending') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_role_status (role, status),
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`,
      metrics: { latency: "110ms", tokens: "172", confidence: "99.8%" }
    }
  },

  certifications: [
    {
      title: "Unlocking AI for Everyone (Beginner)",
      issuer: "Microsoft | NSQF Level 2",
      date: "October 30, 2026",
      certId: "2026070899177611-052845",
      color: "#06B6D4"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Certified Technical Institute",
      date: "October 30, 2026",
      certId: "10967915",
      color: "#8B5CF6"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Microsoft",
      date: "Verified Credential",
      certId: "MS-GenAI",
      color: "#EC4899"
    }
  ],

  timeline: [
    {
      period: "2024 — 2026",
      title: "Master of Computer Applications (MCA)",
      organization: "SNS College of Technology, Coimbatore",
      badge: "In Progress",
      type: "Education",
      desc: "Specializing in advanced software systems, API development, cloud architectures, and AI integration.",
      points: ["Advanced Database Systems & API Engineering", "Mobile Application Engineering Practicum", "Contributor to tech symposiums & code hackathons"]
    },
    {
      period: "2025",
      title: "Event Lead — Intercollegiate Festival (Code Battle)",
      organization: "SNS College of Technology",
      badge: "Leadership Award",
      type: "Achievement",
      desc: "Directed the flagship competitive programming tournament 'Code Battle' for talented collegiate developers across Coimbatore.",
      points: ["Formulated algorithmic challenges", "Led a team of 15+ student coordinators", "Managed live scoring dashboards"]
    },
    {
      period: "4 Months (2024)",
      title: "Web Development Intern",
      organization: "Zemaraim Technology",
      badge: "Industry Experience",
      type: "Experience",
      desc: "Built and optimized multiple dynamic, responsive web applications while gaining hands-on full-stack development experience.",
      points: [
        "Collaborated on real-world projects to implement scalable features",
        "Developed responsive web interfaces using modern front-end technologies",
        "Implemented interactive elements to deliver smooth, user-friendly experiences",
        "Tested and refined web pages across diverse screen resolutions"
      ]
    },
    {
      period: "2020 — 2023",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "Jamal Mohamed College, Tiruchirappalli",
      badge: "Graduated • CGPA: 7.8",
      type: "Education",
      desc: "Graduated with strong foundations in computer science, Java, PHP, database administration (MySQL), and data structures.",
      points: ["Academic Distinction: CGPA 7.8 / 10", "Core coursework: Data Structures, Web Technology, Software Engineering", "Developed multi-tier student & department management systems"]
    }
  ],

  services: [
    {
      title: "Web Development",
      icon: "globe",
      color: "#6366F1",
      desc: "Crafting blazing fast, responsive, and modern web applications with clean semantic HTML5, CSS3, and modern JavaScript.",
      deliverables: ["Single Page Applications (SPA)", "Interactive Glassmorphism UIs", "Mobile-First Responsiveness", "Clean SEO Codebase"]
    },
    {
      title: "Mobile App Development",
      icon: "smartphone",
      color: "#06B6D4",
      desc: "Building native-feel cross-platform mobile apps for iOS and Android using Flutter & Dart with smooth 60fps animations.",
      deliverables: ["Role-Based Multi-User Modules", "State Management & Smooth Navigation", "Offline Caching & Push Alerts", "Flutter Widget Architecture"]
    },
    {
      title: "Backend & Database",
      icon: "database",
      color: "#8B5CF6",
      desc: "Architecting reliable REST APIs and robust relational database structures using PHP and MySQL with token-based security.",
      deliverables: ["Custom RESTful Endpoints", "Normalized MySQL Schemas", "Authentication & Role Control", "Firebase Cloud Integration"]
    },
    {
      title: "AI Integration",
      icon: "sparkles",
      color: "#EC4899",
      desc: "Empowering applications with AI features — intelligent prompt automation, data processing, and LLM-assisted pipelines.",
      deliverables: ["Microsoft Certified AI Best Practices", "Generative AI APIs & Prompts", "Neural Network UI Concepts", "Smart Automated Pipelines"]
    },
    {
      title: "UI/UX Design & Prototyping",
      icon: "layout",
      color: "#10B981",
      desc: "Designing sleek dark-mode interfaces with glassmorphic cards, glowing neon accents, and frictionless micro-interactions.",
      deliverables: ["Wireframes & User Flows", "Micro-Interactions & CSS Animations", "Futuristic Glassmorphic Themes", "High Usability & Accessibility"]
    }
  ],

  testimonials: [
    {
      name: "Arun Kumar",
      role: "Senior Engineering Mentor",
      company: "Zemaraim Technology",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content: "Muthu demonstrated exceptional dedication during his 4-month internship. His ability to translate complex responsive UI designs into clean code and connect them with PHP backends was remarkable. A fast learner who consistently exceeds expectations.",
      rating: 5,
      tag: "Internship Mentor"
    },
    {
      name: "Dr. K. Senthil",
      role: "Department Coordinator & Professor",
      company: "SNS College of Technology",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "As the Event Lead for Code Battle 2025, Muthu proved his leadership and organizational prowess. He motivated teams, managed coding rounds smoothly, and showed true passion for computer science and technical excellence.",
      rating: 5,
      tag: "Faculty Recommendation"
    },
    {
      name: "Praveen Raj",
      role: "Full-Stack Project Collaborator",
      company: "Enterprise App Team",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      content: "Working alongside Muthu on the multi-user enterprise mobile app was a fantastic experience. His proactive adoption of AI tools to accelerate API scaffolding and Flutter debugging helped us deliver ahead of deadline.",
      rating: 5,
      tag: "Peer Developer"
    }
  ]
};
