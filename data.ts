import { Feature, PricingPlan, Testimonial } from './types';

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Fast Performance',
    description: 'Optimized for speed with edge caching and global CDN distribution.',
    icon: 'Zap'
  },
  {
    id: '2',
    title: 'Secure Architecture',
    description: 'Enterprise-grade security with SOC2 compliance and end-to-end encryption.',
    icon: 'ShieldCheck'
  },
  {
    id: '3',
    title: 'Cloud Scalability',
    description: 'Auto-scaling infrastructure that grows with your user base instantly.',
    icon: 'Cloud'
  },
  {
    id: '4',
    title: 'AI-Powered Insights',
    description: 'Gain actionable intelligence from your data with our advanced AI models.',
    icon: 'Brain'
  },
  {
    id: '5',
    title: 'Real-time Analytics',
    description: 'Monitor your application performance and user behavior in real-time.',
    icon: 'Activity'
  },
  {
    id: '6',
    title: 'Developer API',
    description: 'Comprehensive REST and GraphQL APIs for seamless third-party integration.',
    icon: 'Code'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceMonthly: 0,
    priceYearly: 0,
    features: ['Up to 5 team members', 'Basic Analytics', 'Community Support', '1GB Storage'],
    buttonText: 'Start for Free'
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: 29,
    priceYearly: 290,
    features: ['Up to 20 team members', 'Advanced AI Insights', 'Priority Email Support', '10GB Storage', 'Custom Domain'],
    isPopular: true,
    buttonText: 'Get Started'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceMonthly: 99,
    priceYearly: 990,
    features: ['Unlimited team members', 'Dedicated Success Manager', '24/7 Phone Support', 'Unlimited Storage', 'SSO & Audit Logs'],
    buttonText: 'Contact Sales'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'TechFlow',
    avatar: 'https://picsum.photos/100/100?random=1',
    feedback: "Nexus revolutionized how we deploy our applications. The speed and reliability are unmatched in the industry."
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Founder',
    company: 'StartUp Inc',
    avatar: 'https://picsum.photos/100/100?random=2',
    feedback: "We scaled from 100 to 100,000 users in a month without a single hiccup. The auto-scaling is like magic."
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Product Manager',
    company: 'Creative Solutions',
    avatar: 'https://picsum.photos/100/100?random=3',
    feedback: "The AI insights feature helped us identify user drop-off points we never knew existed. Highly recommended."
  }
];