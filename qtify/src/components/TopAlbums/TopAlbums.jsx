import React, {useState, useEffect} from 'react';
import styles from "./TopAlbums.module.css";
import axios from "axios";

import SwiperList from '../SwiperList/SwiperList';
import CompleteList from '../CompleteList/CompleteList';
import { Stack, Button, Typography } from '@mui/material';


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
        margin: '0 0 10px 0'
      }}>
        <Typography
          variant="h4"
          sx={{
            color: "#ffffff",
            fontWeight: 600,
            fontSize:"20px"
          }}
        >TopAlbums</Typography>
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
export default TopAlbums;