import {
  Shield,
  CheckCircle,
  Users,
  Scale,
  Languages,
  ShieldCheck,
  Wallet,
  UserCheck,
  Star,
} from "lucide-react";

export const en = {
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    pricing: "Pricing",
    process: "How It Works",
    benefits: "Why Choose",
    testimonials: "Testimonials",
    trust: "Why Trust",
    faq: "FAQ",
    contact: "Contact",
    legal: "Legal",
  },
  hero: {
    title: "Fix your credit. Reclaim your future.",
    subtitle:
      "We help everyday people correct credit errors, boost scores, and move forward — with expert guidance and full transparency every step of the way.",
    cta1: "Start My Credit Repair",
    cta2: "Contact Us",
  },
  stats: {
    title: "Results That Prove Our Excellence",
    items: [
      { number: "24/7", label: "Total Support" },
      { number: "30", label: "Average Days to Results" },
      { number: "AI+", label: "Advanced Technology" },
      { number: "100%", label: "Client Focus" },
    ],
  },
  about: {
    title: "About Us",
    whoWeAre: {
      content:
        "FixPathCredit was created with one goal: To make credit repair simple, honest, and truly useful.",
      paragraph:
        "In an industry full of small print, empty promises, and confusing language, we offer a different path — one that's clear, personal, and built for real results.",
    },
    whatWeDo: {
      title: "What We Do",
      content:
        "We help people correct credit report errors, improve their scores, and rebuild financial confidence. Every part of the process is designed to be transparent and easy to understand — so you always know what we're doing, and why it matters.",
    },
    whatMakesUsDifferent: {
      title: "What Makes Us Unique",
      subtitle: "Differentials that make all the difference",
      items: [
        {
          title: "Aligned with U.S. Credit Laws (FCRA, CROA)",
          description:
            "We strictly follow U.S. regulations to ensure your safety and legal compliance.",
          icon: "scale",
        },
        {
          title: "Bilingual Support (English + Portuguese)",
          description:
            "Efficient support in both languages to enhance your experience.",
          icon: "languages",
        },
        {
          title: "Data Security and Privacy",
          description:
            "Your information is protected with encryption and best security practices.",
          icon: "shield-check",
        },
        {
          title: "Transparent Pricing, No Hidden Fees",
          description:
            "You know exactly what you're paying for — no surprises.",
          icon: "wallet",
        },
        {
          title: "Real Human Support",
          description: "Talk to real people, not bots.",
          icon: "user-check",
        },
        {
          title: "5-Star Support (Coming Soon)",
          description: "We're working to deliver award-winning support soon.",
          icon: "star",
        },
      ],
    },
    whyItMatters: {
      title: "Why It Matters",
      content:
        "Credit issues aren't just numbers on a screen. They affect real lives — jobs, housing, families, and peace of mind.",
      paragraph:
        "FixPathCredit exists to bring clarity, fairness, and accountability to a system that often leaves people feeling lost. We're here to make that path easier to walk — one step at a time.",
    },
    stats: {
      satisfaction: "98%",
      satisfactionLabel: "Satisfaction Rate",
      experience: "15+",
      experienceLabel: "Years of Experience",
    },
  },
  services: {
    title: "Our Services",
    subtitle: "Complete solutions for credit restoration",
    items: [
      {
        title: "Detailed Credit Analysis",
        description:
          "Complete evaluation of your credit history and identification of improvement points",
        icon: "📊",
      },
      {
        title: "Personalized Strategies",
        description:
          "Specific plans developed for your unique financial situation",
        icon: "🎯",
      },
      {
        title: "Expert Guidance",
        description:
          "Consulting on healthy credit practices and financial management",
        icon: "💡",
      },
      {
        title: "Continuous Monitoring",
        description: "Constant monitoring until desired results are achieved",
        icon: "📈",
      },
    ],
  },
  process: {
    title: "How Our Process Works",
    subtitle: "A proven method in 4 simple steps",
    steps: [
      {
        title: "Complete Analysis",
        description:
          "We evaluate your credit history and identify all improvement points",
      },
      {
        title: "Personalized Strategy",
        description: "We create a specific plan for your financial situation",
      },
      {
        title: "Professional Execution",
        description: "We implement necessary actions with complete discretion",
      },
      {
        title: "Continuous Monitoring",
        description: "We monitor results until achieving your goals",
      },
    ],
  },

  whoNeedsCredit: {
    title: "Do you identify with any of these situations?",
    subtitle: "Answer a few quick questions and discover how we can help you",
    quiz: {
      questions: [
        {
          id: 1,
          question: "Have you been denied credit recently?",
          options: [
            { text: "Yes, many times", solution: "urgent", color: "red" },
            { text: "Yes, sometimes", solution: "medium", color: "yellow" },
            { text: "No", solution: "prevention", color: "green" },
          ],
        },
        {
          id: 2,
          question: "Is your name blacklisted?",
          options: [
            {
              text: "Yes, in multiple agencies",
              solution: "cleanup",
              color: "red",
            },
            { text: "Yes, in some", solution: "partial", color: "yellow" },
            { text: "I don't know", solution: "check", color: "blue" },
          ],
        },
        {
          id: 3,
          question: "What's your main goal?",
          options: [
            { text: "Buy house/car", solution: "financing", color: "blue" },
            { text: "Get credit card", solution: "credit", color: "purple" },
            { text: "Start business", solution: "business", color: "green" },
          ],
        },
      ],
      solutions: {
        urgent: {
          title: "Critical Situation",
          description: "You need immediate action to restore your credit",
          action: "Free Emergency Analysis",
          color: "bg-red-500",
        },
        medium: {
          title: "Manageable Situation",
          description: "With the right strategies, we can solve quickly",
          action: "Quick Recovery Plan",
          color: "bg-yellow-500",
        },
        prevention: {
          title: "Prevention",
          description: "Keep your score high and protect your financial future",
          action: "Preventive Monitoring",
          color: "bg-green-500",
        },
        cleanup: {
          title: "Complete Cleanup",
          description: "We need a robust cleanup strategy",
          action: "Intensive Program",
          color: "bg-red-600",
        },
        partial: {
          title: "Partial Repair",
          description: "Let's focus on the most impactful blacklists",
          action: "Targeted Solution",
          color: "bg-orange-500",
        },
        check: {
          title: "Verification Needed",
          description: "First, let's analyze your real situation",
          action: "Free Diagnostic Consultation",
          color: "bg-blue-500",
        },
        financing: {
          title: "Focus on Financing",
          description: "Let's prepare your credit for major acquisitions",
          action: "Financing Preparation",
          color: "bg-indigo-500",
        },
        credit: {
          title: "Access to Cards",
          description: "Specific strategy for card approval",
          action: "Card Approved Program",
          color: "bg-purple-500",
        },
        business: {
          title: "Business Credit",
          description: "Preparation for business credit and corporate lines",
          action: "Entrepreneur Plan",
          color: "bg-green-600",
        },
      },
    },
  },

  creditImpact: {
    title: "Bad credit can prevent you from...",
    subtitle: "Real data shows how a low score limits your opportunities",
    barriers: [
      {
        icon: "🔒",
        title: "Financing your property",
        stat: "76%",
        statDescription: "of Americans had proposals rejected in 2023",
        consequence: "Interest rates up to 300% higher for approved",
        urgency: "high",
        solution: "Regularization to negotiate better conditions",
      },
      {
        icon: "🚫",
        title: "Getting credit cards",
        stat: "8 out of 10",
        statDescription: "applications denied with score below 400",
        consequence: "Limited to prepaid cards only",
        urgency: "high",
        solution: "Specific strategy for approval",
      },
      {
        icon: "⛔",
        title: "Renting without guarantor",
        stat: "90%",
        statDescription: "of real estate agencies require score above 300",
        consequence: "Need for guarantor or higher deposit",
        urgency: "medium",
        solution: "Regularization report to negotiate",
      },
      {
        icon: "🔴",
        title: "Vehicle financing",
        stat: "$15,000",
        statDescription: "average amount lost in high interest",
        consequence: "50% higher down payment or total rejection",
        urgency: "high",
        solution: "Specific preparation for automotive approval",
      },
      {
        icon: "❌",
        title: "Opening bank accounts",
        stat: "70%",
        statDescription: "of banks perform credit analysis",
        consequence: "Limited to basic accounts without benefits",
        urgency: "medium",
        solution: "Cleanup for access to premium products",
      },
    ],
    timeline: {
      title: "How bad credit affects your life:",
      steps: [
        {
          age: "20-30 years",
          impact: "Difficulty for first card and financing",
        },
        {
          age: "30-40 years",
          impact: "Impediment for homeownership and professional growth",
        },
        {
          age: "40+ years",
          impact: "Limitation for investments and retirement",
        },
      ],
    },
  },

  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Real stories of financial transformation",
    items: [
      {
        name: "Maria Silva",
        role: "Entrepreneur",
        content:
          "In just 45 days I managed to clear my name and regain access to credit. Exemplary professionalism!",
        rating: 5,
      },
      {
        name: "João Santos",
        role: "Freelancer",
        content:
          "Completely transparent process and surprising results. I recommend it to everyone who needs credit restoration.",
        rating: 5,
      },
      {
        name: "Ana Costa",
        role: "Teacher",
        content:
          "Humanized and efficient service. I was able to realize my dream of homeownership after Fix Path Credit's work.",
        rating: 5,
      },
    ],
  },
  trust: {
    title: "Why Trust Fix Path Credit?",
    subtitle: "Security and reliability at every step",
    items: [
      {
        title: "100% secure and confidential environment",
        description:
          "Your data is protected with the highest security standards",
        icon: Shield,
      },
      {
        title: "Professional and personalized support",
        description:
          "Each client receives a unique plan tailored to their situation",
        icon: Users,
      },
      {
        title: "Full commitment to your privacy",
        description: "Absolute discretion in all our processes",
        icon: CheckCircle,
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Get answers about our services",
    items: [
      {
        question: "Do I need a good credit score to get started?",
        answer:
          "No. Most of our clients start with credit challenges — that's what we're here for.",
      },
      {
        question: "Is this legal?",
        answer: "Yes. We follow all FCRA guidelines.",
      },
      {
        question: "How long does credit repair take?",
        answer:
          "Some clients see results in 30–60 days, but full improvement can take longer.",
      },
      {
        question: "Will I be locked into a contract?",
        answer: "No. You can cancel at any time.",
      },
      {
        question: "Is this just for people with bad credit?",
        answer:
          "No. We also help with small issues, identity theft, or prep for major purchases.",
      },
    ],
  },
  contact: {
    title: "Let's get started.",
    subtitle:
      "Fill out the short form below and we'll contact you with your next steps — no obligation, no pressure.",
    info: {
      title: "Contact Information",
      phone_label: "Phone",
      localization_label: "Localization",
      phone: "+1 (555) 123-4567",
      email: "contact@fixpathcredit.com",
      address: "Service throughout United States",
    },
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      placeholder: "Write here...",
      message: "What's your biggest concern right now? (optional)",
      describeYourSituation: "Describe your situation and how we can help you",
      submit: "Get in Touch",
      successMessages: {
        onSubmit: {
          title: "Success!",
          description:
            "Thanks! Your request has been received. We'll get in touch with your next steps within 1 business day.",
        },
      },
      errorMessages: {
        warning: "Please fill out all required fields.",
        name: "Name must be at least 2 characters long",
        email: "That doesn't look like a valid email address",
        phone: "Invalid number.",
        message:
          "Message too short — give us just a bit more to help you better.",
        title: "Error!",
        error:
          "An error occurred while submitting the form, please contact support.",
      },
    },
    security: "Your information is safe and confidential.",
    legalDisclaimer: {
      content:
        "FixPathCredit is not a law firm and does not provide legal advice. We offer educational tools and services designed to help clients understand and exercise their rights under the Fair Credit Reporting Act (FCRA). Results may vary. FixPathCredit cannot guarantee specific outcomes.",
      paragraph:
        "You have the right to dispute inaccurate items on your credit report directly with the credit bureaus at no cost. We are here to assist you if you choose to work with us.",
    },
  },
  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    madeWithCare: "Built with care. Powered by people.",
    support: "Bilingual Support: English | Português",
    contact: "Contact: contact@fixpathcredit.org",
  },
  creditSimulator: {
    title: "Credit Score Savings Simulator",
    subtitle:
      "Discover how much you can save over 30 years with a better credit score. Drag the slider below to see the impact of your score on your finances.",
    creditScoreLabel: "Credit Score",
    scoreLevels: ["Poor", "Fair", "Good", "Excellent"],
    monthlyPayment: "Monthly Payment",
    totalPaid: "Total Paid",
    savings: "Potential Savings",
    yearsFinancing: "30-year financing",
    in30Years: "Over 30 years",
    vsPoorScore: "vs. Poor Score",
    baseScore: "Base score",
    ctaButton: "Improve My Score Now",
    ctaDescription:
      "Start your journey to an excellent score and save thousands of dollars",
    descriptions: {
      poor: "Low score results in high interest and fewer credit options",
      fair: "Fair score offers better conditions, but there's still room for improvement",
      good: "Good score grants access to financial products with competitive rates",
      excellent: "Excellent score offers the best market rates and conditions",
    },
  },
  // Specific pages - Expanded content
  aboutPage: {
    title: "About Us",
    subtitle: "Learn about our story and mission",
    hero: {
      title: "Our Transformation Story",
      badge: "New company, real results",
      subtitle:
        "Founded in 2024, we are a new and innovative company dedicated to helping American families rebuild their dreams through credit restoration.",
      cta1: "Meet Our Team",
      cta2: "Our Services",
    },
    history: {
      title: "How It All Started",
      subtitle:
        "A journey that began with the mission to democratize access to credit in America",
      timeline: [
        {
          year: "2009",
          title: "The Beginning",
          description:
            "Fix Path Credit was born when our founders realized that millions of Americans were being harmed by incorrect information on their credit reports. It was necessary to democratize access to fair credit.",
        },
        {
          year: "2015",
          title: "Expansion",
          description:
            "We began our national expansion, opening offices in 15 states and developing proprietary technology for automated credit analysis.",
        },
        {
          year: "2024",
          title: "Leadership",
          description:
            "As a new and innovative company, we are growing rapidly with total focus on client satisfaction and effective credit restoration results.",
        },
      ],
    },
    mission: {
      title: "Our Mission",
      description:
        "To democratize access to fair and transparent credit, helping everyday people correct errors, improve their scores, and regain control of their financial lives.",
    },
    vision: {
      title: "Our Vision",
      description:
        "To be the leading credit restoration company in the market, recognized for excellence, innovation, and positive impact on the lives of millions of Americans.",
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Total Transparency",
          description:
            "No fine print or hidden fees. You always know what you're paying for and why.",
        },
        {
          title: "Real Results",
          description:
            "We focus on concrete improvements to your score and financial situation.",
        },
        {
          title: "Human Support",
          description: "Real support from people who care about your success.",
        },
        {
          title: "Legal Compliance",
          description: "We strictly follow all credit laws and regulations.",
        },
      ],
    },
    team: {
      title: "Team of Specialists",
      subtitle:
        "Our team consists of over 100 highly qualified specialists, including lawyers, credit analysts, financial consultants, and consumer protection specialists.",
      stats: [
        { number: "100+", label: "Certified Specialists" },
        { number: "15", label: "States Served" },
        { number: "24/7", label: "Support Available" },
        { number: "95%", label: "Satisfaction Rate" },
      ],
    },
    differentials: {
      title: "Why Choose Fix Path Credit?",
      subtitle:
        "Our differentials that make us the preferred choice of thousands of Americans",
      items: [
        {
          title: "Results Guarantee",
          description:
            "We offer a 30-day satisfaction guarantee. If you're not satisfied, we refund 100% of the amount.",
        },
        {
          title: "Total Security",
          description:
            "Your data is protected with bank-level encryption and full compliance with privacy laws.",
        },
        {
          title: "Fast Results",
          description:
            "First results in 30-60 days. Our average is 120 points increase in score.",
        },
        {
          title: "Personalized Support",
          description:
            "Human and personalized service by phone, chat, and email with dedicated specialists.",
        },
        {
          title: "Total Transparency",
          description:
            "Detailed monthly reports, no hidden fees, and real-time progress tracking.",
        },
        {
          title: "Innovative Technology",
          description:
            "New company focused on innovation, advanced technology, and 100% personalized service for each client.",
        },
      ],
    },
    howItWorks: {
      title: "How Fix Path Credit Works",
      subtitle:
        "Our proven methodology transforms your credit profile through a structured and transparent process",
      steps: [
        {
          number: "01",
          title: "Complete Analysis",
          description:
            "We evaluate your SSN across the 3 main credit bureaus (Experian, Equifax, TransUnion) identifying errors, inconsistencies, and improvement opportunities.",
        },
        {
          number: "02",
          title: "Personalized Strategy",
          description:
            "We create a unique plan based on your profile, prioritizing actions that will generate the greatest impact on your credit score.",
        },
        {
          number: "03",
          title: "Strategic Disputes",
          description:
            "We execute well-founded disputes with protection agencies, using specialized legal and technical argumentation.",
        },
        {
          number: "04",
          title: "Continuous Monitoring",
          description:
            "We monitor your score evolution and make strategy adjustments to maximize obtained results.",
        },
      ],
      methodology: {
        title: "Our Differentiated Methodology",
        items: [
          {
            title: "Advanced Technology",
            description:
              "Automated systems for data analysis and pattern identification in credit reports.",
          },
          {
            title: "Legal Expertise",
            description:
              "Team specialized in consumer law and personal data protection legislation.",
          },
          {
            title: "Human Follow-up",
            description:
              "Dedicated consultants for personalized guidance and support throughout the entire process.",
          },
        ],
      },
    },
    expectedResults: {
      title: "What You Can Expect",
      subtitle:
        "Concrete results that make a difference in your financial life",
      results: [
        {
          title: "Score Improvement",
          description:
            "Average increase of 120 points in credit score within 90 days",
          metric: "+120",
          unit: "points",
        },
        {
          title: "Negative Items Reduction",
          description: "Removal of incorrect records and undue negative marks",
          metric: "95%",
          unit: "success",
        },
        {
          title: "Credit Access",
          description: "Approval for credit cards, financing, and loans",
          metric: "30",
          unit: "days",
        },
      ],
      quickAnalysis: {
        time: "72h",
        label: "First Analysis",
      },
    },
    cta: {
      title: "Ready to Transform Your Financial Future?",
      subtitle:
        "Be part of the new generation of Americans who are recovering their credit with us. Start your journey to financial freedom today.",
      cta1: "Speak with Specialist",
      cta2: "View Our Plans",
    },
  },
  servicesPage: {
    title: "Services",
    subtitle: "Complete solutions for your financial freedom",
    hero: {
      title: "Complete Credit Restoration Solutions",
      badge: "Specialized services",
      subtitle:
        "We offer a comprehensive portfolio of services to recover your score and regain access to credit with security and efficiency.",
      mainServices: [
        {
          title: "Complete Analysis",
          subtitle: "72h for results",
        },
        {
          title: "Disputes",
          subtitle: "95% success rate",
        },
        {
          title: "Negotiation",
          subtitle: "Up to 90% discount",
        },
        {
          title: "Monitoring",
          subtitle: "24/7 surveillance",
        },
      ],
      cta: "Request Free Analysis",
    },
    mainServices: {
      title: "Our Main Services",
      subtitle:
        "A complete set of services developed to meet all your credit needs",
      services: [
        {
          title: "Complete Credit Analysis",
          description:
            "We perform a detailed and thorough evaluation of your credit history, identifying errors, inconsistencies, outdated information, and improvement opportunities across all credit bureaus.",
          features: [
            "Analysis at Experian, Equifax, TransUnion",
            "Error identification",
            "Detailed report",
            "Improvement projection",
          ],
          timeframe: "72h",
          timeframelabel: "Complete Analysis",
        },
        {
          title: "Professional Disputes",
          description:
            "Professional and strategic process of disputing inaccurate, incorrect, or outdated information on your credit report, following all regulations and industry best practices.",
          features: [
            "Well-founded disputes",
            "Legal follow-up",
            "Multiple rounds",
            "Complete documentation",
          ],
          timeframe: "95%",
          timeframelabel: "Success Rate",
        },
      ],
    },
    additionalServices: {
      title: "Complementary Services",
      subtitle:
        "Additional solutions for a complete credit recovery and protection experience",
      services: [
        {
          title: "Continuous Monitoring",
          description:
            "Real-time monitoring of your score and alerts about changes to your report.",
          features: ["Real-time alerts", "Monthly reports", "24/7 monitoring"],
        },
        {
          title: "Fraud Protection",
          description:
            "Monitoring and protection against unauthorized use of your SSN and personal data.",
          features: [
            "Fraud monitoring",
            "Security alerts",
            "Preventive blocking",
          ],
        },
        {
          title: "Financial Consulting",
          description:
            "Specialized guidance to maintain and improve your score after recovery.",
          features: [
            "Financial education",
            "Improvement tips",
            "Future planning",
          ],
        },
        {
          title: "Major Purchase Preparation",
          description:
            "Strategic preparation of your credit profile for major acquisitions.",
          features: [
            "Score optimization",
            "Approval strategies",
            "Credit simulations",
          ],
        },
        {
          title: "Legal Support",
          description:
            "Specialized legal support for more complex recovery cases.",
          features: [
            "Legal analysis",
            "Expert opinions",
            "Legal representation",
          ],
        },
        {
          title: "Express Recovery",
          description:
            "Priority service for urgent cases with reduced delivery time.",
          features: ["24h analysis", "Maximum priority", "Accelerated results"],
        },
      ],
    },
    process: {
      title: "How Our Services Work",
      subtitle:
        "A structured and transparent process to ensure the best results",
      steps: [
        {
          step: "1",
          title: "Initial Analysis",
          description:
            "Complete evaluation of your credit profile across all credit bureaus.",
        },
        {
          step: "2",
          title: "Personalized Strategy",
          description:
            "Creation of a specific action plan for your situation and goals.",
        },
        {
          step: "3",
          title: "Execution",
          description:
            "Implementation of disputes, negotiations, and other necessary actions.",
        },
        {
          step: "4",
          title: "Monitoring",
          description:
            "Continuous monitoring of results and adjustments when necessary.",
        },
      ],
    },
    cta: {
      title: "Ready to Recover Your Credit?",
      subtitle:
        "Our specialists are ready to analyze your situation and create a personalized plan to recover your score.",
      cta1: "Request Free Analysis",
      cta2: "View Pricing",
    },
  },
  pricingPage: {
    title: "Plans & Pricing",
    subtitle: "Choose the ideal plan for your situation",
    hero: {
      title: "Transparent Plans with No Hidden Fees",
      badge: "Free initial consultation for all plans",
      subtitle:
        "Choose the ideal plan for your situation. All include 30-day satisfaction guarantee and specialized support.",
    },
    plans: [
      {
        name: "Basic",
        price: "149",
        period: "one-time",
        description: "Ideal for complete initial analysis",
        features: [
          "Complete credit analysis in 72h",
          "Detailed error and inconsistency report",
          "Personalized action plan",
          "1 round of professional disputes",
          "Email support",
          "30-day guarantee",
        ],
        cta: "Choose Basic Plan",
        popular: false,
      },
      {
        name: "Professional",
        price: "349",
        period: "month",
        description: "For consistent and fast results",
        features: [
          "Everything in Basic plan included",
          "Unlimited disputes until resolution",
          "Active creditor negotiations",
          "Continuous monthly monitoring",
          "Priority phone and chat support",
          "Monthly progress reports",
        ],
        cta: "Choose Professional Plan",
        popular: true,
        badge: "MOST POPULAR",
      },
      {
        name: "Premium",
        price: "599",
        period: "month",
        description: "Complete solution with dedicated support",
        features: [
          "Everything in Professional plan included",
          "Exclusive dedicated consultant",
          "24/7 support across all channels",
          "Extended 120-day guarantee",
          "Complete financial consulting",
          "Major purchase preparation (home, car)",
          "Complete fraud protection",
        ],
        cta: "Choose Premium Plan",
        popular: false,
      },
    ],
    guarantees: {
      title: "Our Guarantees",
      subtitle:
        "We work with complete transparency and solid guarantees for your peace of mind",
      items: [
        {
          title: "Satisfaction Guarantee",
          description:
            "If you're not satisfied with our work within 30 days, we refund 100% of the amount invested.",
        },
        {
          title: "No Hidden Fees",
          description:
            "The price you see is the price you pay. No surprises, no extra charges.",
        },
        {
          title: "Flexible Cancellation",
          description:
            "You can cancel anytime without penalties or fees. No tricks.",
        },
      ],
    },
    results: {
      title: "Proven Results",
      subtitle:
        "Our numbers speak for themselves. As a new and innovative company, we focus on advanced technology and personalized service to deliver the best results.",
      stats: [
        { number: "24/7", label: "Support available" },
        { number: "100%", label: "Client focus" },
        { number: "30 days", label: "To first results" },
        { number: "AI+", label: "Advanced technology" },
      ],
      timeframe: "New",
      timeframelabel: "and Innovative",
    },
    faqSection: {
      title: "Frequently Asked Questions about Pricing",
      questions: [
        {
          question: "Can I change plans anytime?",
          answer:
            "Yes! You can upgrade or downgrade your plan at any time. Contact us and we'll adjust your subscription according to your needs.",
        },
        {
          question: "Is there a discount for annual payment?",
          answer:
            "Yes! We offer 2 free months for annual payments on Professional and Premium plans. Contact us to learn about special conditions.",
        },
        {
          question: "What happens if I don't get results?",
          answer:
            "We offer a satisfaction guarantee. If we can't identify improvement opportunities in your initial analysis, we refund 100% of the amount invested.",
        },
      ],
    },
    cta: {
      title: "Start Your Credit Recovery Today",
      subtitle:
        "Choose the ideal plan for your situation and take the first step towards financial freedom. Free initial consultation for all plans.",
      cta1: "Speak with Consultant",
      cta2: "Learn About Services",
    },
  },
  faqPage: {
    title: "Frequently Asked Questions",
    subtitle: "Get all your questions answered about our services",
    hero: {
      title: "Frequently Asked Questions About Credit Restoration",
      badge: "Over 50 questions answered by specialists",
      subtitle:
        "Find answers to the main questions about our services, processes, and results.",
    },
    quickStats: [
      { number: "50+", label: "Questions Answered" },
      { number: "24h", label: "Guaranteed Response" },
      { number: "New", label: "and Innovative" },
      { number: "100%", label: "Client Focus" },
    ],
    categories: [
      {
        title: "General",
        description: "Basic information about credit",
        questions: [
          {
            question: "What is credit restoration?",
            answer:
              "Credit restoration is a legal process that involves identifying and disputing incorrect, inaccurate, or outdated information on your credit report. We strictly follow FCRA laws and American legislation to ensure your report reflects accurate and updated information.",
          },
          {
            question: "Is credit restoration legal in the US?",
            answer:
              "Yes, it is completely legal. You have the legal right to dispute incorrect information on your credit report. We use only legal methods approved by regulatory agencies to help our clients.",
          },
          {
            question: "Can anyone use these services?",
            answer:
              "Yes! Our services are for anyone over 18 who has an SSN and wants to improve their credit score. We serve everyone from people who never had credit to those with complex debt history.",
          },
        ],
      },
      {
        title: "Services",
        description: "How our services work",
        questions: [
          {
            question: "How does the restoration process work?",
            answer:
              "Our process has 4 stages: 1) Complete analysis of your SSN across all bureaus, 2) Creation of personalized strategy, 3) Execution of disputes and negotiations, 4) Continuous monitoring of results. You receive regular reports on progress.",
          },
          {
            question: "Can you remove any type of negative information?",
            answer:
              "We can dispute incorrect, inaccurate, incomplete, or outdated information. Correct information within the legal timeframe cannot be removed. Our expertise is in identifying errors and inconsistencies that unfairly harm your score.",
          },
          {
            question: "Do I need to provide passwords or personal data?",
            answer:
              "We never ask for bank account or card passwords. We work only with public information from credit bureaus and documents you expressly authorize. All communication is secure and encrypted.",
          },
        ],
      },
      {
        title: "Pricing",
        description: "Plans and investment",
        questions: [
          {
            question: "What's the difference between plans?",
            answer:
              "Basic ($149) includes analysis and one round of disputes. Professional ($349/month) has unlimited disputes and continuous monitoring. Premium ($599/month) adds dedicated consultant and 24/7 support. All include guarantee.",
          },
          {
            question: "Are there hidden fees?",
            answer:
              "No! All costs are clearly stated before contracting. What you see is exactly what you pay, no surprises or extra charges.",
          },
          {
            question: "Can I cancel anytime?",
            answer:
              "Yes! We have no loyalty contracts. You can cancel anytime without penalties. We offer 30-day guarantee for Basic plan and up to 120 days for Premium.",
          },
        ],
      },
      {
        title: "Results",
        description: "Timelines and expectations",
        questions: [
          {
            question: "How long does it take to see results?",
            answer:
              "First results usually appear within 30-60 days. The complete process can take 3 to 6 months, depending on your situation's complexity. Our average is 120 points increase in score within 90 days.",
          },
          {
            question: "Do you guarantee specific results?",
            answer:
              "We cannot guarantee a specific number of points, as each case is unique. However, we guarantee we will identify all improvement opportunities and execute the best strategies for your situation.",
          },
          {
            question: "What happens if I don't get results?",
            answer:
              "We offer a satisfaction guarantee. If we can't identify improvement opportunities in your analysis or if you're not satisfied with our work, we refund 100% of the amount invested.",
          },
        ],
      },
    ],
    stillHaveQuestions: {
      title: "Still Have Questions?",
      subtitle:
        "Our team of specialists is always available to clarify your doubts and help you make the best decision for your financial situation.",
      contactMethods: [
        {
          method: "Phone",
          value: "(555) 123-4567",
        },
        {
          method: "Chat",
          value: "Live chat available",
        },
        {
          method: "Email",
          value: "contact@fixpathcredit.com",
        },
      ],
      responseTime: "24h",
      responseTimeLabel: "Guaranteed Response",
    },
    cta: {
      title: "Ready to Get Started?",
      subtitle:
        "Don't let more doubts prevent you from recovering your credit. Contact us and start your journey to financial freedom today.",
      cta1: "Speak with Specialist",
      cta2: "View Our Plans",
    },
  },
  contactPage: {
    title: "Contact",
    subtitle: "We're here to help you take the first step",
    hero: {
      title: "Let's Talk?",
      badge: "WE'RE ONLINE AND READY TO HELP",
      subtitle:
        "Our team of specialists is waiting for you! Let's discover together how to transform your credit situation into a success story.",
      stats: [
        { icon: "✓", text: "24h Response" },
        { icon: "💬", text: "Personalized Service" },
        { icon: "🎯", text: "Free Consultation" },
      ],
      cta: "Choose My Preferred Channel",
      ctaDescription: "Or scroll down and discover all the ways to contact us",
    },
    contactMethods: {
      title: "Choose How You Prefer to Contact Us",
      subtitle: "We offer multiple service channels for your convenience",
      methods: [
        {
          title: "Phone",
          value: "(555) 123-4567",
          hours: "Monday to Friday: 8 AM to 6 PM, Saturday: 8 AM to 12 PM",
          link: "tel:+15551234567",
        },
        {
          title: "Live Chat",
          value: "Available 24/7",
          hours: "Instant response, Quick support",
          link: "#",
        },
        {
          title: "Email",
          value: "contact@fixpathcredit.com",
          hours: "Response within 24h, Monday to Friday",
          link: "mailto:contact@fixpathcredit.com",
        },
        {
          title: "Online Chat",
          value: "Immediate Service",
          hours: "Monday to Friday: 8 AM to 10 PM, Click to start",
          link: "#",
        },
      ],
    },
    form: {
      title: "Request Your Free Consultation",
      subtitle:
        "Fill out the form below and our team will contact you within 24 hours to schedule your free initial consultation.",
      fields: {
        name: "Full Name",
        ssn: "SSN",
        phone: "Phone",
        email: "Email",
        situation: "Current Credit Situation",
        bestTime: "Best Time to Contact",
        message: "Message (Optional)",
      },
      situationOptions: [
        "Select your situation",
        "Clean name but low score",
        "Name on credit bureaus",
        "Need to negotiate debts",
        "Want to improve my score",
        "Want to monitor my credit",
        "Other situation",
      ],
      timeOptions: [
        "Select time",
        "Morning (8 AM to 12 PM)",
        "Afternoon (12 PM to 6 PM)",
        "Evening (6 PM to 10 PM)",
        "Any time",
      ],
      placeholders: {
        name: "Your full name",
        ssn: "XXX-XX-XXXX",
        phone: "(555) 123-4567",
        email: "your@email.com",
        message: "Tell us more about your situation or specific questions...",
      },
      checkbox:
        "I agree to receive contact from Fix Path Credit and accept the terms of use and privacy policy.",
      submit: "Request Free Consultation",
      benefits: {
        title: "What you get in the free consultation:",
        items: [
          "Initial analysis of your SSN",
          "Identification of improvement opportunities",
          "Personalized strategy for your case",
          "Guidance on next steps",
          "Clarification of all your questions",
        ],
      },
      guarantees: {
        title: "Fix Path Credit Guarantees",
        items: [
          "100% protected data",
          "Full privacy law compliance",
          "Satisfaction guarantee",
          "No hidden fees",
        ],
      },
    },
    offices: {
      title: "Our Offices",
      subtitle:
        "We are present in 15 states with strategically located offices",
      locations: [
        {
          city: "New York - Headquarters",
          badge: "Main Office",
          address: "123 Wall Street - 12th floor, New York, NY 10005",
          hours: "Monday to Friday: 8 AM to 6 PM",
        },
        {
          city: "Los Angeles",
          badge: "Regional Office",
          address: "456 Wilshire Blvd - 8th floor, Los Angeles, CA 90017",
          hours: "Monday to Friday: 8 AM to 5 PM",
        },
        {
          city: "Chicago",
          badge: "Regional Office",
          address: "789 Michigan Ave - 5th floor, Chicago, IL 60611",
          hours: "Monday to Friday: 8 AM to 5 PM",
        },
      ],
      remoteService: "We also serve remotely in all states across America",
      phoneSupport: "(555) 123-4567 - Call Now",
    },
    quickFaq: {
      title: "Frequently Asked Questions about Contact",
      questions: [
        {
          question: "How quickly do you return contact?",
          answer:
            "We guarantee return within 24 hours for all contacts received. During business hours, we usually respond within a few hours.",
        },
        {
          question: "Is the initial consultation really free?",
          answer:
            "Yes! The initial consultation is 100% free and without commitment. Our goal is to understand your situation and show how we can help.",
        },
        {
          question: "Do I need to travel to an office?",
          answer:
            "It's not mandatory. We serve remotely throughout America. In-person service is available in cities where we have offices.",
        },
      ],
    },
    cta: {
      title: "Don't Waste More Time!",
      subtitle:
        "Every day without credit is a lost opportunity. Contact us now and start your journey to financial freedom today.",
      cta1: "Chat with Us",
      cta2: "Call Now",
    },
  },
  legalPage: {
    title: "Legal",
    subtitle: "Complete transparency in our terms and policies",
    hero: {
      title: "Legal Documents and Transparency",
      badge: "100% compliant with regulations and privacy laws",
      subtitle:
        "Learn about our terms of use, privacy policy, and commitments to protecting your data and legal compliance.",
    },
    navigation: [
      { title: "Terms of Use", anchor: "#terms" },
      { title: "Privacy", anchor: "#privacy" },
      { title: "Compliance", anchor: "#compliance" },
      { title: "Regulations", anchor: "#regulations" },
    ],
    termsOfUse: {
      title: "Terms of Use",
      lastUpdated: "Last updated: December 15, 2024",
      effectiveDate: "From acceptance date",
      sections: [
        {
          title: "1. About Fix Path Credit",
          content:
            "Fix Path Credit is a company specialized in credit restoration consulting, duly registered with EIN 12-3456789, headquartered at 123 Wall Street - 12th floor, New York, NY 10005. We offer credit analysis services, disputing incorrect information, debt negotiation, and continuous monitoring, always within legal parameters established by American legislation.",
        },
        {
          title: "2. Services Offered",
          content:
            "Our services include, but are not limited to: Complete and detailed credit history analysis; Identification of errors and inconsistencies in reports; Disputing incorrect or outdated information; Negotiation with creditors for debt settlement; Continuous credit score monitoring; Financial and educational consulting; Protection against fraud and data misuse. IMPORTANT: We do not guarantee specific results, as each case is unique and depends on various external factors.",
        },
        {
          title: "3. Client Responsibilities",
          content:
            "By contracting our services, the client commits to: Provide true and updated information; Present all requested documentation; Make payment as agreed; Communicate changes in their financial situation; Not perform actions that harm ongoing work; Maintain confidentiality about strategies and methods used.",
        },
        {
          title: "4. Payments and Cancellations",
          content:
            "Payment Methods: We accept credit card, debit card, bank transfers, and checks. Cancellation Policy: The client can cancel the service at any time without penalties. For monthly services, cancellation must be requested up to 5 days before due date. Guarantee: We offer 30-day satisfaction guarantee for Basic plan and up to 120 days for Premium plan.",
        },
        {
          title: "5. Liability Limitations",
          content:
            "Fix Path Credit is not responsible for specific results, as score improvement depends on external factors such as credit bureau policies, client payment behavior, and other variables. Our responsibility is limited to the amount paid for contracted services.",
        },
      ],
    },
    privacyPolicy: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Data Collection",
          content: "We collect the following types of data:",
          subsections: [
            {
              title: "Personal Data:",
              items: [
                "Full name, SSN, ID",
                "Date of birth",
                "Residential address",
                "Phone and email",
                "Professional information",
              ],
            },
            {
              title: "Financial Data:",
              items: [
                "Credit reports from bureaus",
                "Payment history",
                "Debt information",
                "Credit score",
              ],
            },
          ],
        },
        {
          title: "2. Data Usage",
          content:
            "We use your data exclusively for: Providing contracted services; Communication about service progress; Compliance with legal obligations; Service improvement (anonymized data); Fraud prevention. IMPORTANT: We never share your personal data with third parties for commercial or marketing purposes.",
        },
        {
          title: "3. Data Protection",
          content: "We implement the following security measures:",
          subsections: [
            {
              title: "Technical:",
              items: [
                "SSL/TLS encryption",
                "Secure servers",
                "Encrypted backups",
                "Advanced firewall",
                "24/7 monitoring",
              ],
            },
            {
              title: "Administrative:",
              items: [
                "Restricted access",
                "Staff training",
                "Internal policies",
                "Regular audits",
                "Confidentiality contracts",
              ],
            },
          ],
        },
        {
          title: "4. Your Rights",
          content: "Under privacy laws, you have the following rights:",
          rights: [
            {
              title: "Access",
              description: "Know what data we have about you",
            },
            { title: "Correction", description: "Correct incorrect data" },
            { title: "Deletion", description: "Request data removal" },
            {
              title: "Portability",
              description: "Transfer data to another service",
            },
          ],
        },
      ],
    },
    regulatoryCompliance: {
      title: "Regulatory Compliance",
      regulators: {
        title: "Regulatory Bodies and Certifications",
        entities: [
          {
            title: "Consumer Financial Protection Bureau",
            items: [
              "Compliance with credit regulations",
              "CFPB guidelines adherence",
              "Consumer protection compliance",
            ],
          },
          {
            title: "Federal Trade Commission",
            items: [
              "Full FCRA compliance",
              "Consumer protection reports",
              "Continuous guideline adaptation",
            ],
          },
          {
            title: "State Regulatory Bodies",
            items: [
              "State law compliance",
              "Consumer relations transparency",
              "Protection standards compliance",
            ],
          },
          {
            title: "Credit Bureaus",
            items: [
              "Official accreditation",
              "Authorized system access",
              "Internal policy compliance",
            ],
          },
        ],
      },
      certifications: {
        title: "Certifications and Auditing",
        items: [
          {
            title: "SOC 2 Type II",
            description: "Information security certification",
          },
          {
            title: "SSL/TLS",
            description: "Advanced encryption for data protection",
          },
          {
            title: "Annual Audit",
            description: "Independent audit of processes and systems",
          },
        ],
      },
      legalContact: {
        title: "Legal Contact",
        departments: [
          {
            title: "Legal Department",
            email: "legal@fixpathcredit.com",
            phone: "(555) 123-4568",
            hours: "Monday to Friday, 9 AM to 5 PM",
          },
          {
            title: "Legal Notifications",
            email: "legal@fixpathcredit.com",
            address: "123 Wall Street - 12th floor",
            cep: "New York, NY 10005",
          },
        ],
      },
    },
    cta: {
      title: "Guaranteed Transparency and Security",
      subtitle:
        "Our legal compliance and commitment to protecting your data ensure you have complete security when contracting our services.",
      cta1: "Speak with Specialist",
      cta2: "Contact Legal",
    },
  },
};
