import { MongoClient } from 'mongodb';

import { Fragment } from 'react';
import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A first meetup',
//         image: 'https://tacchi-canvas-prod.s3.amazonaws.com/uploads/work/image/174/Fab_Meetup_-_Identity_Design_by_Benjamin_Thomas__Creative_Director_in_Tokyo.jpg',
//         address: 'some address 5, 12345, some city',
//         description: 'Details of meetup coming up'
//     },
//     {
//         id: 'm2',
//         title: 'A Second meetup',
//         image: 'https://777944.smushcdn.com/1518562/wp-content/uploads/2021/10/1600x900-1.png?lossy=1&strip=1&webp=1',
//         address: 'some address 15, 88888, some city',
//         description: 'Details of meetup coming up'
//     },
//     {
//         id: 'm3',
//         title: 'A final meetup',
//         image: 'https://777944.smushcdn.com/1518562/wp-content/uploads/2021/10/1600x900-1.png?lossy=1&strip=1&webp=1',
//         address: 'some address 8, 333333, some city',
//         description: 'Details of meetup coming up'
//     }
// ];

function HomePage(props) {
    return (
    <Fragment>
        <Head>
            <title>React JS Meetups</title>
            <meta name='description' content='meetups for ReactJS in your city coming' />
        </Head>
        <MeetupList meetups={props.meetups}/>
    </Fragment>
    );
}

// export async function getServerSideProps() {
//     const client = await MongoClient.connect('mongodb+srv://rajnishkumar:Airtel@eventsdb.f5wxu.mongodb.net/meetups?retryWrites=true&w=majority');
//     const db = client.db();
//     const collection = db.collection('meetups');

//     const meetupData = await collection.find().toArray();
//     client.close();

//     return {
//         props: {
//             meetups: meetupData.map(meetup => ({
//                 title: meetup.title,
//                 image: meetup.image,
//                 address: meetup.address,
//                 id: (meetup._id).toString(),
//             }))
//         }
//     }
// }

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://rajnishkumar:Airtel@eventsdb.f5wxu.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const collection = db.collection('meetups');

    const meetupData = await collection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetupData.map(meetup => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: (meetup._id).toString(),
            }))
        },
        revalidate: 10
    }
}


export default HomePage;