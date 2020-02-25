import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  wait,
  getByTestId
} from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';
import userEvent from '@testing-library/user-event'


jest.mock('./api/fetchShow')
console.log(mockFetchShow)

const shows = {
    data: {
    
        id: 2993,
        url: "http://www.tvmaze.com/shows/2993/stranger-things",
        name: "Stranger Things",
        type: "Scripted",
        image: {medium: "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"},
        summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
        _embedded: {
            episodes: [{
                id: 553946,
                url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
                name: "Chapter One: The Vanishing of Will Byers",
                season: 1,
                number: 1,
                airdate: "2016-07-15",
                airtime: "",
                airstamp: "2016-07-15T12:00:00+00:00",
                runtime: 60,
                image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},
                summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>"
            },
            {
                id: 909343,
                url: "http://www.tvmaze.com/episodes/909343/stranger-things-2x03-chapter-three-the-pollywog",
                name: "Chapter Three: The Pollywog",
                season: 2,
                number: 3,
                airdate: "2017-10-27",
                airtime: "",
                airstamp: "2017-10-27T12:00:00+00:00",
                runtime: 60,
                image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/132/332039.jpg"},
                summary: "<p>Dustin takes in a stray and calls it D'Artagnan. However, his plans to show it to Mr. Clarke don't go as intended. Meanwhile, Max tries to convince Mike to let her join the group, El sneaks out to pay her friends a visit, and Will decides to take a stand and face his fears.</p>"

            },
            {
                id: 1576470,
                url: "http://www.tvmaze.com/episodes/1576470/stranger-things-3x02-chapter-two-the-mall-rats",
                name: "Chapter Two: The Mall Rats",
                season: 3,
                number: 2,
                airdate: "2019-07-04",
                airtime: "",
                airstamp: "2019-07-04T12:00:00+00:00",
                runtime: 50,
                image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/204/511261.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/204/511261.jpg"},
                summary: "<p>While El and Max go shopping, Nancy and Wheeler follow up on the exploding rats. Billy takes a coworker on a field trip, and Joyce blows off dinner with Jim to meet with Mr. Clarke.</p>"
            },
        ]
        }
    }
}

test('summary test', async () =>{
mockFetchShow.mockResolvedValueOnce(shows)

const {getByText} = render(<App/>)

await wait(() =>{
getByText(/captivated/i)
})

})

test('render dropdown', async () =>{
    mockFetchShow.mockResolvedValueOnce(shows)

    const {getByText} = render(<App/>)

    await wait(()=>{
        userEvent.click(getByText(/Select a Season/i))
        getByText(/Season 1/i)
    })
})