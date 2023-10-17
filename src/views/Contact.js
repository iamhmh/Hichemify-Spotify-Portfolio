
function Contact() {
	return (
		<div className="grid gap-y-8">
			<h3 className="p-4 text-center text-[2.5rem] tracking-tighter font-semibold">Contact</h3>

			<form className="flex flex-col gap-y-4 ">
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" placeholder="John Doe" />

				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" placeholder="johndoe@gmail.com" />

				<label htmlFor="message">Message</label>
				<textarea id="message" name="message" rows="5" placeholder="Your message here"></textarea>

				<button type="submit" className=" text-white font-semibold py-2 px-4 rounded"> Send </button>
			</form>
		</div>
	)
}

export default Contact