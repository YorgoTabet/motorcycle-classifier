import React, { useState } from 'react';

interface ImageUploadProps {
    onUploadSuccessful: (blob: Blob) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onUploadSuccessful }) => {
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    const blob = new Blob([reader.result], { type: file.type });
                    onUploadSuccessful(blob);
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <p>Image selected: {image.name}</p>}
            {image && (
                <div>
                    <img src={URL.createObjectURL(image)} alt="Selected" style={{ maxWidth: '100%', height: '100px' }} />
                </div>
            )}
        </div>
    );
};

