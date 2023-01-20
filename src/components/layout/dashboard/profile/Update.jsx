import React from 'react';
import { useUpdateAvatar, useUser } from "../../../../hooks/users";
import { useParams } from "react-router-dom";
import { useAuth } from '../../../../hooks/auth';

function Update() {
const {id}= useParams()
  const { user } = useUser(id);
  const { user:curr } = useAuth();
  const{
    setFile,
    updateAvatar,
    isLoading,
    
  }= useUpdateAvatar(curr?.id)

  function handleChange(e) {
    setFile(e.target.files[0])
  }
  return (
    <div>
      <input type="file" accept='image/*' onChange={handleChange} />
      {user?.id== curr?.id&& <button onClick={updateAvatar}>update</button>}
      
    </div>
  )
}

export default Update