import {
  pricingPlanOne,
  pricingPlanTwo,
  pricingPlanThree,
} from "./assets/images/content";
const content = {
  nav: [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "about",
    },
    {
      id: 3,
      title: "Services",
      path: "services",
    },
    {
      id: 4,
      title: "Pricing",
      path: "pricing",
    },
    {
      id: 5,
      title: "Brands",
      path: "brands",
    },
    {
      id: 6,
      title: "Contact",
      path: "contact",
    },
  ],
  about: {
    title: "About",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  services: {
    title: "Services",
    description:
      "We offer the best services for our customers. We are here to help you",
    services: [
      {
        id: 1,
        title: "Cleaning services",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      },
      {
        id: 2,
        title: "Price Optimization",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      },
      {
        id: 3,
        title: "Client Communication",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      },
      {
        id: 4,
        title: "Guest Experience",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      },
      {
        id: 5,
        title: "24/7 Support",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      },
      {
        id: 6,
        title: "Re-stocking",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      },
    ],
  },

  pricing: {
    title: "Pricing",
    description: "We offer the best prices for our customers",
    plans: [
      {
        id: 1,
        title: "Basic",
        image: pricingPlanOne,
        description: `dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.`,
      },
      {
        id: 2,
        title: "Premium",
        image: pricingPlanTwo,
        description: `dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.`,
      },

      {
        id: 3,
        title: "Ultimate",
        image: pricingPlanThree,
        description: `dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.`,
      },
    ],
  },

  contact: {
    title: "Contact",
    subtitle: "Did we peak your interest",
    description: `We are truly passionate about making propery rental and management
              as easy as possible if you are too, fill out the form on screen to
              get in contact with us`,
  },

  footer: {
    address: "Level 1, 12 Sample St, Sydney NSW 2000",
    phone: " 1-800-123-4567",
    email: "hello@yourcasaconcierge.com",
    copyRight: `© ${
      new Date().getFullYear() - 1
    } YourCasaConcierge. All rights reserved.`,
  },
};

export default content;
