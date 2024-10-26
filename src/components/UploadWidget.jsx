import React, { useEffect, useRef } from 'react'

function UploadWidget() {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
            uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
        }, function (error, result) {
            console.log(result)
        })
    }, [])

    return (
        <button onClick={() => widgetRef.current.open()}>Upload</button>
    )
}

export default UploadWidget
