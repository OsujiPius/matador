import Head from "next/head";
import { useQuery } from "react-query";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Stats from "../components/Stats";
import Chart from "../components/Chart";
import Listings from "../components/Listings";
import axios from "axios";

export default function Home() {
  async function getData() {
    try {
      const response = await axios.get(
        "https://dev.matadortrust.com/v2/developers/dashboard_data"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const { data, isLoading, isFetching } = useQuery("matadorData", getData);

  console.log(data);

  if (isFetching || isLoading) {
    return <h1 className="loader">Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>Matador trust</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <main>
        <div className="stats-section">
          <Chart />
          <Stats data={data} />
        </div>
        <div className="listing-section">
          <Listings data={data} />
        </div>
      </main>
    </>
  );
}
