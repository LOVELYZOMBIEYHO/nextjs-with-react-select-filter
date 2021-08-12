// import qs from "qs";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import styles from "../../styles/Home.module.css";

// export default function searchPage({ events, term }) {
//   const router = useRouter();
//   console.log(term);
//   //   console.log(events);
//   return (
//     <div title="Search Results">
//       <Link href="/">Go Back</Link>
//       <h1>Search Results for {router.query.term}</h1>

//       {events.length === 0 && <h3>No events to show</h3>}
//       {/* 將events 的數據取出放在evt 中,使Eventitem.js 可用evt讀取 */}
//       {events.map((evt) => (
//         <div className={styles.card}>
//           userId: {evt.userId}
//           <br />
//           {evt.title}
//         </div>
//       ))}
//     </div>
//   );
// }

// // fetch data with qs.npm
// export async function getServerSideProps({ query: { term } }) {
//   let stringify = qs.stringify(term);
//   console.log("stringify", stringify);
//   console.log(typeof stringify);

//   let singleString = [term];

//   let stringNewA = stringify.charAt(2);
//   let stringNewB = stringify.charAt(6);
//   let stringNewC = stringify.charAt(10);
//   let stringNewD = stringify.charAt(14);

//   // let stringNewA = new stringify.split("/..(?<=0)");
//   console.log(stringNewA);

//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${stringNewA}&userId=${stringNewB}&userId=${stringNewC}&userId=${stringNewD}&userId=${singleString}`
//   );

//   //   const res = await fetch(
//   //     `https://jsonplaceholder.typicode.com/posts?userId=${term}`
//   //   );
//   const events = await res.json();
//   return {
//     // 這裡用Props是因為data現在在server side 需在function Home中output
//     props: { events, term },
//   };
// }

// //  // https://jsonplaceholder.typicode.com/posts?userId=3

// ----------------------------------------------------------------------------------------
// import qs from "qs";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import styles from "../../styles/Home.module.css";

// export default function searchPage({ events, term }) {
//   const router = useRouter();
//   console.log(term);
//   //   console.log(events);
//   return (
//     <div title="Search Results">
//       <Link href="/">Go Back</Link>
//       <h1>Search Results for {router.query.term}</h1>

//       {events.length === 0 && <h3>No events to show</h3>}
//       {/* 將events 的數據取出放在evt 中,使Eventitem.js 可用evt讀取 */}
//       {events.map((evt) => (
//         <div className={styles.card}>
//           userId: {evt.userId}
//           <br />
//           {evt.title}
//         </div>
//       ))}
//     </div>
//   );
// }

// // fetch data with qs.npm
// export async function getServerSideProps({ query: { term } }) {
//   console.log(typeof term);
//   console.log(term);

//   //   console.log(term[0] + term[1]);
//   //   let arr = [term[0] + term[1]];
//   //   let arr = Array.entries(term);
//   //   console.log("arr:" + arr);

//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${term[0]}&userId=${term[1]}&userId=${term[2]}&userId=${term[3]}`
//   );

//   const events = await res.json();

//   return {
//     // 這裡用Props是因為data現在在server side 需在function Home中output
//     props: { events, term },
//   };
// }

// // // https://jsonplaceholder.typicode.com/posts?userId=3

// ----------------------------------------------------------------------------------------
import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function searchPage({ events, term }) {
  const router = useRouter();
  console.log(term);
  //   console.log(events);
  return (
    <div title="Search Results">
      <Link href="/">Go Back</Link>

      {/* If object shows term.join, otherwise show term */}
      <h1>
        Search Results for userId{" "}
        {term instanceof Object ? term.join(" & userId") : term}
      </h1>

      {events.length === 0 && <h3>No events to show</h3>}
      {/* 將events 的數據取出放在evt 中,使Eventitem.js 可用evt讀取 */}
      {events.map((evt) => (
        <div key={evt.id} className={styles.card}>
          userId: {evt.userId}
          <br />
          {evt.title}
        </div>
      ))}
    </div>
  );
}

// fetch data with qs.npm
export async function getServerSideProps({ query: { term } }) {
  console.log(typeof term);
  console.log(term);

  // if term = object(array), show term[0]url otherwise, show term
  let arrC =
    term instanceof Object
      ? `https://jsonplaceholder.typicode.com/posts?userId=${term[0]}&userId=${term[1]}&userId=${term[2]}&userId=${term[3]}&userId=${term[4]}&userId=${term[5]}&userId=${term[6]}&userId=${term[7]}&userId=${term[8]}&userId=${term[9]}`
      : `https://jsonplaceholder.typicode.com/posts?userId=${term}`;

  console.log(typeof arrC);
  console.log(arrC);
  const res = await fetch(arrC);

  const events = await res.json();
  return {
    // 這裡用Props是因為data現在在server side 需在function Home中output
    props: { events, term },
  };
}

// // https://jsonplaceholder.typicode.com/posts?userId=3
