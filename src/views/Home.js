import Section from "components/Section";
import songs from "data/songs"
import education from "data/education"
import experience from "data/experience"

function Home() {

	return (
		<div className="grid gap-y-8">
			<Section
				title="Focus on Me"
				more="/nothing"
				items={songs}
			/>
			<Section
				title="Playlist for Education"
				more="/nothing"
				items={education}
			/>
			<Section
				title="Playlist for Workout"
				more="/nothing"
				items={experience}
			/>
		</div>
	)
}

export default Home
