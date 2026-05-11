export const rameshData = {
  palette: {
    bg: "#FFFBFD",
    bg2: "#FFF0F5",
    bgCard: "#FCE4EC",
    bgDark: "#7B0C41",
    bgDarker: "#5C0830",
    pink: "#D81B7E",
    pinkLight: "#F06292",
    pinkDeep: "#AD1457",
    pinkSoft: "rgba(216,27,126,0.08)",
    pinkMid: "rgba(216,27,126,0.18)",
    text: "#1C0A14",
    textDim: "rgba(28,10,20,0.65)",
    textMuted: "rgba(28,10,20,0.42)",
    border: "rgba(216,27,126,0.14)",
    borderStrong: "rgba(216,27,126,0.28)",
    white: "#ffffff",
  },

  hero: {
    kicker: "Software · Custom App",
    headline: "Ramesh Makeup Studio",
    tagline: "A complete studio management app — intelligent booking, smart student assignment, and performance tracking. Built end-to-end for a growing beauty studio in Hyderabad.",
    stats: [
      { value: "3", label: "User Roles" },
      { value: "9+", label: "Services" },
      { value: "Smart", label: "Assignment System" },
    ],
    phones: [
      "/assets/Ramesh-makeup/customer-view/home-1.png",
      "/assets/Ramesh-makeup/customer-view/splash.png",
    ],
  },

  problem: {
    kicker: "The Problem",
    headline: "A growing studio running on WhatsApp",
    items: [
      {
        num: "01",
        title: "Manual bookings",
        desc: "Every appointment was handled over chat — no confirmation, no history, no scheduling system.",
      },
      {
        num: "02",
        title: "No student visibility",
        desc: "Multiple makeup students in the studio with no way to track grades, performance, or availability.",
      },
      {
        num: "03",
        title: "Unfair assignment",
        desc: "Senior students always got the work. Newer students had no structured path to build their portfolio.",
      },
    ],
  },

  roles: {
    kicker: "Three Roles. One App.",
    headline: "Built for everyone in the studio",
    items: [
      {
        role: "Customer",
        tagline: "Book. Watch. Review.",
        desc: "Browse services, book appointments, watch the studio tour, and rate their experience.",
        color: "#D81B7E",
        capabilities: ["OTP sign-in", "Service booking", "Studio tour & reels", "Feedback & ratings"],
        screen: "/assets/Ramesh-makeup/customer-view/home-1.png",
      },
      {
        role: "Admin",
        tagline: "Manage. Assign. Report.",
        desc: "The control centre — manage students, review requests, assign opportunities, and track performance.",
        color: "#AD1457",
        capabilities: ["Student management", "Opportunity assignment", "Approval workflow", "Performance reports"],
        screen: "/assets/Ramesh-makeup/admin-view/students-list.png",
      },
      {
        role: "Student",
        tagline: "Learn. Request. Grow.",
        desc: "View assigned bookings, request opportunities, and build a professional track record.",
        color: "#F06292",
        capabilities: ["Opportunity requests", "Assignment status", "Service browsing", "Profile building"],
        screen: "/assets/Ramesh-makeup/student-view/student-opportunities.png",
      },
    ],
  },

  assignment: {
    kicker: "The Core Feature",
    headline: "Smart Assignment System",
    desc: "Customers aren't randomly assigned. The system matches based on four criteria — ensuring fair opportunities for every student while maintaining quality for every customer.",
    flow: [
      { label: "Customer Books", sub: "Service + date + time" },
      { label: "Admin Reviews", sub: "Request in admin panel" },
      { label: "Smart Match", sub: "Best-fit student selected", isCore: true },
      { label: "Student Assigned", sub: "Notified instantly" },
      { label: "Feedback Loop", sub: "Rating updates score" },
    ],
    criteria: [
      { icon: "Trophy", label: "Student Rank", desc: "Grade & seniority in the studio" },
      { icon: "Clock", label: "Experience", desc: "Total completed sessions" },
      { icon: "Star", label: "Feedback Score", desc: "Average customer rating" },
      { icon: "BarChart2", label: "Service History", desc: "Past performance on similar services" },
    ],
  },

  screens: {
    kicker: "Inside the App",
    headline: "Every screen, built with purpose",
    tabs: [
      {
        id: "customer",
        label: "Customer",
        screens: [
          { src: "/assets/Ramesh-makeup/customer-view/splash.png", label: "Splash" },
          { src: "/assets/Ramesh-makeup/customer-view/signin.png", label: "Sign In" },
          { src: "/assets/Ramesh-makeup/customer-view/home-1.png", label: "Home" },
          { src: "/assets/Ramesh-makeup/customer-view/service-detail.png", label: "Book" },
        ],
      },
      {
        id: "admin",
        label: "Admin",
        screens: [
          { src: "/assets/Ramesh-makeup/admin-view/admin-login.png", label: "Login" },
          { src: "/assets/Ramesh-makeup/admin-view/students-list.png", label: "Students" },
          { src: "/assets/Ramesh-makeup/admin-view/opportunity-page.png", label: "Assign" },
          { src: "/assets/Ramesh-makeup/admin-view/students-report.png", label: "Reports" },
        ],
      },
      {
        id: "student",
        label: "Student",
        screens: [
          { src: "/assets/Ramesh-makeup/student-view/student-login.png", label: "Login" },
          { src: "/assets/Ramesh-makeup/student-view/student-home.png", label: "Home" },
          { src: "/assets/Ramesh-makeup/student-view/student-services.png", label: "Services" },
          { src: "/assets/Ramesh-makeup/student-view/student-opportunities.png", label: "Opportunities" },
        ],
      },
    ],
  },

  outcome: {
    kicker: "What We Shipped",
    headline: "A complete studio operating system",
    stats: [
      { value: "3", label: "User roles" },
      { value: "9+", label: "Services" },
      { value: "Smart", label: "Assignment algorithm" },
      { value: "100%", label: "Custom built" },
    ],
    services: [
      "App Design",
      "App Development",
      "Multi-Role Auth",
      "Booking System",
      "Assignment Algorithm",
      "Admin Dashboard",
      "Performance Tracking",
    ],
  },

  footer: {
    next: {
      label: "Next Case Study",
      title: "One Day Stories",
      to: "/projects/one-day-stories",
    },
  },
}
