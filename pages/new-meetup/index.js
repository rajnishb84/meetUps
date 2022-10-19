import { Fragment } from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function AddNewMeetupPage() {
   const router =  useRouter();
    const addNewMeetupHandler = async (meetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data);
        router.push('/');
    }
    return (
        <Fragment>
            <Head>
                <title>Add new meetup</title>
                <meta name='description' content='Add new meetup for all the world'/>
            </Head>
            <NewMeetupForm  onAddMeetup={addNewMeetupHandler}/>
        </Fragment>
    );
}

export default AddNewMeetupPage;
