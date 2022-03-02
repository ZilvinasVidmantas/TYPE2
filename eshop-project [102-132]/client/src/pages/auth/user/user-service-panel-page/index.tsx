import React, { useEffect } from 'react';
import {
  Alert,
  Box,
} from '@mui/material';
import {
  categoriesSelector,
  categoriesErrorSelector,
  fetchCategories,
  deleteError,
} from 'store/categories';
import { useDispatch, useSelector } from 'store/hooks';

const UserServicePanelPage = () => {
  const categories = useSelector(categoriesSelector);
  const error = useSelector(categoriesErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      {error && (
        <Alert color="error" onClose={() => dispatch(deleteError())}>{error}</Alert>
      )}

      <pre>
        {JSON.stringify(categories, null, 2)}
      </pre>
    </div>
  )
}

export default UserServicePanelPage