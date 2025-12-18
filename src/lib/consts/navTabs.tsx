import { renderToStaticMarkup } from 'react-dom/server';
import { CountrySelect } from '@/components/navbar/CountrySelect';
import { DropdownSelect } from '@/components/navbar/DropdownSelect';
import EasternEurope from '@/components/svg-icons/countries/EasternEurope';
import { NorthAfrica } from '@/components/svg-icons/countries/NorthAfrica';
import Balkans from '@/components/svg-icons/countries/Balkans';

export const navTabs = [
  {
    type: 'dropdown',
    label: 'Services',
    defaultValue: { value: 'services', label: 'Services' },
    options: [
      {
        value: '/global-recruiting',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="Global Recruiting"
            description="Attract and hire the best local talent"
          />,
        ),
      },
      {
        value: '/eor',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="EOR"
            description="We recruit, manage and pay employees on your behalf."
          />,
        ),
      },
      {
        value: '/bpo',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="BPO"
            description="Outsource your business processes for greater efficiency and cost savings."
          />,
        ),
      },
      {
        value: '/hr-consulting',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="HR Consulting"
            description="Tap into HR services across the employment lifespan."
          />,
        ),
      },
      {
        value: '/global-payroll',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="Global Payroll"
            description="We set up and process your payroll in full compliance with local regulations."
          />,
        ),
      },
      {
        value: '/visas-work-permits',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="Visas and Work Permits"
            description="Simplify global mobility with fast, compliant visa and work permit support."
          />,
        ),
      },
    ],
  },
  {
    type: 'dropdown',
    label: 'Countries',
    defaultValue: { value: 'countries', label: 'Countries' },
    options: [
      {
        value: '/north-africa',
        label: renderToStaticMarkup(
          <CountrySelect ComponentSVG={NorthAfrica} label="North Africa" />,
        ),
      },
      {
        value: '/eastern-europe',
        label: renderToStaticMarkup(
          <CountrySelect ComponentSVG={EasternEurope} label="Eastern Europe" />,
        ),
      },
      {
        value: '/franta-belgia',
        label: renderToStaticMarkup(<CountrySelect ComponentSVG={Balkans} label="Franța/Belgia" />),
      },
    ],
    isCountry: true,
  },
  {
    type: 'dropdown',
    label: 'Talent Network',
    defaultValue: { value: 'talent-network', label: 'Talent Network' },
    options: [
      {
        value: '/pool-of-candidates',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="Pool of candidates"
            description="Access a diverse, pre-vetted network of qualified professionals worldwide"
          />,
        ),
      },
      {
        value: '/job-board',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="Job board"
            description="Showcase your openings and connect with top talent across multiple markets"
          />,
        ),
      },
    ],
  },
  { type: 'link', label: 'About us', href: '/about-us' },
  { type: 'link', label: 'Blog', href: '/blog' },
];

export const mobileNavTabs = [
  {
    type: 'dropdown',
    label: 'Services',
    defaultValue: { value: 'services', label: 'Services' },
    options: [
      {
        value: '/global-recruiting',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="Global Recruiting"
            description="Attract and hire the best local talent"
          />,
        ),
      },
      {
        value: '/eor',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="EOR"
            description="We recruit, manage and pay employees on your behalf."
          />,
        ),
      },
      {
        value: '/bpo',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="BPO"
            description="Outsource your business processes for greater efficiency and cost savings."
          />,
        ),
      },
      {
        value: '/hr-consulting',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="HR Consulting"
            description="Tap into HR services across the employment lifespan."
          />,
        ),
      },
      {
        value: '/global-payroll',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="Global Payroll"
            description="We set up and process your payroll in full compliance with local regulations."
          />,
        ),
      },
      {
        value: '/visas-work-permits',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="Visas and Work Permits"
            description="Simplify global mobility with fast, compliant visa and work permit support."
          />,
        ),
      },
    ],
  },
  {
    type: 'dropdown',
    label: 'Countries',
    defaultValue: { value: 'countries', label: 'Countries' },
    options: [
      {
        value: '/north-africa',
        label: renderToStaticMarkup(<DropdownSelect title="North Africa" />),
      },
      {
        value: '/eastern-europe',
        label: renderToStaticMarkup(<DropdownSelect title="Eastern Europe" />),
      },
      {
        value: '/balkans',
        label: renderToStaticMarkup(<DropdownSelect title="Balkans" />),
      },
    ],
    isCountry: true,
  },
  {
    type: 'dropdown',
    label: 'Talent Network',
    defaultValue: { value: 'talent-network', label: 'Talent Network' },
    options: [
      {
        value: '/pool-of-candidates',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="Pool of candidates"
            description="Access a diverse, pre-vetted network of qualified professionals worldwide"
          />,
        ),
      },
      {
        value: '/job-board',
        label: renderToStaticMarkup(
          <DropdownSelect
            title="Job board"
            description="Showcase your openings and connect with top talent across multiple markets"
          />,
        ),
      },
    ],
  },
  { type: 'link', label: 'About us', href: '/about-us' },
  { type: 'link', label: 'Blog', href: '/blog' },
];
