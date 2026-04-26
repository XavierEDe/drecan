export interface PackageItem {
  name: string;
  qty: string;
}

export interface Package {
  id: string;
  name: string;
  tagline: string;
  price: number;
  marketValue: number;
  savings: number;
  bestFor: string;
  items: PackageItem[];
  highlight: boolean;
  color: 'gold' | 'forest';
}

export interface PaymentOption {
  label: string;
  essentialFeast: string;
  deluxeCelebration: string;
}

export interface HowItWorksStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WholesaleItem {
  product: string;
  price: number;
  unit: string;
  minOrder: string;
}

export interface TrustHighlight {
  icon: string;
  title: string;
  description: string;
}
