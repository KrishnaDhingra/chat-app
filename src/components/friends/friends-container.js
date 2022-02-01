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

    // determines that the total friends screen or the add friend screen should be shown. If this is true then the total friends screen will be shown and if false the add friend screen will be shown
    const [ friendsScreen, setFriendsScreen ] = useState(true)
    // holds the list of all the friends that the user has
    const [ totalFriends, setTotalFriends ] = useState([])
    // holds the list of the filtered friends based on the search
    const [ filteredFriends, setFilteredFriends ] = useState([])
    // holds the list of all the users that are on the platform
    const [ totalAddFriends, setTotalAddFriends ] = useState([])
    // holds the list of the filtered add friends based on the search
    const [ filteredAddFriends, setFilteredAddFriends ] = useState([])

    
    const friendsRef = collection(db, 'friends', authentication.currentUser.uid, 'friends')
    
    const addFriendsRef = collection(db, 'users')
    const q2 = query(addFriendsRef, where('uid', 'not-in', [authentication.currentUser.uid]))


    // this toggles friedsScreen state variable between true and false
    const toggleFriendsScreen = (value) => {
        setFriendsScreen(value)
    }
    // this loads all the friends the the user has and assigs them to the 'friends' state variable
    useEffect(() => {
        const loadFriends = onSnapshot(friendsRef, (snapshot) => {
    
            let friends = []
            snapshot.docs.forEach(doc => {
                friends.push(doc.data())
            })
            setTotalFriends(friends)
        })
        const loadAddFriends = onSnapshot(q2, (snapshot) => {
    
            let addFriends = []
            snapshot.docs.forEach(doc => {
                addFriends.push({...doc.data(), id:doc.uid})
            })
            setTotalAddFriends(addFriends)
        })
        return () => {
            loadFriends()
            loadAddFriends()
        }
    }, [])

    // this filter the friends state variables and then assigns the filtered value to the 'filteredFriends' state variable which inturn is used to render the 'friendBar' component
    const filterFriends = (userName) => {

        let filteredFriends = totalFriends.filter(friend => friend.displayName.toLowerCase().includes(userName.toLowerCase()))

        filteredFriends ? setFilteredFriends(filteredFriends) : setFilteredFriends([])
    }
    const filterAddFriends = (userName) => {

        let filteredAddFriends = totalAddFriends.filter(friend => friend.displayName.toLowerCase().includes(userName.toLowerCase()))

        filteredAddFriends ? setFilteredAddFriends(filteredAddFriends) : setFilteredAddFriends([])
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
                {friendsScreen ? <SearchBar onChange={filterFriends}/> : <AddFriendSearchBar onChange={filterAddFriends}/> }
            </section>

            <div className="h-full w-full main-chats-container overflow-y-auto sm:pr-10 pr-4">

                {
                    friendsScreen ? filteredFriends.length > 0 && filteredFriends.map(friend => {
                        return <FriendBar key={friend.uid} friend={friend}/>
                    }) : 
                    <div>
                        {
                            filteredAddFriends.length > 0 && filteredAddFriends.map(user => {
                                return <AddFriendBar key={user.uid} user={user}/>
                            })
                        }
                    </div>
                }
            </div>
            
            
        </main>

    )
}
export default FriendsContainer