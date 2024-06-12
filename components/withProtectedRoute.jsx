
'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const withProtectedRoute=function(WrappedComponent) {
  return (props) => {
    const router = useRouter();

    const [login,setLogin]=useState(false)

    useEffect(() => {
      let value=JSON.parse(localStorage.getItem('auth'))
      // If the user is not authenticated, redirect to the login page
      if (!value) {
        router.push('/login');
      }
      else{
        setLogin(true)
      }
    }, [router]);

    // If the user is authenticated, render the WrappedComponent
    // Otherwise, render null while the redirection is in progress
    return login ? <WrappedComponent {...props} /> : null;
  };
};

export default withProtectedRoute;