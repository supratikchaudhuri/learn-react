// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import { default as Profile } from "./components/profile";
import { default as ProfileProps } from "./components/profile_props";
import Bio from "./qcomps/bios";
import MyFirstComp from "./qcomps/firstcomp";
import GalleryProps from "./qcomps/gallery_props";
import ProfileMistake from "./qcomps/profile_mistake";
import PackingList from "./qcomps/props_item";
import RecipeList from "./qcomps/recipes";
import TodoList from "./qcomps/todos";

export default function Home() {
  return (
    <>
      <Profile />
      <ProfileMistake />
      <MyFirstComp />
      <Bio />
      <TodoList />
      <ProfileProps />
      <GalleryProps />
      <PackingList />
      <RecipeList />
    </>
  );
}
