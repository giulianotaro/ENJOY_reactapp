import { ListGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeProduct} from './actions';

 const DispatchProduct = ({ note }) => {

    const dispatch = useDispatch();
  
    const remove = () => dispatch(removeProduct(note.id));
  
    
    
    return (
      <div>
        <ListGroup className="d-flex justify-content-between align-content-center flex-row">
          <ListGroup.Item
            
            className="d-flex p-2 flex-grow-1 align-items-center justify-content-center "
            as="li"
          >
            {note.product}
          </ListGroup.Item>
  
          <ListGroup className="d-flex p-2">

            <Button className="mb-2" variant="warning"  onClick={remove} >
              Remove
            </Button>
  
          
          </ListGroup>
        </ListGroup>
      </div>
    );
  };

  export default DispatchProduct