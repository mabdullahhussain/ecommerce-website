import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
          <div className="flex flex-col items-center mt-5 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              Welcome
            </h1>
            <p className="text-3xl md:text-4xl font-semibold">
              {user ? `"${user.email.split('@')[0]}"` : "Guest"}
            </p>
          </div>
          <Outlet />
        </header>
        <main className="flex-grow">
          <Card />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
