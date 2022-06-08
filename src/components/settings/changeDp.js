import React, { useState } from 'react'
import { BsCameraFill } from 'react-icons/bs'
import { authentication, storage } from '../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { updateProfile } from 'firebase/auth'

const ChangeDp = () => {
  const [imageUpload, setImageUpload] = useState(null)
  const user = authentication.currentUser

  const uploadFileAndUpdatePicture = async () => {
    if (imageUpload == null) return
    const imageRef = ref(storage, `profilePictures/${user.uid}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        updateProfile(user, {
          photoURL: url,
        })
          .then((r) => {
            console.log(r)
          })
          .catch((e) => {
            console.log(e)
          })
      })
    })
  }

  return (
    <div className="flex gap-4">
      <div className="relative changeDp-image-outer h-[80px]">
        <img
          src={user.photoURL}
          alt="Other user avatar"
          className="h-full aspect-square rounded-full mb-4 object-cover z-1"
        />
        <BsCameraFill className="hover-camera absolute text-white text-xl" />
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0])
          }}
          className="h-full w-full opacity-0 absolute cursor-pointer top-0 right-0 z-[99] "
        />
      </div>
      <section className="flex flex-col gap-3">
        <div className="text-primary font-medium text-[16px]">
          {user.displayName}
        </div>
        <button
          onClick={uploadFileAndUpdatePicture}
          className="text-primary py-2 px-5 w-max rounded-md bg-blue-600 hover:bg-blue-700 text-sm"
        >
          Update Picture
        </button>
      </section>
    </div>
  )
}
export default ChangeDp
