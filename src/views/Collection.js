import { Icon } from "Icons";

function Collection({ item }) {
  return (
	<>
		<div className="flex gap-x-4 items-center">
			<span className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
				<Icon name="heartFilled" size={24} />
			</span>
			<div className="flex flex-col">
				<h6 className="p-2 text-[1rem] tracking-tighter font-semibold">
					Playlist
				</h6>
				<h3 className="p-2 text-[2.5rem] tracking-tighter font-semibold">
					My Projects
				</h3>
			</div>
		</div>
		<div className="flex items-center p-4">
			<button className="spotifyPlay">
				<Icon name="play" size={24} />
			</button>
		</div>
		<table className="w-full">
			<thead>
				<tr>
					<th>Title</th>
					<th>Github</th>
					<th>Liked</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Hichemify - Spotify Clone for my portfolio</td>
					<td><a href="https://github.com/iamhmh?tab=repositories" className="hover:underline">Github</a></td>
					<td><Icon name="heartFilled" size={24} /></td>
				</tr>
				<tr>
					<td>Social network for professionals</td>
					<td><a href="https://github.com/iamhmh?tab=repositories" className="hover:underline">Github</a></td>
					<td><Icon name="heartFilled" size={24} /></td>
				</tr>
				<tr>
					<td>AppleStore - Clone</td>
					<td><a href="https://github.com/iamhmh?tab=repositories" className="hover:underline">Github</a></td>
					<td><Icon name="heartFilled" size={24} /></td>
				</tr>
			</tbody>
		</table>

	</>
  );
}

export default Collection;
