import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, waitForElement} from '@testing-library/react'
import Episodes from './Episodes'
import App from '../App'

const episode = [{
    id: 1752754,
    url: "http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club",
    name: "Chapter One: The Hellfire Club",
    season: 4,
    number: 1,
    airdate: "",
    airtime: "",
    airstamp: null,
    runtime: 60,
    image: null,
    summary: null
}]

test('render cards',()=>{
    const {queryAllByTestId, rerender} = render(<Episodes episodes={[]}/>)
    queryAllByTestId(/map-card/i)

    expect(queryAllByTestId(/map-card/i)).toHaveLength(0)

    rerender(<Episodes episodes={episode}/>)
    expect(queryAllByTestId(/map-card/i)).toHaveLength(1)
})