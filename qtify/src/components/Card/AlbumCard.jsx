
import React from "react"; 
import styles from "./AlbumCard.module.css";
import { Box, Chip  } from '@mui/material';


const AlbumCard = ({album = null}) =>  {
  return album ? (
  <div>
    <Box 
      sx={{
        height: '300px',
        minWidth: '238px',
        margin: '10px 10px 8px 10px',
        borderRadius: 3,
        bgcolor: '#ffffff',
        textAlign: 'center'
      }}
    >
      <img src={album.image} alt={album.title} style={{
        width: "100%",
        height: "85%",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }} />
      <div>
        <Box sx={{ 
          width: '100%',
          height: '32px',
          margin: 0,
          bgcolor: '#ffffff',
          display:'flex',
          direction:'column',
          justifyContent: 'flex-start',
          alignItems: 'center'

        }}> 
        
        <Chip label={album.follows?`${album.follows} follows`:`${album.likes} likes` } 
          sx={{
            color:'#ffffff',
            backgroundColor: '#121212',
            fontSize: '12px',
            margin: '0 8px'
          }} 
        />
        </Box>
      </div>
    </Box>
    <div className={styles.albumName}>{album.title}</div>
  </div>) : "";
    
};
export default AlbumCard;