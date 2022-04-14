import React, { useState, useEffect } from 'react'
import ModeSwitcher from '../chats/mode-switcher'
import NotificationBar from './notification-bar'
import { db, authentication } from '../../firebase'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

export const NotificationContainer = ({ onSelect }) => {
  const [notifications, setNotifications] = useState([])

  const notificationRef = collection(
    db,
    'notifications',
    authentication.currentUser.uid,
    'notifications',
  )
  const q = query(notificationRef, orderBy('sentAt', 'desc'))

  useEffect(() => {
    const notificationInfo = onSnapshot(q, (snapshot) => {
      let notifications = []
      snapshot.forEach((doc) => {
        notifications.push(doc.data())
      })
      setNotifications(notifications)
    })
    return () => notificationInfo()
  }, [])

  return (
    <main className="z-0 bg-chatContainer flex flex-col gap-9 h-[100vh] lg:max-h-[92vh] lg:w-full py-7 pl-4 sm:pl-10 rounded-r-md m-0">
      <section className="flex w-full justify-between pr-4 sm:pr-10">
        <p className="text-primary text-3xl font-semibold">Notifications</p>
        <ModeSwitcher onSelect={onSelect} />
      </section>

      <div className="h-full w-full main-chats-container overflow-y-auto sm:pr-10 pr-4">
        {notifications.length > 0 &&
          notifications.map((notification) => {
            return (
              <NotificationBar
                key={notification.id}
                notification={notification}
              />
            )
          })}
      </div>
    </main>
  )
}
export default NotificationContainer
