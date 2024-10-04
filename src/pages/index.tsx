// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import BucketList from "./qcomps/arrObj";
import List from "./qcomps/artistsRemoveArr";
import RequestTracker from "./qcomps/shoppingCart";
import Scoreboard from "./qcomps/updObjectsForm";

export default function Home() {
  return (
    <>
      {/* <h1>React Components</h1> */}
      {/* <Profile />
      <ProfileMistake />
      <MyFirstComp />
      <Bio />
      <TodoList />
      <ProfileProps />
      <GalleryProps />
      <PackingList />
      <RecipeList /> */}

      {/* LAB: React Update State */}
      <hr />
      <h1>React Update State</h1>

      {/* <Gallery />
      <hr />

      <Form />
      <hr />

      <FeedbackForm />
      <hr />

      <hr /> */}

      <RequestTracker />
      <hr />

      <Scoreboard />
      <hr />

      <List />
      <hr />

      <BucketList />
    </>
  );
}
