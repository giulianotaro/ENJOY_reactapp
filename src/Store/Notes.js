import Note from './Note';
import { addProduct } from './actions';
import { ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
const uuid = require('uuid-v4');




 const RenderList = () => {
    const { shopList } = useSelector((state) => state);
    const dispatch = useDispatch();
  

    const onType = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
          dispatch(
            addProduct({
              product: e.target.value,
              id: uuid(),
            })
          );
          e.target.value = '';
        }
      };
      
      return (
        <div>
          <ListGroup as="ol" numbered>
            {shopList.map((list) => (
              <Note key={list.id} note={list} />
            ))}
          </ListGroup>
    
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Insert a note
            </InputGroup.Text>
            
            <FormControl
              onKeyDown={onType}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </div>
      );
    };
    

    export default RenderList