import React, { useEffect } from 'react'

const UploadJs = () => {
    useEffect(() => {
        let formData = new FormData;
        let fileField = document.querySelector("input[type='file']")

        formData.append('username', 'abc123')
        formData.append('avatar', fileField.files[0])
        console.log(fileField, formData)
        // 地址用不了了
        fetch('https://example.com/profile/avatar', {
            method: 'PUT',
            body: formData
        })
            .then(response => response.json())
            .then(response => console.log('Success:', response))
            .catch(error => console.log('Error:', error))
            
    })

    return (
        <div>
            <input type='file' />
        </div>
    )
}

export default UploadJs
