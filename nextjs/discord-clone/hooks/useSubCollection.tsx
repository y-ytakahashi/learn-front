import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, Timestamp } from "@firebase/firestore";
import { db } from "@/firebase";
import { useAppSelector } from "@/app/hooks";

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}


const useSubCollection = (collectionName: string, subCollectionName: string) => {
  const channelId = useAppSelector((state) => state.channel.channelId);
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);


  useEffect(() => {
    // collection is document container
    const collectionRef = collection(db, collectionName, String(channelId), subCollectionName);
    const collectionRefOrderBy = query(collectionRef, orderBy("timestamp", "asc"));

    // get realtime data for firebase
    onSnapshot(collectionRefOrderBy, (snapshot) => {
      const results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user
        });
      });
      setSubDocuments(results);
      console.log(results);
    });
  }, [channelId, collectionName, subCollectionName]);
  return { subDocuments };
};

export default useSubCollection;
