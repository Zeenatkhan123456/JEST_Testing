const find = (data,id) =>{
let item = data.find((el) => el.id ===id);
return item;
};
export default find;

   