

export default function createMachine(stateMachineDefinition: any) {
    const machine = {
        value: stateMachineDefinition.initialState,
        transition(currentState : any, event : string) {
            const currentStateDefinition = stateMachineDefinition[currentState]
            const destinationTransition = currentStateDefinition.transitions[event]
            if (!destinationTransition) {
                return
            }
            const destinationState = destinationTransition.target
            const destinationStateDefinition =
                stateMachineDefinition[destinationState]

            destinationTransition.action()
            currentStateDefinition.actions.onExit()
            destinationStateDefinition.actions.onEnter()

            machine.value = destinationState

            return machine.value
        },
    }
    return machine
}


//
// const machine = createMachine({
//     initialState: 'off',
//     off: {
//         actions: {
//             onEnter() {
//                 console.log('off: onEnter')
//             },
//             onExit() {
//                 console.log('off: onExit')
//             },
//         },
//         transitions: {
//             switch: {
//                 target: 'on',
//                 action() {
//                     console.log('transition action for "switch" in "off" state')
//                 },
//             },
//         },
//     },
//     on: {
//         actions: {
//             onEnter() {
//                 console.log('on: onEnter')
//             },
//             onExit() {
//                 console.log('on: onExit')
//             },
//         },
//         transitions: {
//             switch: {
//                 target: 'off',
//                 action() {
//                     console.log('transition action for "switch" in "on" state')
//                 },
//             },
//         },
//     },
// })



//
// import { EventEmitter } from 'events';
//
// interface StateMachine extends EventEmitter {
//
//     currentState: string;
//
//     canTrigger(event: string): boolean;
//
//     isFinalState(state: string): boolean;
//
//     hasState(state: string): boolean;
//
//     instanceId(): string;
//     [k: string]: any;
// }
//
// interface EventSpecification {
//
//     name: string;
//
//     from: string | string[];
//
//     to?: string | string[];
//
//     condition?: {
//         (args: any[]): string | number | Promise<string | number>;
//     };
// }
//
// interface CallbackOptions {
//
//     name: string;
//     from: string;
//     to: string;
//
//     args: any[];
//
//     res?: any;
// }
//
// interface StateMachineConfiguration {
//     /**
//      * The initial state
//      */
//     initial: string;
//     /**
//      * The final states
//      */
//     final: string | string[];
//     /**
//      * The events
//      */
//     events: EventSpecification[];
//     /**
//      * The callbacks
//      */
//     callbacks?: {
//         [k: string]: {
//             (options: CallbackOptions): void | Promise<void>;
//         };
//     };
//     /**
//      * Custom error handler
//      */
//     error?: {
//         (
//             message: string,
//             options: {
//                 name: string;
//                 from: string;
//             }
//         ): Error;
//     };
// }
//
//
// export default StateMachine;
