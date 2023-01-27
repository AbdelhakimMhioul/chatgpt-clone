export interface IItem {
	id: string;
	name: string;
	description: string;
	option: IOption;
}

export interface IOption {
	model: string;
	prompt?: string;
	max_tokens: number;
	temperature: number;
	top_p: number;
	n: number;
}

const items: IItem[] = [
	{
		id: 'q&a',
		name: 'Q&A',
		description: 'Answer questions based on existing knowledge',
		option: {
			model: 'text-davinci-003',
			max_tokens: 7,
			temperature: 0,
			top_p: 1,
			n: 1,
		},
	},
	{
		id: 'grammarCorrection',
		name: 'Grammar Correction',
		description: 'Correct grammar mistakes in a sentence',
		option: {
			model: 'text-davinci-003',
			max_tokens: 7,
			temperature: 0,
			top_p: 1,
			n: 1,
		},
	},
	{
		id: 'translation',
		name: 'Translation',
		description: 'Translate a sentence from one language to another',
		option: {
			model: 'text-davinci-003',
			max_tokens: 7,
			temperature: 0,
			top_p: 1,
			n: 1,
		},
	},
	{
		id: 'sentimentAnalysis',
		name: 'Sentiment Analysis',
		description: 'Determine the sentiment of a sentence',
		option: {
			model: 'text-davinci-003',
			max_tokens: 7,
			temperature: 0,
			top_p: 1,
			n: 1,
		},
	},
	{
		id: 'textSummarization',
		name: 'Text Summarization',
		description: 'Summarize a text',
		option: {
			model: 'text-davinci-003',
			max_tokens: 7,
			temperature: 0,
			top_p: 1,
			n: 1,
		},
	},
	{
		id: 'textGeneration',
		name: 'Text Generation',
		description: 'Generate a text based on a prompt',
		option: {
			model: 'text-davinci-003',
			max_tokens: 7,
			temperature: 0,
			top_p: 1,
			n: 1,
		},
	},
	{
		id: 'textClassification',
		name: 'Text Classification',
		description: 'Classify a text into categories',
		option: {
			model: 'text-davinci-003',
			max_tokens: 7,
			temperature: 0,
			top_p: 1,
			n: 1,
		},
	},
	{
		id: 'textExtraction',
		name: 'Text Extraction',
		description: 'Extract text from a document',
		option: {
			model: 'text-davinci-003',
			max_tokens: 7,
			temperature: 0,
			top_p: 1,
			n: 1,
		},
	},
	{
		id: 'textComparison',
		name: 'Text Comparison',
		description: 'Compare two texts',
		option: {
			model: 'text-davinci-003',
			max_tokens: 7,
			temperature: 0,
			top_p: 1,
			n: 1,
		},
	},
];

export default items;
