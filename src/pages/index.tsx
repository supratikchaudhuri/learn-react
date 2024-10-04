// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from "./components/profile";
import ProfileProps from "./components/profile_props";
import Bio from "./qcomps/bios";
import MyFirstComp from "./qcomps/firstcomp";
import GalleryProps from "./qcomps/gallery_props";
import ProfileMistake from "./qcomps/profile_mistake";
import PackingList from "./qcomps/props_item";
import RecipeList from "./qcomps/recipes";
import RequestTracker from "./qcomps/shoppingCart";
import Gallery from "./qcomps/state";
import Form from "./qcomps/stuckForm";
import FeedbackForm from "./qcomps/thankYouCrash";
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

      {/* LAB: React Update State */}
      <hr />
      <h1>React Update State</h1>

      <Gallery />
      <br />

      <Form />
      <br />

      <FeedbackForm />
      <br />

      <RequestTracker />
      <br />
    </>
  );
}
