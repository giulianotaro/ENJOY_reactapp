export const addProduct = (note) => ({
    type: 'add',
    payload: note,
  });
  
  export const removeProduct = (id) => ({
    type: 'remove',
    payload: id,
  });
  
  