import { useState, useEffect } from "react";
import { getCreatorLocalStorage } from '../../utils/getCreatorLocalStorage';
import defaultUserImage from '../../assets/home/users/default-user.png';
import { updateCreatorLocalStorage } from '../../utils/updateCreatorLocalStorage';

const useUserProfile = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [creditBalance, setCreditBalance] = useState(0);
  const [creations, setCreations] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(defaultUserImage);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUserData = async () => {
    try {
      const creatorId = getCreatorLocalStorage().creator._id;
      const token = getCreatorLocalStorage().token;

      const response = await fetch(`${import.meta.env.VITE_CREATORS_API}/${creatorId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to fetch user data from server.');

      const creator = await response.json();
      setCreditBalance(creator.creditBalance);
      setName(creator.name);
      setUserName(creator.username);
      setCreations(creator.images || []);
      setProfilePhoto(creator.photo || defaultUserImage);
    } catch (err) {
      console.error('Failed to fetch creator:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const updateName = async (newName) => {
    try {
      const creatorId = getCreatorLocalStorage().creator._id;
      const token = getCreatorLocalStorage().token;
      const updatedData = {
        creator: {
            ...getCreatorLocalStorage().creator,
            name: name,
        },
    };
    updateCreatorLocalStorage(updatedData);

      if (newName && newName !== userName) {
        const response = await fetch(`${import.meta.env.VITE_CREATORS_API}/${creatorId}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: newName })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to update name: ${errorData.message || response.statusText}`);
        }

        const updatedCreator = await response.json();
        setName(updatedCreator.name);
        setUserName(updatedCreator.username);
        setError("");
      } else {
        setError("Name has not changed.");
      }
    } catch (err) {
      console.error('Failed to update name:', err);
      setError(err.message);
    }
  };

  const updateProfilePhoto = async (newPhoto) => {
    try {
      const creatorId = getCreatorLocalStorage().creator._id;
      const token = getCreatorLocalStorage().token;

      const updatedData = {
        creator: {
            ...getCreatorLocalStorage().creator,
            photo: newPhoto,
        },
    };
    updateCreatorLocalStorage(updatedData);

      const response = await fetch(`${import.meta.env.VITE_CREATORS_API}/${creatorId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ photo: newPhoto })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to update photo: ${errorData.message || response.statusText}`);
      }

      const updatedCreator = await response.json();
      setProfilePhoto(updatedCreator.photo || defaultUserImage);
    } catch (err) {
      console.error('Failed to update photo:', err);
    }
  };

  return {
    name,
    userName,
    creditBalance,
    creations,
    profilePhoto,
    loading,
    error,
    setName,
    updateName,
    updateProfilePhoto,
  };
};

export default useUserProfile;
