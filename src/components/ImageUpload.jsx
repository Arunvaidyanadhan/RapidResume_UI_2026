import { useState } from 'react';
import axios from 'axios';

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) return alert('Please select a photo');

    const formData = new FormData();
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/upload', formData);
      alert('Passport photo uploaded successfully');
    } catch (err) {
      void err;
      alert('Upload failed');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Upload Passport Size Photo</h3>
      <input type="file" accept="image/*" onChange={handleChange} />
      {preview && (
        <div style={{ marginTop: '10px' }}>
          <img
            src={preview}
            alt="Passport Preview"
            width="120"
            height="150"
            style={{ objectFit: 'cover', border: '1px solid #ccc' }}
          />
        </div>
      )}
      <button onClick={handleUpload} style={{ marginTop: '10px' }}>
        Upload
      </button>
    </div>
  );
}
