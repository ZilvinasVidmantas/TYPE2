import { Box, Paper, Button, Input, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import CircleButton from '../../../buttons/circle-button';

const SearchSectionContainer = styled(Paper)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'flex-end',
  padding: theme.spacing(1, 2, 1, 5),
  borderRadius: theme.spacing(8),
  border: `1px solid ${theme.palette.grey.A350}`,
}));

const SearchSectionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    background: 'none',
    color: theme.palette.primary.main,
  }
}));

const SearchSection = () => {
  return (
    <SearchSectionContainer>
      <SearchSectionButton>Pridėti datas</SearchSectionButton>
      <Divider orientation="vertical" sx={{ height: 5 / 8, mx: 2, mb: 1.5 }} />
      <Box sx={{ pb: 0.5 }}>
        <Input placeholder="Kur Vyksite?" variant="standard" size="small" />
      </Box>
      <CircleButton variant="contained" sx={{ alignSelf: 'center', ml: 2 }}>
        <SearchIcon sx={{ fontSize: 16, fontWeight: 'bold' }} />
      </CircleButton>
    </SearchSectionContainer>
  )
};

export default SearchSection;
