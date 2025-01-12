import ReactGA from 'react-ga4'

ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TOKEN ?? '')
