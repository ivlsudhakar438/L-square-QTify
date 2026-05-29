import React, {useState, useEffect} from 'react';
import styles from "./NewAlbums.module.css";
import axios from "axios";

import SwiperList from '../SwiperList/SwiperList';
import CompleteList from '../CompleteList/CompleteList';
import { Stack, Button, Typography } from '@mui/material';


const  NewAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

 useEffect(() => {
    fetchNewAlbums();
  }, []);

  const fetchNewAlbums = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/new"
      );
      setAlbums(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.newAlbums}>
      <Stack direction="row" sx={{
        justifyContent: "space-between",
        alignItems: "center",
        margin: '0 0 10px 0'
      }}>
        <Typography
          variant="h4"
          sx={{
            color: "#ffffff",
            fontWeight: 600,
            fontSize:"20px"
          }}
        >New Albums</Typography>
        <div>
          {
            (<Button sx={{color: '#34c94b',fontSize:'18px', fontWeight:'600'}} onClick={() => setShowAll(!showAll)}>{showAll ? 'Collapse' : 'Show All'}</Button>)
          }
        </div>
      </Stack>

      {!showAll ? 
        (<SwiperList albums={albums.length?albums:[]} />) :
        (<CompleteList albums={albums.length?albums:[]} />) 
      }
    </div>
  );
}
export default NewAlbums;