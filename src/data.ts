import codehubScreenshot from './components/Codehub.png'
import communityCodehubScreenshot from './components/Community-Codehub.png'
import learnCodehubScreenshot from './components/Learn-Codehub.png'
import projectsCodehubScreenshot from './components/Projects-Codehub.png'
import ranksCodehubScreenshot from './components/Ranks-Codehub.png'
import laundryLoginScreenshot from './components/L_Login.png'
import laundryDashboardScreenshot from './components/L_DBoard.png'
import laundryCustomersScreenshot from './components/L_Customers.png'
import laundryMachinesScreenshot from './components/L_Machines.png'
import laundryServicesScreenshot from './components/L_Services.png'
import laundryReportsScreenshot from './components/L_Reports.png'
import laundryTeamScreenshot from './components/L_Team.png'
import trendoraDashboardScreenshot from './components/T_dashB.png'
import trendoraShopScreenshot from './components/T_Shop.png'
import trendoraCollectionScreenshot from './components/T_collection.png'
import trendoraOrdersScreenshot from './components/T_order.png'
import trendoraRewardsScreenshot from './components/T_rewards.png'
import trendoraChooseScreenshot from './components/T_choose.png'
import trendoraCartScreenshot from './components/T_cart.png'
import snsMemoryLoginScreenshot from './components/S_login.png'
import snsMemoryDashboardScreenshot from './components/S_dashb.png'
import snsMemoryStudentsScreenshot from './components/S_students.png'
import snsMemoryFacultyScreenshot from './components/S_F&S.png'
import snsMemoryCoursesScreenshot from './components/S_Course.png'
import snsMemoryGraduationScreenshot from './components/S_gradTracker.png'
import snsMemoryWallScreenshot from './components/S_Mwall.png'
import snsMemoryBirthdaysScreenshot from './components/S_birthD.png'
import snsMemoryYearbookScreenshot from './components/S_YearB.png'

// Edit this file to customize the portfolio. Empty URLs render as "coming soon".
export const profile = {
  name: 'Chinjay D. Arbois', brand: 'SENJAI', nickname: 'Jay', title: 'BSCS Student & Web Developer',
  tagline: 'Turning Ideas into Code, One Solution at a Time.', location: 'Surigao City, Philippines',
  school: 'Surigao del Norte State University', degree: 'Bachelor of Science in Computer Science',
  level: '4th Year', graduation: '2027', honors: 'With Honors (2022–2023)',
  intro: "I'm a 4th-year Computer Science student focused on building practical web experiences and continuously developing my skills across frontend, backend, databases, and emerging technologies.",
}
export const links = {
  email: 'arboischinjay@gmail.com',
  github: 'https://github.com/senjai0',
  linkedin: 'https://www.linkedin.com/in/chinjay-arbois-20671b2bb/',
  facebook: 'https://www.facebook.com/senjai.arbois30',
  instagram: 'https://www.instagram.com/snjaii.a/',
  tiktok: 'https://www.tiktok.com/@user73940282838483882839',
  resumePdf: '/resume.pdf',
} // Resume PDF is served from public/resume.pdf.
export const nav = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']
export const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'PHP'] },
  { title: 'Frontend & UI/UX', items: ['HTML', 'CSS', 'React', 'Responsive Web Development', 'Basic UI/UX', 'Basic UI Design'] },
  { title: 'Backend & APIs', items: ['Django', 'Django REST Framework', 'REST API Development'] },
  { title: 'Databases', items: ['SQL', 'PostgreSQL', 'MySQL', 'Firebase/Firestore', 'Database Design'] },
  { title: 'Tools & Platforms', items: ['Git', 'GitHub', 'Cisco Packet Tracer / Networking', 'Basic AI Integration', 'AI-assisted Development', 'Technical Documentation', 'Video Editing'] },
]
const codeHubProject = {
  name: 'CCIS-CodeHub',
  category: 'Thesis Project',
  role: 'Student Software Developer',
  liveUrl: 'https://ccis-codehub.space/',
  sourceUrl: '',
  screenshots: [
    { src: codehubScreenshot, alt: 'CCIS-CodeHub project dashboard screenshot' },
    { src: communityCodehubScreenshot, alt: 'CCIS-CodeHub community screenshot' },
    { src: learnCodehubScreenshot, alt: 'CCIS-CodeHub learning platform screenshot' },
    { src: projectsCodehubScreenshot, alt: 'CCIS-CodeHub project management screenshot' },
    { src: ranksCodehubScreenshot, alt: 'CCIS-CodeHub rankings screenshot' },
  ],
  thesis: 'Developing an AI-Driven Learning Platform with Integrated Collaborative Project, Community-Based Interaction, AI Mentorship with Contextual Career Guidance, and Internal Assessment Integrity Monitoring',
  description: 'CCIS-CodeHub is an intelligent Student Experience Platform that integrates learning paths, community engagement, collaborative project work, guided AI mentorship, and internal assessment integrity monitoring.',
  stack: ['React', 'Django', 'PostgreSQL'],
  features: ['Learning paths', 'Community engagement', 'Collaborative project work', 'Guided AI mentorship with contextual career guidance', 'Internal assessment integrity monitoring'],
  details: [
    ['Overview', '**CCIS-CodeHub** is an AI-driven learning platform developed as a thesis and capstone project for the College of Computing and Information Sciences. It brings learning modules, coding exercises, collaborative project management, community interaction, AI mentorship, career-oriented learning, and assessment integrity monitoring into one platform. The system was developed using modern web technologies, including React, Django REST Framework, Django Channels, and PostgreSQL.'],
    ['Problem', 'Computer science students often use separate platforms for learning, coding, communication, project collaboration, and assessment. This creates **tool fragmentation** and makes the academic workflow less connected. The project also addressed the growing risk of **AI dependence**, limited career-oriented learning, weak peer collaboration, and challenges in maintaining academic integrity during online assessments.'],
    ['Solution', 'CCIS-CodeHub provides a **unified academic environment** where students can learn, practice coding, collaborate on projects, communicate with peers, and receive contextual AI guidance. It includes an LMS, Kanban project management with GitHub integration, community features, AI Mentor, coding exercises, video-based learning, RBAC, and internal assessment activity monitoring.'],
    ['Development Process', 'The system was developed using an **Agile development approach**, focusing on iterative development, testing, refinement, and integration of different platform features. The project used **React 18** for the frontend, **Django REST Framework** for backend services, **Django Channels/WebSockets** for real-time functionality, and third-party LLM technologies for AI-related features.'],
    ['My Role', '**Student Software Developer**\n\nI contributed to the development and integration of the CCIS-CodeHub platform, working with **React, Django, PostgreSQL, and related web technologies**. My responsibilities included developing web components, integrating platform features, testing and debugging functionality, refining the user experience, and supporting the documentation of the system development process.'],
    ['Challenges', 'The project faced several technical challenges, particularly in integrating multiple systems into one platform. Real-time collaboration required an active network connection, while the AI components were affected by available training data, contextual information, and hardware limitations. The assessment monitoring system was also limited to system-detectable events and could not determine a student’s intent or detect every form of external assistance.'],
    ['Results', 'The completed platform demonstrated that multiple academic activities could be brought together into a single environment. The final system achieved an **overall software-quality weighted mean of 4.05 (Acceptable)** based on the evaluation by 30 BSCS student respondents.\n\nThe AI Mentor evaluation also showed improved performance with contextual prompting, achieving a **90.1% average pass result compared with 83.9% without the system prompt**. The project also produced an assessment-integrity monitoring mechanism and integrated collaborative, learning, community, and coding features into one platform.'],
  ] as [string, string][],
}

const laundryProProject = {
  name: 'LaundryPro',
  category: 'Laundry Management System',
  role: 'Application Developer',
  liveUrl: '',
  sourceUrl: '',
  screenshots: [
    { src: laundryLoginScreenshot, alt: 'LaundryPro login screen' },
    { src: laundryDashboardScreenshot, alt: 'LaundryPro dashboard' },
    { src: laundryCustomersScreenshot, alt: 'LaundryPro customer management' },
    { src: laundryMachinesScreenshot, alt: 'LaundryPro machine management' },
    { src: laundryServicesScreenshot, alt: 'LaundryPro services' },
    { src: laundryReportsScreenshot, alt: 'LaundryPro reports' },
    { src: laundryTeamScreenshot, alt: 'LaundryPro team management' },
  ],
  thesis: '',
  description: 'LaundryPro is a web-based laundry management system designed to simplify and organize laundry service operations. It provides a centralized interface for managing laundry orders, customer information, service status, and other essential operational tasks, helping make the laundry workflow more organized and efficient.',
  stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  features: ['Laundry order management', 'Customer information management', 'Service status tracking', 'Operational tools for laundry teams'],
  details: [
    ['Overview', 'LaundryPro is a web-based laundry management system designed to simplify and organize laundry service operations. It provides a centralized interface for managing laundry orders, customer information, service status, and other essential operational tasks, helping make the laundry workflow more organized and efficient.'],
    ['Features', 'The interface brings together laundry orders, customer information, service status, machine management, reports, and team operations.'],
  ] as [string, string][],
}

const trendoraProject = {
  name: 'Trendora - Apparel',
  category: 'Apparel E-commerce',
  role: 'Application Developer',
  liveUrl: '',
  sourceUrl: '',
  screenshots: [
    { src: trendoraDashboardScreenshot, alt: 'Trendora apparel dashboard' },
    { src: trendoraShopScreenshot, alt: 'Trendora apparel shop' },
    { src: trendoraCollectionScreenshot, alt: 'Trendora apparel collection' },
    { src: trendoraOrdersScreenshot, alt: 'Trendora order management' },
    { src: trendoraRewardsScreenshot, alt: 'Trendora rewards' },
    { src: trendoraChooseScreenshot, alt: 'Trendora product selection' },
    { src: trendoraCartScreenshot, alt: 'Trendora shopping cart' },
  ],
  thesis: '',
  description: 'Trendora is an apparel e-commerce project with product collections, product selection, a shopping cart, order management, and rewards.',
  stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  features: ['Apparel shop and collections', 'Order management', 'Rewards', 'Product selection and cart'],
  details: [
    ['Overview', 'Trendora is an apparel e-commerce project with product collections, product selection, a shopping cart, order management, and rewards.'],
  ] as [string, string][],
}

const snsMemoryKeeperProject = {
  name: 'SNSU Memory Keeper',
  category: 'School Memory & Information Platform',
  role: 'Application Developer',
  liveUrl: '',
  sourceUrl: '',
  screenshots: [
    { src: snsMemoryLoginScreenshot, alt: 'SNSU Memory Keeper — Login Page' },
    { src: snsMemoryDashboardScreenshot, alt: 'SNSU Memory Keeper — Dashboard' },
    { src: snsMemoryStudentsScreenshot, alt: 'SNSU Memory Keeper — Students' },
    { src: snsMemoryFacultyScreenshot, alt: 'SNSU Memory Keeper — Faculty & Staff' },
    { src: snsMemoryCoursesScreenshot, alt: 'SNSU Memory Keeper — Courses' },
    { src: snsMemoryGraduationScreenshot, alt: 'SNSU Memory Keeper — Graduation Tracker' },
    { src: snsMemoryWallScreenshot, alt: 'SNSU Memory Keeper — Memory Wall' },
    { src: snsMemoryBirthdaysScreenshot, alt: 'SNSU Memory Keeper — Birthdays' },
    { src: snsMemoryYearbookScreenshot, alt: 'SNSU Memory Keeper — Yearbook' },
  ],
  thesis: '',
  description: 'SNSU Memory Keeper is a digital school memory and information platform designed to organize and preserve student and school community records. It provides a centralized space for managing student information, faculty and staff records, courses, graduation tracking, birthdays, memories, and yearbook-related content.',
  stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  features: ['Student management', 'Faculty and staff records', 'Course information', 'Graduation tracking', 'Memory wall', 'Birthday records', 'Yearbook features'],
  details: [
    ['Overview', 'SNSU Memory Keeper is a centralized digital platform created to organize and preserve important school-related information and memories. The system includes a dashboard, student management, faculty and staff records, course information, graduation tracking, memory wall, birthday records, and yearbook features. It is designed to provide an organized and accessible digital space for managing school information and preserving memories of the SNSU community.'],
  ] as [string, string][],
}

export const projects = [codeHubProject, laundryProProject, trendoraProject, snsMemoryKeeperProject]
