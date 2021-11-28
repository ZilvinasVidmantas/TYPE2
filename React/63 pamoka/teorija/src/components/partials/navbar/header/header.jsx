import { Grid} from '@mui/material';
import LogoSection from './logo-section';
import SearchSection from './search-section';
import UserSection from './user-section';

const Header = () => {
  return (
    <Grid container sx={{ height: '100%', alignItems: 'center', px: 3 }}>
      <Grid item xs={4} sx={{ alignSelf: 'stretch' }}>
        <LogoSection />
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center'}}>
        <SearchSection />
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <UserSection />
      </Grid>
    </Grid>
  )
};

export default Header;
