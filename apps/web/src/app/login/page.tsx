"use client"

import React from 'react'
import { Login } from 'ui';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const onLogin = (username : string, password : string) => {
    console.log(username, password);
  }

  const onRegister = () => {
    router.push('/signup');
  }

  return (
    <>
    <Login onLogin = {onLogin} onRegister = {onRegister}/>
    </>
  )
}

export default LoginPage;