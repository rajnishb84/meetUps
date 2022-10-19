import { MongoClient, ObjectId } from 'mongodb';

import { Fragment } from 'react';
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    return (
    <Fragment>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta name='description' content={props.meetupData.description} />
        </Head>
        <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}/>
    </Fragment>
    
    )
}


export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://rajnishkumar:Airtel@eventsdb.f5wxu.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const collection = db.collection('meetups');
    const meetUpsId = await collection.find({}, {_id: 1}).toArray();
    client.close();

    return {
        fallback: 'blocking',
        paths: meetUpsId.map(meetupId => ({
            params: {
                meetupId: (meetupId._id).toString()
            }
        }))
    }
}

export async function getStaticProps(context) {
    const meetUpId = context.params.meetupId;
    const client = await MongoClient.connect('mongodb+srv://rajnishkumar:Airtel@eventsdb.f5wxu.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetUpcollection = db.collection('meetups');

    const selectedMeetup = await meetUpcollection.findOne({_id: ObjectId(meetUpId)})

    client.close();
    
    console.log(meetUpId);
    return {
        props: {
            meetupData: {
                image: selectedMeetup.image,
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    }
} 

export default MeetupDetails;