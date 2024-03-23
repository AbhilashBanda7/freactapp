import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function AchiveUpload() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    console.log(data.firstname,data.File1[0]);

    formData.append('firstname', data.firstname);
    console.log(formData);
    formData.append('file', data.File1[0]);
    try {
      const response = await fetch('http://localhost:3132/achive', {
        method: 'POST',
      headers:{"Content-Type":"application/json"},
        body: "abhi"
      }); 
      
      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      navigate('/Achievements');
    } catch (error) {
      setError('Error in uploading: ' + error.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <div className='text-center'>
        <div className='card w-50 h-100 mx-auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row row-cols-2 mx-auto p-1 m-1 g-2'>
              <div>
                <input
                  type='text'
                  id='firstname'
                  placeholder='FirstName'
                  className='input-control'
                  {...register('firstname', { required: true, minLength: 'abhi' })}
                />
              </div>
              <div>
                <input type='file' placeholder='choose File' {...register('File1')} />
              </div>
            </div>
            <button type='submit' className='btn border m-1'>
              Upload
            </button>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default AchiveUpload;
