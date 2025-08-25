import React from 'react';
import './App.css';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { network, jobs, messaging, notifications, totalNotificationsselector } from './atom';
import { useRecoilState } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

function Main() {
  const networkCount = useRecoilValue(network);
  const messagingCount = useRecoilValue(messaging);
  const jobsCount = useRecoilValue(jobs);
  const notificationsCount = useRecoilValue(notifications);
  const totalNotifications = useRecoilValue(totalNotificationsselector);

  return (
    <div>
      <button>Home</button>

      <button>My Network ({networkCount >= 100 ? '99+' : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messages ({messagingCount})</button>
      <button>Notifications ({notificationsCount})</button>

      <button>Me ({totalNotifications})</button>
    </div>
  );
}



export default App;