const courses = [
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    likes: 0,
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Advanced JavaScript Concepts",
    instructor: "Jane Smith",
    description:
      "Dive deep into advanced JavaScript concepts such as closures, prototypes, and async programming.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    likes: 0,
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Closures and Scope",
        content: "Understanding closure and lexical scope in JavaScript.",
      },
      {
        week: 2,
        topic: "Prototypes and Inheritance",
        content: "Exploring JavaScript prototypes and inheritance.",
      },
    ],
    students: [
      {
        id: 201,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 202,
        name: "Daisy Johnson",
        email: "daisy@example.com",
      },
    ],
  },
  {
    id: 102,
    name: "Data Structures and Algorithms",
    instructor: "John Doe",
    description:
      "Comprehensive study of fundamental data structures and algorithms.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    likes: 78,
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Arrays and Linked Lists",
        content: "Introduction to arrays, linked lists, and their operations.",
      },
      {
        week: 2,
        topic: "Stacks and Queues",
        content: "Exploring stack and queue data structures.",
      },
    ],
    students: [],
  },
  {
    id: 103,
    name: 'Introduction to Machine Learning',
    instructor: 'Alice Johnson',
    description: 'Learn the basics of machine learning and start building predictive models.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '10 weeks',
    schedule: 'Mondays and Wednesdays, 5:00 PM - 7:00 PM',
    location: 'Online',
    likes: 32,
    prerequisites: ['Basic programming knowledge', 'Familiarity with linear algebra'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Machine Learning',
        content: 'Overview of machine learning concepts and applications.'
      },
      {
        week: 2,
        topic: 'Linear Regression',
        content: 'Understanding linear regression and its implementation.'
      },
    ],
    students: [
      {
        id: 201,
        name: 'Eve Jackson',
        email: 'eve@example.com',
      },
      {
        id: 202,
        name: 'Charlie Brown',
        email: 'charlie@example.com',
      },
    ],
  },
  {
    id: 104,
    name: 'Web Development Bootcamp',
    instructor: 'Bob Smith',
    description: 'Join our intensive bootcamp and become a proficient web developer in just 12 weeks.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '12 weeks',
    schedule: 'Monday to Friday, 9:00 AM - 5:00 PM',
    location: 'In-person',
    likes: 45,
    prerequisites: ['Basic HTML and CSS knowledge', 'Familiarity with JavaScript'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to HTML and CSS',
        content: 'Learn the fundamentals of HTML and CSS and build your first web page.'
      },
      {
        week: 2,
        topic: 'JavaScript Basics',
        content: 'Understand JavaScript syntax and start writing simple scripts.'
      },
    ],
    students: [
      {
        id: 301,
        name: 'Grace Lee',
        email: 'grace@example.com',
      },
      {
        id: 302,
        name: 'David Brown',
        email: 'david@example.com',
      },
      {
        id: 303,
        name: 'Sophia Rodriguez',
        email: 'sophia@example.com',
      },
    ],
  },
  {
    id: 105,
    name: 'Data Science Fundamentals',
    instructor: 'Alice Johnson',
    description: 'Discover the basics of data science and learn how to analyze and visualize data effectively.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '10 weeks',
    schedule: 'Saturdays, 10:00 AM - 1:00 PM',
    location: 'Online',
    likes: 32,
    prerequisites: ['Basic knowledge of statistics', 'Familiarity with Python'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Data Science',
        content: 'Overview of data science and its applications in various industries.'
      },
      {
        week: 2,
        topic: 'Data Wrangling',
        content: 'Learn how to clean and preprocess raw data for analysis.'
      },
    ],
    students: [
      {
        id: 401,
        name: 'Michael Wang',
        email: 'michael@example.com',
      },
      {
        id: 402,
        name: 'Emily Chen',
        email: 'emily@example.com',
      },
    ],
  },
  {
    id: 107,
    name: 'Python for Beginners',
    instructor: 'Jessica Miller',
    description: 'Start your journey into programming with Python and explore its applications in various fields.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    likes: 27,
    prerequisites: ['No prior programming experience required'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Python',
        content: 'Overview of Python syntax, data types, and basic operations.'
      },
      {
        week: 2,
        topic: 'Control Flow and Functions',
        content: 'Learn about conditional statements, loops, and function definitions in Python.'
      },
    ],
    students: [
      {
        id: 601,
        name: 'Olivia Davis',
        email: 'olivia@example.com',
      },
      {
        id: 602,
        name: 'William Martinez',
        email: 'william@example.com',
      },
    ],
  }
];

export default courses;
