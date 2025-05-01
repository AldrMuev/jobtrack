import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    description: 'Perfect for job seekers just starting their journey',
    features: [
      'Track up to 10 job applications',
      'Basic resume builder',
      'Interview scheduling',
      'Email support',
      'Basic analytics',
    ],
    price: { monthly: '$9', annual: '$90' },
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    description: 'For serious job seekers who want to maximize their chances',
    features: [
      'Unlimited job applications',
      'Advanced resume builder with AI suggestions',
      'Interview preparation tools',
      'Priority support',
      'Advanced analytics',
      'Custom cover letter generator',
      'LinkedIn profile optimization',
    ],
    price: { monthly: '$29', annual: '$290' },
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    description: 'For career coaches and organizations',
    features: [
      'Everything in Professional',
      'Team collaboration tools',
      'Custom branding',
      'API access',
      'Dedicated account manager',
      'Bulk application tracking',
      'Advanced reporting',
    ],
    price: { monthly: '$99', annual: '$990' },
    cta: 'Contact sales',
    featured: false,
  },
];

export default function Pricing() {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="bg-white py-24 sm:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Choose the right plan for&nbsp;you
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
        >
          Invest in your career with our flexible pricing plans. All plans include a 14-day free trial.
        </motion.p>
        <div className="mt-16 flex justify-center">
          <div className="relative rounded-full p-1 bg-gray-100">
            <button
              type="button"
              className={`relative rounded-full px-4 py-2 text-sm font-semibold ${
                billingInterval === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingInterval('monthly')}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`relative rounded-full px-4 py-2 text-sm font-semibold ${
                billingInterval === 'annual'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingInterval('annual')}
            >
              Annual billing
            </button>
          </div>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                tier.featured ? 'bg-primary/5 ring-primary' : ''
              }`}
            >
              <h3
                id={tier.id}
                className={`text-lg font-semibold leading-8 ${
                  tier.featured ? 'text-primary' : 'text-gray-900'
                }`}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price[billingInterval]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /{billingInterval === 'monthly' ? 'month' : 'year'}
                </span>
              </p>
              <a
                href="#"
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-primary text-white shadow-sm hover:bg-secondary focus-visible:outline-primary'
                    : 'text-primary ring-1 ring-inset ring-primary hover:ring-primary/20'
                }`}
              >
                {tier.cta}
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 