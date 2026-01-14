import PoolOfCandidatesPerson from '@/pages/pool-of-candidates-pages/PoolOfCandidatesPerson';

// type Props = {
//   params: { id: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { id } = params;
//   const candidateName = id
//     .split('-')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');

//   return {
//     title: `Candidate Profile`,
//     description: `View the professional profile of ${candidateName}. Experience, skills, and background of top talent available through Herensys global recruitment services.`,
//   };
// }

// export async function generateStaticParams() {
//   return candidatesData.map(candidate => ({
//     id: candidate.name.toLowerCase().replace(/\s+/g, '-'),
//   }));
// }

export const revalidate = 3600;

function PoolOfCandidatesPersonPage({ params }: { params: Promise<{ id: string }> }) {
  return <PoolOfCandidatesPerson params={params} />;
}

export default PoolOfCandidatesPersonPage;
