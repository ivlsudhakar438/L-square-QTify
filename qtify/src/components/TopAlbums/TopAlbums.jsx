import React, {useState, useEffect} from 'react';
import styles from "./TopAlbums.module.css";
import axios from "axios";

import SwiperList from '../SwiperList/SwiperList';
import CompleteList from '../CompleteList/CompleteList';
import { Stack, Button } from '@mui/material';


const  TopAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

 useEffect(() => {
    fetchTopAlbums();
  }, []);

  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
      );
      setAlbums(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.topAlbums}>
      <Stack direction="row" sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <h3>Top Albums</h3>
        <div>
          {
            showAll
              ? (<Button sx={{ color: '#34c94b'}} onClick={() => setShowAll(false)}>Collapse</Button>)
              : (<Button sx={{ color: '#34c94b'}} onClick={() => setShowAll(true)}>Show All</Button>)
          }
        </div>
      </Stack>

      {!showAll ? 
        (<SwiperList albums={albums.length?albums:[]} />) :
        (<CompleteList albums={albums.length?albums:[]} />
        // <Stack
        //   direction="row"
        //   useFlexGap
        //   sx={{ flexWrap: 'wrap', padding:'20px', textAlign:'left' }}
        // >
        //   {
        //     albums.map((album) => (
        //       <AlbumCard
        //         key={album.id}
        //         album={album}
        //         sx={{textAlign:'left' }}
        //       />
        //     ))
        //   }

        // </Stack>

        ) 
      }
    </div>
  );
}
export default TopAlbums;