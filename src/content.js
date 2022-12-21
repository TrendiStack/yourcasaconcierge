import {
  pricingPlanOne,
  pricingPlanTwo,
  pricingPlanThree,
} from './assets/images/content';
const content = {
  nav: [
    {
      id: 1,
      title: 'About',
      path: 'about',
    },
    {
      id: 2,
      title: 'Services',
      path: 'services',
    },
    {
      id: 3,
      title: 'Pricing',
      path: 'pricing',
    },
    {
      id: 4,
      title: 'Partners',
      path: 'partners',
    },
    {
      id: 5,
      title: 'Contact',
      path: 'contact',
    },
  ],
  about: {
    titleOne: 'About Us',
    paragraphOne: `We offer smart solutions and services for the modern vacation homeowner. Our objective is to make our homeowners' lives easier and our guests stay as seamless as possible. By automating all of our communications, tasks and integrating our calendars we transform the guest experience at every step of the process. `,
    paragraphTwo: `Our advanced home systems provide easy check-in and check-out for our guests and give our homeowners increased visibility on their property. Our tech tools allow us to share our listings across various major channels such as Airbnb, Booking.com, and VRBO among others. Meanwhile our smart pricing tools ensure that your prices remain competitive and we never miss an opportunity for higher profits.`,
    paragraphThree: `Our team will guide you through the on-boarding process and guarantee full transparency of our operations. While our professional cleaners, and customer service staff will be there to provide end-to-end support for all guest needs. Through this process we automate and elevate all areas of both the host and guest experience.`,
  },

  services: {
    title: 'Services',
    description:
      'We offer the best services for our customers. We are here to help you',
    services: [
      {
        id: 1,
        title: 'Property Optimization',
        description:
          'Initial full property walk through, includes an expense assessment, and decor consultation upon request.',
      },
      {
        id: 2,
        title: 'Listing set up and advertising',
        description: ' Professional photos,  listing creation and promotion. ',
      },
      {
        id: 3,
        title: 'Daily pricing optimization',
        description:
          'Pricing algorithms capture the most accurate rates for your property to ensure maximum booking value',
      },
      {
        id: 4,
        title: 'Listing Management',
        description:
          'From dynamic pricing to booking inquiries,  guest communications , and payouts.',
      },
      {
        id: 5,
        title: 'Maintenance & Housekeeping',
        description: 'Professional housekeeping, inventory and quality checks.',
      },
      {
        id: 6,
        title: 'Smart home systems',
        description:
          'Noise monitoring systems, as well as smart locks allow for safe and secure access for guests, as well as increased visibility on your property at all times. ',
      },
      {
        id: 7,
        title: '24/7 Guest Support',
        description:
          'Our team is available for any check-in & departure questions and support 24/7 so you have peace of mind at all times',
      },

      {
        id: 8,
        title: 'Reporting and Analytics',
        description:
          'Monthly expense breakdowns, guest logs and revenue reports.',
      },
    ],
  },

  pricing: {
    title: 'Pricing',
    description: 'We offer the best prices for our customers',
    plans: [
      {
        id: 1,
        title: 'Basic',
        image: pricingPlanTwo,
        description: `10% ( includes all services, except for Professional House Keeping)`,
      },

      {
        id: 2,
        title: 'Premium',
        image: pricingPlanThree,
        description: `20% (Includes all services)`,
      },
    ],
  },

  contact: {
    title: 'Contact',
    subtitle:
      'Please leave us with your contact information and someone from our team will reach out to you!',
  },

  footer: {
    address: 'Level 1, 12 Sample St, Sydney NSW 2000',
    phone: ' 1-800-123-4567',
    email: 'hello@yourcasaconcierge.com',
    copyRight: `© ${
      new Date().getFullYear() - 1
    } YourCasaConcierge. All rights reserved.`,
  },
};

export default content;
