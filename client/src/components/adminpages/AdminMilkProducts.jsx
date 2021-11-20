import { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';



const getItems = async () => {
  try {
    const { data } = await axios.get("/getmilkproducts");
    return data
  } catch (error) {
    console.log(error)
  }
}
const createItem = async (todo) => {
  try {
    const { data } = await axios.post("/addmilkproduct", todo);
    return data
  } catch (error) {
    console.log(error)
  }
}

function AdminGrainsOils() {

  const [item, setItem] = useState({ id: '', itemname: '', price: '', image: '' });
  const [items, setItems] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await createItem(item);

    setItems([...items, result]);
    document.getElementById("frmIDm").reset();
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      console.log('fetch data;m', result)
      setItems(result)
    }
    fetchData()
  }, [])
  const removeItem = async (_id) => {
    let x = window.confirm('Do u want to delete item')
    if (x) {
      await axios.get('/deletemilkproduct/' + _id)
        .then()
        .catch(err => alert('Error: Cannot Delete'))
      const result = await getItems();
      setItems(result)
    }
  }

  return (
    <div className="container">
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalm">
        Add New Item
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModalm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="" id="frmIDm">
                Product ID: <input type="text" className="input-field" onChange={e => setItem({ ...item, id: e.target.value })} /><br />
                Name: <input type="text" className="input-field" onChange={e => setItem({ ...item, itemname: e.target.value })} /><br />
                Price: <input type="text" className="input-field" onChange={e => setItem({ ...item, price: e.target.value })} /><br />
                Choose Image: <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                />
                <input type="button" className="btn-success-outline" onClick={onSubmitHandler} data-bs-dismiss="modal" value="Add" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-center">
        <h5> total Items: ({items.length})</h5>
        <table className="table table-light table-hover m-0">
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td><img src={item.image} alt='Item' style={{ height: '6rem' }} /></td>
                  <td>{item.itemname}</td>
                  <td>{item.price}</td>
                  <td><button className="btn btn-danger ms-2" onClick={() => removeItem(item._id)}
                  >Remove Item</button></td>
                  {/* <td><Link to='/admineditdata'><button className="btn btn-success ms-2">Edit</button></Link> */}

                  {/* </td> */}
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default AdminGrainsOils;
