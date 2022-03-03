import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Alert,
} from '@mui/material';
import { Category } from 'types';
import CategoryPanelPageForm, { CategoryPanelPageFormProps } from './category-panel-page-form';
import CategoryPanelPageTable, { CategoryPanelPageTableProps } from './category-panel-page-table';
import CategoryService from './services/category-service';

const CategoryPanelPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [titleField, setTitleField] = useState<string>('');
  const [editedCategoryId, setEditedCategoryId] = useState<null | string>(null);

  const handleSubmit: CategoryPanelPageFormProps['onSubmit'] = (event) => {
    event.preventDefault();
    if (editedCategoryId !== null) updateCategory();
    else createCategory();
  }

  const createCategory = async () => {
    const createdCategory = await CategoryService.createCategory({ title: titleField });
    if (typeof createdCategory === 'string') {
      setError(createdCategory);
      return;
    } else if (error) {
      setError(null);
    }

    setCategories([createdCategory, ...categories]);
    setTitleField('');
  }

  const editCategory: CategoryPanelPageTableProps['onEdit'] = (id: string) => {
    const isNewEditedCategory = id !== editedCategoryId;
    setEditedCategoryId(isNewEditedCategory ? id : null);
    if (isNewEditedCategory) {
      const editedCategory = categories.find(x => x.id === id) as Category;
      setTitleField(editedCategory.title);
    } else {
      setTitleField('');
    }
    if (error) setError(null);
  }

  const updateCategory = async () => {
    if (editedCategoryId !== null) {
      const updatedCategory = await CategoryService.updateCategory(editedCategoryId, { title: titleField });
      if (typeof updatedCategory === 'string') {
        setError(updatedCategory);
        return;
      } else if (error) {
        setError(null);
      }

      setCategories(categories.map(x => x.id === editedCategoryId ? updatedCategory : x));
      setTitleField('');
      setEditedCategoryId(null);
    }
  }

  const deleteCategory = async (id: string) => {
    const deletedCategory = await CategoryService.deleteCategory(id);

    if (typeof deletedCategory === 'string') {
      setError(deletedCategory);
      return;
    } else if (error) {
      setError(null)
    }

    setCategories(categories.filter(x => x.id !== id));
    setEditedCategoryId(null);
    setTitleField('');
  }

  useEffect(() => {
    (async () => {
      const fetchedCategories = await CategoryService.getCategories();
      if (typeof fetchedCategories === 'string') {
        console.error(fetchedCategories);
        return;
      }

      setCategories(fetchedCategories);
    })();
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography component="h1" variant="h2">Kategorijų panelė</Typography>
      <Box sx={{ width: 600, mt: 4, mb: 2 }}>
        <CategoryPanelPageForm
          onSubmit={handleSubmit}
          title={titleField}
          setTitle={setTitleField}
          editMode={Boolean(editedCategoryId)}
        />
      </Box>
      {
        error && (
          <Alert
            onClose={() => setError(null)}
            color="error"
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>
        )
      }
      <CategoryPanelPageTable
        data={categories.map(x => ({ ...x, edited: editedCategoryId === x.id }))}
        onDelete={deleteCategory}
        onEdit={editCategory}
      />
    </Container>
  );
}

export default CategoryPanelPage;
