import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

const faqs = [
  {
    question: "What makes Almond different from other task management tools?",
    answer: "Almond stands out with its AI-powered features that provide personalized recommendations and automate routine tasks. Our platform learns from your usage patterns to offer increasingly relevant suggestions and optimizations.",
  },
  {
    question: "How secure is my data with Almond?",
    answer: "We take security seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo third-party security audits to ensure your data remains protected.",
  },
  {
    question: "Can I integrate Almond with other tools I'm using?",
    answer: "Yes! Almond offers integrations with popular tools like Slack, Google Workspace, Microsoft 365, and many more. Our API also allows for custom integrations to fit your specific workflow.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 customer support through email, chat, and phone. All plans include access to our comprehensive knowledge base and community forums. Enterprise plans come with a dedicated support manager.",
  },
  {
    question: "How does the AI feature work?",
    answer: "Our AI analyzes your task patterns, priorities, and work habits to provide smart recommendations. It learns from your behavior to suggest optimal task scheduling, priority management, and workflow improvements.",
  },
  {
    question: "Can I try Almond before committing to a plan?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. You can upgrade to a paid plan at any time during or after the trial.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold leading-10 tracking-tight text-gray-900"
          >
            Frequently asked questions
          </motion.h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {openIndex === index ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      )}
                    </span>
                  </button>
                </dt>
                <Dialog
                  as="div"
                  open={openIndex === index}
                  onClose={() => setOpenIndex(null)}
                  className="relative z-10"
                >
                  <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                  <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
                      <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                        {faq.question}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{faq.answer}</p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          onClick={() => setOpenIndex(null)}
                        >
                          Close
                        </button>
                      </div>
                    </Dialog.Panel>
                  </div>
                </Dialog>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 