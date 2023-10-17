import allout90sImage from './playlist_cover/Allout90s_spotify.png';
import call from './playlist_cover/call_me_maybe.jpeg';
import roadtrip from './playlist_cover/roadtrip.jpeg';
import contact from './playlist_cover/contact.png';
import social from './playlist_cover/social_club_mix.png';

import am from './mp3/HMH - 4am.mp3';
import ask from './mp3/HMH - Ask You [OUT NOW].mp3';
import count from './mp3/HMH - Count On You.mp3';
import cover from './mp3/HMH - Cover It Up.mp3';
import useless from './mp3/HMH & Namsha - Useless (Lyrics) [HFM Release].mp3';

import hmh1 from './mp3/hmh-4am.jpeg';
import hmh2 from './mp3/hmh-askyou.jpeg';
import hmh3 from './mp3/hmh-countonyou.jpeg';
import hmh4 from './mp3/hmh-coveritup.jpeg';
import hmh5 from './mp3/hmh-useless.jpeg';

export default [ 
	{
		id: 1,
		title: 'Born in 1999',
		description: '2 chemin de la poirie',
		description2: '88460 TENDON',
		artist: 'HMH',
		image: allout90sImage,
		image2: hmh1,
		titleSpotify: '4am',
		type: 'album',
		src: am
	},
	{
		id: 2,
		title: 'Call Me Maybe Radio',
		artist: 'HMH',
		description: '06 70 71 89 77',
		image: call,
		image2: hmh2,
		titleSpotify: 'Ask You',
		type: 'album',
		src: ask
	},
	{
		id: 3,
		title: 'Summer Road Trip',
		artist: 'HMH',
		description: 'Permis B + Véhicule',
		image: roadtrip,
		image2: hmh3,
		titleSpotify: 'Count On You',
		type: 'album',
		src: count
	},
	{
		id: 4,
		title: 'Keep Contact',
		artist: 'HMH',
		description: 'hichem.gouia@epitech.eu',
		image: contact,
		image2: hmh4,
		titleSpotify: 'Cover It Up',
		type: 'album',
		src: cover
	},
	{
		id: 5,
		title: 'Social Club',
		artist: 'HMH',
		description: 'Linkedin : @hichem.gouia',
		description2 :'Github : @iamhmh',
		image: social,
		image2: hmh5,
		titleSpotify: 'Useless',
		type: 'album',
		src: useless
	},
]