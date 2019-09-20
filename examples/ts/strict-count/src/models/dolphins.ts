import { delay } from '../helpers'
import { RootDispatch } from '../store';

export type DolphinsState = number

export const dolphins = {
	state: 0,
	reducers: {
		increment: (state: DolphinsState) => state + 1,
		decrement: (state: DolphinsState, count: number) => state - count,
	},
	effects: (dispatch: RootDispatch) => ({
		async incrementAsync() {
			await delay(500)
			dispatch.dolphins.increment()
		},
		decrementDolphin(count: number) {
			dispatch.dolphins.decrement(count);
		}
	}),
}
