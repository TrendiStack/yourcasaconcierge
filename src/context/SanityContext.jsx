import { useEffect, createContext, useState } from 'react';
import { client } from '../lib/client';

export const SanityContext = createContext({
  hero: [],
  navigation: [],
  about: [],
  services: [],
  pricing: [],
  partners: [],
  contact: [],
  footer: [],
});

export const SanityProvider = ({ children }) => {
  const [hero, setHero] = useState([]);
  const [navigation, setNavigation] = useState([]);
  const [about, setAbout] = useState([]);
  const [services, setServices] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [partners, setPartners] = useState([]);
  const [contact, setContact] = useState([]);
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const heroQuery = `*[_type == "hero"]`;
    client.fetch(heroQuery).then(res => setHero(res));

    const navQuery = `*[_type == "navigation"]`;
    client.fetch(navQuery).then(res => setNavigation(res));

    const aboutQuery = `*[_type == "about"]`;
    client.fetch(aboutQuery).then(res => setAbout(res));

    const query = `*[_type == "services"]`;
    client.fetch(query).then(res => setServices(res));

    const pricingQuery = `*[_type == "pricing"]`;
    client.fetch(pricingQuery).then(res => setPricing(res));

    const partnersQuery = `*[_type == "partners"]`;
    client.fetch(partnersQuery).then(res => setPartners(res));

    const contactQuery = `*[_type == "contact"]`;
    client.fetch(contactQuery).then(res => setContact(res));

    const footerQuery = `*[_type == "footer"]`;
    client.fetch(footerQuery).then(res => setFooter(res));
  }, []);

  const value = {
    hero,
    navigation,
    about,
    services,
    pricing,
    partners,
    contact,
    footer,
  };

  return (
    <SanityContext.Provider value={value}>{children}</SanityContext.Provider>
  );
};
