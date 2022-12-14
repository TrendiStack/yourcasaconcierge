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
      title: 'Brands',
      path: 'brands',
    },
    {
      id: 5,
      title: 'Contact',
      path: 'contact',
    },
  ],
  about: {
    title: 'About',
    description: `Our company is a full-service property management company that specializes in vacation rentals in the Greater Toronto Area. We have a team of expert property managers who are dedicated to providing exceptional service to both property owners and guests. Our services include managing guest bookings, cleaning and maintaining properties, and providing 24/7 support to ensure that both property owners and guests have a positive experience. We are committed to helping property owners maximize their rental income and take the hassle out of managing a vacation rental property. Whether you're a property owner looking for help managing your vacation rental, or a guest looking for a comfortable and convenient place to stay in Toronto, our team is here to help.`,
  },

  services: {
    title: 'Services',
    description:
      'We offer the best services for our customers. We are here to help you',
    services: [
      {
        id: 1,
        title: 'Cleaning services',
        description:
          'At our business, we provide top-notch cleaning services to keep your home or office sparkling clean.',
      },
      {
        id: 2,
        title: 'Price Optimization',
        description:
          'Our business offers expert price optimization to help you maximize your profits and stay competitive in the marketplace.',
      },
      {
        id: 3,
        title: 'Client Communication',
        description:
          'Maintain strong, productive relationships with your clients and customers with our exceptional client communication services.',
      },
      {
        id: 4,
        title: 'Guest Experience',
        description:
          'We specialize in creating unforgettable guest experiences to ensure that your guests have a memorable and enjoyable stay.',
      },
      {
        id: 5,
        title: '24/7 Support',
        description:
          'Need help with a problem at any time of day or night? Our 24/7 support services are here for you.',
      },
      {
        id: 6,
        title: 'Re-stocking',
        description:
          'Ensure that your shelves are always stocked and your customers are always happy with our expert re-stocking services.',
      },
    ],
  },

  pricing: {
    title: 'Pricing',
    description: 'We offer the best prices for our customers',
    plans: [
      {
        id: 1,
        title: 'Essentials',
        image: pricingPlanOne,
        description: `This plan would include the basic services required for managing a property, such as bookings management, cleaning, and 24/7 support for guests`,
      },
      {
        id: 2,
        title: 'Deluxe',
        image: pricingPlanTwo,
        description: `This plan would include a more comprehensive range of services, such as marketing and advertising support, property inspections and maintenance, and personalized consultations with property managers`,
      },

      {
        id: 3,
        title: 'Premium',
        image: pricingPlanThree,
        description: `This plan would offer the most comprehensive support and assistance, including additional marketing and advertising support, as well as personalized consultations with property managers to help maximize rental income`,
      },
    ],
  },

  contact: {
    title: 'Contact',
    subtitle: 'Did we peak your interest',
    description: `We are truly passionate about making propery rental and management
              as easy as possible if you are too, fill out the form on screen to
              get in contact with us`,
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
