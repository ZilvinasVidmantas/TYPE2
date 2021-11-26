import { Grid} from '@mui/material';
import LogoSection from './logo-section';
import SearchSection from './search-section';

const Header = () => {
  return (
    <Grid container sx={{ height: '100%', alignItems: 'center' }}>
      <Grid item xs={4} sx={{ alignSelf: 'stretch' }}>
        <LogoSection />
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center'}}>
        <SearchSection />
      </Grid>
      <Grid item xs={4}>Auth</Grid>
    </Grid>
  )
};

export default Header;
