import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'preact/hooks';
import items, { IOption } from './AIOptions';
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';

export function App() {
	const [option, setOption] = useState({} as IOption);
	const [input, setInput] = useState('');

	const config = new Configuration({
		apiKey: import.meta.env.VITE_OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(config);

	const selectOption = (option: IOption) => setOption(option);
	const doStuff = async () => {
		let opts = { ...option, prompt: input };
		console.log(opts);
		const response = await openai.createCompletion(opts);

		console.log(response.status);

		setInput(response.data.choices[0].text ?? 'No response');
	};

	return (
		<div class="flex items-center justify-center min-h-screen">
			{Object.values(option).length > 0 ? (
				<Translation input={input} setInput={setInput} doStuff={doStuff} />
			) : (
				<OptionSelection items={items} selectOption={selectOption} />
			)}
		</div>
	);
}
