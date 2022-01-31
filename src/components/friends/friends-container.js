import React, { useState, useEffect } from 'react'
import ModeSwitcher from '../chats/mode-switcher'
import SearchBar from './friends-search'
import AddFriendSearchBar from './add-friend-searchbar'
import FriendBar from './friend-bar'
import AddFriendBar from './add-friend-bar'
import { db, authentication } from '../../firebase';
import {
  collection,
  onSnapshot,
  query,
  where
} from 'firebase/firestore'


function FriendsContainer({onSelect}){

    const [ friendsScreen, setFriendsScreen ] = useState(true)
    const [ friends, setFriends ] = useState([])
    const [ filteredFriends, setFilteredFriends ] = useState([])
    const colRef = collection(db, 'users')
    const q = query(colRef, where('uid', 'not-in', [authentication.currentUser.uid]))

    const toggleFriendsScreen = (value) => {
        setFriendsScreen(value)
    }
    useEffect(() => {
        const unsub = onSnapshot(q, (snapshot) => {
    
            let friends = []
            snapshot.docs.forEach(doc => {
                friends.push({...doc.data(), id:doc.uid})
            })
            setFriends(friends)
        })
        return () => unsub()
    })

    const filterFriends = (userName) => {

        let filteredFriends = friends.filter(friend => friend.displayName.toLowerCase().includes(userName.toLowerCase()))

        filteredFriends ? setFilteredFriends(filteredFriends) : setFilteredFriends([])

    }
    return (
        
        <main className="z-0 bg-chatContainer flex flex-col gap-6 h-[100vh] lg:max-h-[92vh] lg:w-full py-7 pl-4 sm:pl-10 rounded-r-md m-0">

            <section className="flex flex-col gap-6 w-full pr-4 sm:pr-10">
                <section className="flex w-full">
                    <p onClick={() => toggleFriendsScreen(true)} className="text-primary text-3xl font-semibold">Friends</p>

                    <button 
                        onClick={() => toggleFriendsScreen(false)} 
                        className="add-friend-button bg-navbarBg rounded-md text-primary font-semibold ml-auto mr-6 text-sm py-2 px-4"
                        disabled={!friendsScreen}
                    >Add Friend
                    </button>

                    <ModeSwitcher onSelect={onSelect}/>
                </section>

                {friendsScreen ? <SearchBar onChange={(filterFriends)}/> : <AddFriendSearchBar/>}

            </section>

            <div className="h-full w-full main-chats-container overflow-y-auto sm:pr-10 pr-4">

                {friendsScreen ? filteredFriends.length > 0 && filteredFriends.map(friend => {
                    return <FriendBar key={friend.uid} friend={friend}/>
                }) : 
                    <AddFriendBar/>
                }
            </div>
            
            
        </main>

    )
}
export default FriendsContainer