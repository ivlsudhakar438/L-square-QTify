

import React, {useState, useEffect} from 'react';
import styles from "./SongsList.module.css";
import axios from "axios";
import SwiperList from '../SwiperList/SwiperList';
import { Stack,Typography, Tabs, Tab } from '@mui/material';


const SongsList = () => {
  // const [tabValue, setTabValue] = useState('all');
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState('all');
  const [songsList, setSongsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const handleChange = (event, newValue) => {
    setGenre(newValue);
  }

  const fetchGenres = async () => {
     try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/genres"
      );
      setGenres(response.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllSongs = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/songs"
      );
      setSongsList(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    fetchGenres();
  },[]);

  useEffect(()=> {
    fetchAllSongs();
  },[]);

  useEffect(()=> {
    const filterSongsByGenre = () => {
      let filtered = songsList;
      if(genre !== 'all') {
        filtered = songsList.filter((obj) => obj.genre.key === genre);
      }
      // console.log(`${genre}: ${filtered.length}`, filtered);
      setFilteredList(filtered);
    }
    filterSongsByGenre();
  },[songsList, genre]);

  return (
    <div className={styles.songsList}>
      <Stack direction="row" sx={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}>
        <Typography
          variant="h4"
          sx={{
            color: "#ffffff",
            fontWeight: 600,
            margin: '0 0 10px 0',
            fontSize:"20px"
          }}
        >Songs</Typography>
      </Stack>

      <div>
        <Tabs 
          value={genre} 
          onChange={handleChange} 
          className={styles.genreTabs}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#34C94B",
              height: "4px",
              borderRadius: "2px",
            },
          }}
          variant="scrollable" 
          scrollButtons="auto" 
          aria-label="scrollable auto tabs example"
        >
          <Tab value={'all'} label="All" className={styles.genreTab} />
          {
            genres.length ? genres.map((item, index) => (
              <Tab
                key={index}
                value={item.key}
                label={item.label}
                className={styles.genreTab}
              />
            )) : ""
          }
        </Tabs>

        <div>
          <SwiperList albums={filteredList.length?filteredList:[]} />
        </div>   
      </div>
    </div>
  );
}
export default SongsList