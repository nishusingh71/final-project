import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";

export const useFormData = (initialState, flag) => {
    const [formData, setFomData] = useState(initialState);
    const [uploadFileStatus, setUploadFileStatus] = useState(false);
    
    const inputChange = (event, object) => {
        setFomData((prevValue) => ({
            ...prevValue,
            [event.target.name]: {
                ...object,
                value: event.target.value,
                touched: true,
                status: event.target.value !== ""  && object.required ? "valid" : "invalid" 
            }
        }))

        if(object.required) {
            setFomData((prevValue) => ({
                ...prevValue,
                formStatus: event.target.value !== ""  && object.required ? "valid" : "invalid" 
            }))
        }
    }

    const uploadFiles = (event, object) => {

        setUploadFileStatus(true);

        const storageRef = ref(storage, flag + '/' + event.target.files[0].name);

        const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;

                    default:
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFomData((prevData) => ({
                        ...prevData,
                        image: {
                            ...object,
                            value: downloadURL,
                            touched: true,
                            status: downloadURL !== ""  && object.required ? "valid" : "invalid" 
                        }
                    }))

                    setUploadFileStatus(false)

                    if(object.required) {
                        setFomData((prevValue) => ({
                            ...prevValue,
                            formStatus: event.target.files.length !== ""  && object.required ? "valid" : "invalid" 
                        }))
                    }
                });
            }
        );
    }

    return [formData, uploadFileStatus , setFomData, inputChange, uploadFiles]
}