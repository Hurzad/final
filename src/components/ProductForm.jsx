import React, { useRef, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
// import { addProduct } from '../tools/actions/shopAction';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

// burada onForSubmit bir props dur ki,onu melumatlari cekmek ucun istifade olunub
const ProductForm = ({onFormSubmit,sendedit}) => {
    const [photo,setPhoto] = useState(sendedit?sendedit.photo:"");
    const [title,setTitle] = useState(sendedit?sendedit.title:"");
    const [desc,setDesc] = useState(sendedit?sendedit.desc:"");
    const [price,setPrice] = useState(sendedit?sendedit.price:"");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formSubmited = e => {
        e.preventDefault();
      if (!photo || !title || !desc || !price) {
        swal("Please fill input","","warning");
      }else{
        onFormSubmit({
            photo,title,price,desc
        })
        // dispatch(addProduct({
        //     photo:imgRef.current.value,
        //     title:titleRef.current.value,
        //     desc:descRef.current.value,
        //     price:priceRef.current.value
        // }))
      
      }
    }
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Col sm={5}>
                <form onSubmit={formSubmited}>
                    <div className="mb-3">
                        <label className="form-label">Photo Link</label>
                        <input value={photo} onChange={e=>setPhoto(e.target.value)} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input value={price} onChange={e=>setPrice(e.target.value)} type="text" className="form-control" />
                    </div>

                    <label className="form-label">Description</label>
                    <div class="form-floating">
                        <textarea value={desc} onChange={e=>setDesc(e.target.value)} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    </div>

                    <button type="submit" className="btn btn-dark my-4">Add</button>
                </form>
            </Col>
        </div>

    )
}

export default ProductForm
