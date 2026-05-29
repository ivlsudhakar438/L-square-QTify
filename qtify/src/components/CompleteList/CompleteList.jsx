import { Stack } from '@mui/material';
import AlbumCard from "../Card/AlbumCard";

const CompleteList = ({albums = []}) => {
  return (
    <Stack
      direction="row"
      spacing={0}
      useFlexGap
      sx={{ flexWrap: 'wrap', textAlign:'left' }}
    >
      {
        albums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            sx={{textAlign:'left' }}
          />
        ))
      }

    </Stack>
  );
}
export default CompleteList;