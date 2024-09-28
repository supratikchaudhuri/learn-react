// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import {
  default as Profile,
  default as ProfileMistake,
} from "./components/profile";
import MyFirstComp from "./qcomps/firstcomp";

export default function Home() {
  return (
    <>
      <Profile />
      <ProfileMistake />
      <MyFirstComp />
    </>
  );
}
