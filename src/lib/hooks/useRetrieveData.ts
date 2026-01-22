'use client';

import { useQuery } from '@tanstack/react-query';
// Commented out Firestore imports - using REST API instead
// import type { Firestore } from 'firebase/firestore';
// import { getDoc, doc, getFirestore } from 'firebase/firestore';
// import type { FirebaseApp } from 'firebase/app';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '@/lib/config/firebaseConfig';
// import type { FirebaseStorage } from 'firebase/storage';
// import { getStorage } from 'firebase/storage';

// let firebaseApp: FirebaseApp;
// let firestoreDb: Firestore;
// let firebaseStorage: FirebaseStorage;

// if (!firebaseApp) {
//   firebaseApp = initializeApp(firebaseConfig);
//   firestoreDb = getFirestore(firebaseApp);
//   firebaseStorage = getStorage(firebaseApp);
// }

// export const db = firestoreDb;
// export const storage = firebaseStorage;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const fetchApiData = async (endpoint: string) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
  }

  return response.json();
};

// Commented out Firestore version
// export const fetchFirestoreDocument = async (collectionPath: string, documentId: string) => {
//   const docRef = doc(db, collectionPath, documentId);
//   const docSnap = await getDoc(docRef);

//   if (!docSnap.exists()) {
//     throw new Error(`Document "${documentId}" not found in "${collectionPath}"`);
//   }

//   return docSnap.data();
// };

export function useApiQuery(endpoint: string, queryKey: string, initialData?: any) {
  const hasInitialData =
    initialData && (Array.isArray(initialData) ? initialData.length > 0 : true);

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchApiData(endpoint),
    initialData,
    staleTime: hasInitialData ? Infinity : 0, // staleTime: 0 triggers automatic refetch
    gcTime: 30 * 60 * 1000,
    retry: 2,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
  });
}

// Commented out Firestore version
// export function useFirestoreQuery(collectionPath: string, documentId: string, queryKey: string) {
//   return useQuery({
//     queryKey: [queryKey],
//     queryFn: () => fetchFirestoreDocument(collectionPath, documentId),
//     staleTime: Infinity,
//     gcTime: 30 * 60 * 1000,
//     retry: 2,
//     retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//   });
// }
