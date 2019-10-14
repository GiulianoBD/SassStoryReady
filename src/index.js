import '../assets/css/style.scss';

import axios from 'axios';
import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: 'zkZjHwggQ87hW7qRW8M60wtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

const requestOne = Storyblok.get('cdn/stories', { version: "published" })

axios.all([requestOne]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  // Usa - accedi ai risultati
  setDynamics(responseOne.data.stories[0].content)
})).catch(errors => {
  // Registra errori
  console.error(errors)
})

const setDynamics = data => {
    console.log(data)
}