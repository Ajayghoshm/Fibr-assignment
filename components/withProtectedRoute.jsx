
'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const withProtectedRoute=function(WrappedComponent) {
  return (props) => {
    const router = useRouter();

    const [login,setLogin]=useState(false)

    useEffect(() => {
      let value=JSON.parse(localStorage.getItem('auth'))
      
      if (!value) {
        router.push('/login');
      }
      else{
        setLogin(true)
      }
    }, [router]);

    return login ? <WrappedComponent {...props} /> : null;
  };
};

export default withProtectedRoute;