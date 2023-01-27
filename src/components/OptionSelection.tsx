import { IItem, IOption } from '../AIOptions';
import ItemCard from './ItemCard';

type Props = {
	items: IItem[];
	selectOption: (option: IOption) => void;
};

export default function OptionSelection({ items, selectOption }: Props) {
	return (
		<div class="space-y-14">
			<h1 class="font-bold text-4xl text-center">React AI Application</h1>

			<div class="grid gap-4 grid-cols-1 sm:md-grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{items.filter(Boolean).map(item => (
					<ItemCard item={item} selectOption={selectOption} />
				))}
			</div>
		</div>
	);
}
