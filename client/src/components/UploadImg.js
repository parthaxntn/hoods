import React, { useState } from 'react'

export default function UploadImg() {

    const [selectedFile, setSelectedFile] = useState()
    const [isSelected, setIsSelected] = useState(false)

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0])
        setIsSelected(true)
    }

    const handleSubmission = () => {
        const formData = new FormData()

        formData.append('File', selectedFile)

        fetch('', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('Success', result)
            })
            .catch(err => {
                console.error('Error', err)
            })
    }

    return (
        <div>
            <div>
                <input type="file" name="file" onChange={changeHandler} />
                {isSelected ? (
                    <div>
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>
                            lastModifiedDate:{' '}
                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p>
                    </div>
                ) : (
                    <p>Select a file to show details</p>
                )}
                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div>
        </div>
    )
}
