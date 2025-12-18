import EmployerOfRecord from '@/pages/services-pages/EmployerOfRecord';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employer of Record (EOR)',
  description: 'Hire globally without setting up local entities. Our EOR services handle payroll, compliance, benefits, and HR administration in over 180 countries.',
};

export default function EmployerOfRecordPage() {
  return <EmployerOfRecord />;
}
