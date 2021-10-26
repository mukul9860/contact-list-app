import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ViewContact from '../components/ViewContact/ViewContact';
import firedb from '../firebase';
import './styles.css';

const View = () => {
    const [contactData, setContactData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        firedb.child(`contactDB/${id}`).get().then((snapshot) => {
            if (snapshot.exists()) {
                setContactData({ ...snapshot.val() });
            }
            else {
                setContactData({});
            }
        })
    }, [id]);
    return (
        <div>
            <ViewContact 
                id = {id}
                name = {contactData.name}
                email = {contactData.email}
                contact = {contactData.contact}
            />
        </div>
    )
}

export default View
