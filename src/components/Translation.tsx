type Props = {
	input: string;
	setInput: (input: string) => void;
	doStuff: () => void;
};

export default function Translation({ input, setInput, doStuff }: Props) {
	const clear = () => {
		setInput('');
	};

	return (
		<div class="flex flex-col space-y-4">
			<textarea
				class="text-lg bg-gray-900 border-4 border-white rounded-xl p-4 focus:outline-none font-bold"
				cols={50}
				rows={10}
				value={input}
				onChange={e => {
					const target = e.target as HTMLTextAreaElement;
					setInput(target.value);
				}}
			></textarea>
			<button
				class="bg-white text-gray-900 font-bold py-4 px-6 rounded-lg inline focus:outline-none text-lg"
				onClick={doStuff}
			>
				<div class="transition active:scale-125 duration-300">Translate</div>
			</button>
			<button
				class="bg-gray-900 text-white font-bold py-4 px-6 rounded-lg inline focus:outline-none text-lg border-2 border-white"
				onClick={clear}
			>
				<div class="transition active:scale-125 duration-300">Clear</div>
			</button>
		</div>
	);
}
