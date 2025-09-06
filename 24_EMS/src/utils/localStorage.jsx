

const employees = [
  {
    id: 1,
    firstName: "Rohan",
    email: "e@e.com",
    password: "123",
    taskSummary: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage UI",
        taskDescription:
          "Create mockups for the new homepage, focusing on a modern and user-friendly design.",
        taskDate: "2025-09-12",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project Repository",
        taskDescription:
          "Initialize a new Git repository on GitHub and set up the main and develop branches.",
        taskDate: "2025-09-08",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration for User Profile",
        taskDescription:
          "Connect the frontend application with the backend API to fetch and display user profile data.",
        taskDate: "2025-09-15",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Weekly Report",
        taskDescription:
          "Prepare the weekly progress report summarizing completed tasks, current progress, and any blockers.",
        taskDate: "2025-09-12",
        category: "Reporting",
      },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskSummary: {
      active: 5,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription:
          "Users are unable to login when their password contains special characters. This needs to be resolved urgently.",
        taskDate: "2025-09-09",
        category: "Bug Fixing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests for Payment Module",
        taskDescription:
          "Ensure 90% code coverage for the payment module to prevent future regressions.",
        taskDate: "2025-09-18",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Schema Review",
        taskDescription:
          "Review and provide feedback on the proposed database schema changes for the new feature.",
        taskDate: "2025-09-10",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Code Refactoring",
        taskDescription:
          "Refactor the legacy user service to improve performance and maintainability. Attempt failed due to breaking changes.",
        taskDate: "2025-09-22",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Dependencies",
        taskDescription:
          "Update all project dependencies (npm packages) to their latest stable versions.",
        taskDate: "2025-09-11",
        category: "Maintenance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Deploy to Staging",
        taskDescription:
          "Deploy the latest build from the develop branch to the staging environment for QA testing.",
        taskDate: "2025-09-15",
        category: "Deployment",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting Prep",
        taskDescription:
          "Prepare a presentation and demo for the upcoming weekly client meeting.",
        taskDate: "2025-09-14",
        category: "Meetings",
      },
    ],
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Documentation for API",
        taskDescription:
          "Write comprehensive documentation for all public API endpoints using Swagger/OpenAPI.",
        taskDate: "2025-09-25",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Testing",
        taskDescription:
          "Run load tests using JMeter to identify performance bottlenecks in the application.",
        taskDate: "2025-09-19",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Research new charting library",
        taskDescription:
          "Evaluate D3.js, Chart.js, and Highcharts for the new analytics dashboard.",
        taskDate: "2025-09-16",
        category: "Research",
      },
    ],
  },
  {
    id: 4,
    firstName: "Sunita",
    email: "employee4@example.com",
    password: "123",
    taskSummary: {
      active: 7,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Onboarding Documentation",
        taskDescription:
          "Create a getting-started guide for new developers joining the team.",
        taskDate: "2025-09-13",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Peer Code Review",
        taskDescription:
          "Review pull request #435 for the search functionality improvements.",
        taskDate: "2025-09-08",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create marketing assets",
        taskDescription:
          "Design social media banners and email templates for the new campaign.",
        taskDate: "2025-09-11",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Set up CI/CD pipeline",
        taskDescription:
          "Configure a new CI/CD pipeline using Jenkins for automated builds and deployments.",
        taskDate: "2025-09-20",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Analyze user feedback",
        taskDescription:
          "Go through user feedback from the last month and create a summary report of common issues and suggestions.",
        taskDate: "2025-09-10",
        category: "Product",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Triage",
        taskDescription:
          "Categorize and prioritize newly reported bugs in Jira for the next sprint.",
        taskDate: "2025-09-09",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription:
          "Perform a security audit of the authentication module to identify potential vulnerabilities.",
        taskDate: "2025-09-28",
        category: "Security",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Feature planning meeting",
        taskDescription:
          "Attend the meeting for Q4 feature planning and roadmap discussion.",
        taskDate: "2025-09-17",
        category: "Meetings",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update user guide",
        taskDescription:
          "Update the online user guide to include documentation for the new features released this quarter.",
        taskDate: "2025-09-23",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Investigate server crash",
        taskDescription:
          "Analyze server logs to find the root cause of the production server crash that occurred last night.",
        taskDate: "2025-09-07",
        category: "Maintenance",
      },
    ],
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskSummary: {
      active: 4,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Password Reset",
        taskDescription:
          "Develop the complete password reset flow, including email notifications and the reset form.",
        taskDate: "2025-09-18",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Error Pages",
        taskDescription:
          "Create user-friendly and helpful designs for the 404 (Not Found) and 500 (Server Error) pages.",
        taskDate: "2025-09-14",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Customer Support Training",
        taskDescription:
          "Attend the training session for the new Zendesk support tool.",
        taskDate: "2025-09-11",
        category: "Training",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "A/B Test for CTA button",
        taskDescription:
          "Set up an A/B test for the call-to-action button on the landing page to improve conversion rates.",
        taskDate: "2025-09-21",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Translate content to Spanish",
        taskDescription:
          "Translate the main website content into Spanish to support the launch in Spain.",
        taskDate: "2025-09-26",
        category: "Localization",
      },
    ],
  },
];

const admin = [
  {
    id: "admin01",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
