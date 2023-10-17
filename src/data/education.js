import epitech from './playlist_cover/epitech_playlist.png';
import bts1 from './playlist_cover/bts_dev.png';
import bts2 from './playlist_cover/bts_ams.png';
import bac from './playlist_cover/study.png';

export default [ 
	{
		id: 1,
		title: 'Master MSc Pro - IA',
		artist: 'Epitech',
		description: 'Epitech Technology - Nancy',
        description2 :'Sept. 2023 - Sept. 2026',
		image: epitech,
	},
    {
        id: 2,
        title: 'BTS Full Stack Developer',
        artist: 'CCI des Vosges',
        description: 'CCI des Vosges - Epinal',
        description2 :'Sept. 2022 - July 2022',
        image: bts1,
    },
    {
        id: 3,
        title: 'BTS AMS',
        artist: 'UCPA Ecole des DJs',
        description: 'UCPA Ecole des DJs - Lyon',
        description2 :'Sept. 2018 - July 2020',
        image: bts2,
    },
    {
        id: 4,
        title: 'BAC ES',
        artist: 'Lycée La Haie Griselle',
        description: 'Lycée La Haie Griselle - Epinal',
        description2 :'Sept. 2014 - Sept. 2017',
        image: bac,
    }
]
