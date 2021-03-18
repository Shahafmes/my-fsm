import { createMachine } from './state-machine';

const machine = createMachine({
  initialState: 'off',
  states: {
    off: {
      actions: {
        onEnter() {
          console.log('off: onEnter')
        },
        onExit() {
          console.log('off: onExit')
        },
      },
      transitions: {
        switch: {
          target: 'on',
          action() {
            console.log('transition action for "switch" in "off" state')
          },
        },
      },
    },
    on: {
      actions: {
        onEnter() {
          console.log('on: onEnter')
        },
        onExit() {
          console.log('on: onExit')
        },
      },
      transitions: {
        switch: {
          target: 'off',
          action() {
            console.log('transition action for "switch" in "on" state')
          },
        },
      },
    },
  }
});

let state = machine.value;


test('initial state should be off', (): void => {
  const currentState = state;
  expect(currentState).toEqual('off');
});

test('after switch state should be on', (): void => {
  const currentState = machine.transition(state, 'switch');
  expect(currentState).toEqual('on');
});

test('check is Last step', (): void => {
});
test('check is final step', (): void => {
});
test('add state', (): void => {
});
test('add Transition', (): void => {
});
test('after switch state should be on', (): void => {
});
test('after switch state should be on', (): void => {
});
test('after switch state should be on', (): void => {
});
test('after switch state should be on', (): void => {
});
test('after switch state should be on', (): void => {
});
test('after switch state should be on', (): void => {
});


// init: 'solid',
//   transitions: [
//   { name: 'melt',     from: 'solid',  to: 'liquid' },
//   { name: 'freeze',   from: 'liquid', to: 'solid'  },
//   { name: 'vaporize', from: 'liquid', to: 'gas'    },
//   { name: 'condense', from: 'gas',    to: 'liquid' }
// ],
//   methods: {
//   onMelt:     function() { console.log('I melted')    },
//   onFreeze:   function() { console.log('I froze')     },
//   onVaporize: function() { console.log('I vaporized') },
//   onCondense: function() { console.log('I condensed') }
// }
