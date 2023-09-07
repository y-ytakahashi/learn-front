import { useEffect, useState } from "react";
import { collection, DocumentData, onSnapshot, query } from "@firebase/firestore";
import { db } from "@/firebase";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResult: Channels[] = [];
      querySnapshot.forEach((doc) => channelsResult.push({
        id: doc.id,
        channel: doc.data()
      }));
      setDocuments(channelsResult);
    });
  }, []);
  return { documents };
};

export default useCollection;
