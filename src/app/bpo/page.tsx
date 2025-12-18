import BPOServices from '@/pages/services-pages/BPOServices';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BPO Services',
  description: 'Business Process Outsourcing solutions that help you scale operations efficiently. Focus on core business while we handle back-office functions.',
};

export default function BPOServicesPage() {
  return <BPOServices />;
}
