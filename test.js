import test from 'ava';
import plus from './main';

test('exports a function', t => {
	t.is(typeof plus, 'function');
});
