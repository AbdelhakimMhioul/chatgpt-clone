import { IItem, IOption } from '../AIOptions';

type Props = {
	item: IItem;
	selectOption: (option: IOption) => void;
};

export default function ItemCard({ item, selectOption }: Props) {
	return (
		<div
			class="border-2 rounded-lg py-7 px-5 hover:bg-white hover:text-gray-900 transition-colors duration-300 cursor-pointer space-y-2 text-center"
			key={item.id}
			onClick={() => selectOption(item.option)}
		>
			<h2 class="font-semibold text-xl">{item.name}</h2>
			<p>{item.description}</p>
		</div>
	);
}
