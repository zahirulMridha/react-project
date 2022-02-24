import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHaseMore] = useState(true);
  useEffect(() => {
    // here have asyncrounus work so async function decler 
    async function fetchVideo() {
      // get database reference 
      const db = getDatabase();
      //get specific iteam reference (videos)
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        // where from start (items)
        startAt(""+ page),
        // last 8 items to first
        limitToFirst(6)
      );
      try {
        setError(false);
        setLoading(true);
        // get videos  from  database by db,videos reference with order(orderByKey)
        const snapshot = await get(videoQuery);
        // snapshot.exists return boolean value
        if (snapshot.exists()) {
          setVideos((prevState) => {
            // snapshot.val() return obj so that we converted it array
            return [...prevState, ...Object.values(snapshot.val())];
          });
        } else {
          // whene return false it means nothing no more videos
          setHaseMore(false);
        }
      } catch(err) {
        setError(true);
        setLoading(false);
      }
    }
    fetchVideo();
    // every time rerender when page value change
  }, [page]);

  return {
    error,
    loading,
    videos,
    hasMore,
  };
}
