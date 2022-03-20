import React, {useRef, useState} from 'react';
import http from "../plugins/http"

const Upload = () => {

    const [error, setError] = useState(null)
    const [error2, setError2] = useState(null)

    const photoRef = useRef()
    const cityRef = useRef()
    const priceRef = useRef()
    const descriptionRef = useRef()

    async function addPhoto() {

        const photo = {
            photoUrl: photoRef.current.value
        }
        const data = await http.post(photo, "/addPhoto")
        console.log(data)
        if (!data.success) {
            setError(data.error)
        } else {
            setError(null)
            localStorage.setItem('apartment', data.id)
        }
    }

    async function upload() {
        const apartment = {
            city: cityRef.current.value,
            price: priceRef.current.value,
            description: descriptionRef.current.value,
            apartmentId: localStorage.getItem('apartment')
        }
        const data = await http.post(apartment, "/create")
        console.log(data)
        if (!data.success) {
            setError2(data.error)
        } else {
            setError2(null)
        }
        localStorage.clear()
    }


    return (
        <div className="d-flex column">
            <div className="d-flex">
                <input ref={photoRef} type="text" placeholder="photo url"/>
                <button onClick={addPhoto}>Add</button>
            </div>
            {error && <div>{error}</div>}
            <input ref={cityRef} type="text" placeholder="city"/>
            <input ref={priceRef} type="text" placeholder="price"/>
            <input ref={descriptionRef} type="text" placeholder="description"/>
            {error2 && <div>{error2}</div>}
            <div className="d-flex j-center">
                <button onClick={upload}>Upload</button>
            </div>

        </div>
    );
};

export default Upload;