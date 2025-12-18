import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Consulting',
  description: 'Expert HR consulting services across the employment lifecycle. From hiring strategies to performance management and compliance advisory.',
};

export default function HRConsultingPage() {
  return (
    <div>
      <h1>HR Consulting</h1>
      <p>Tap into HR services across the employment lifespan.</p>
    </div>
  );
}
