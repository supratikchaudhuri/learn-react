// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import ProfileMistake from "./components/profile";
import Profile from "./components/profile_props";
import Bio from "./qcomps/bios";
import MyFirstComp from "./qcomps/firstcomp";
import GalleryProps from "./qcomps/gallery_props";
import TodoList from "./qcomps/todos";

export default function Home() {
  return (
    <>
      <Profile />
      <ProfileMistake />
      <MyFirstComp />
      <Bio />
      <TodoList />
      <GalleryProps />
    </>
  );
}
