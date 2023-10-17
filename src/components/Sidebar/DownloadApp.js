import { Icon } from "Icons"

function DownloadApp() {
	return (
		<a href="/src/components/Sidebar/mon_cv/CV_hichem_gouia_alternance_intelligence-artificielle.pdf" className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white gap-x-4 items-center px-6" download>
			<Icon name="download" size={20} />
			Download my CV
		</a>
	)
}

export default DownloadApp