// arg destructuring: 'store.dispatch' and 'store.state'
import { SUBMIT_THING, UPDATE_THINGS } from '../stores/mutation-types.js'
import Horizon from '@horizon/client'

const horizon = Horizon({host: 'localhost:8181'})
horizon.connect()
const thingFeed = horizon('things')

export const submitThing = function ({ dispatch, state }, thingName) {
    // See if thing exists, if not, initialize
    thingFeed.find({ name: thingName }).fetch().defaultIfEmpty().subscribe(
        (msg) => {
            if (msg == null) {
                thingFeed.store({ name: thingName, count: 1 }).subscribe(
                    result => dispatch(SUBMIT_THING, result),
                    error => dispatch(SUBMIT_THING, error),
                    () => console.log('NEW thing stored')
                    )
            } else {
                thingFeed.replace({ id: msg.id, name: thingName, count: msg.count + 1 })
            }
        })
}

export const fetchThings = function ({ dispatch, state }) {
    thingFeed.order('count', 'descending').limit(10).watch().subscribe((things) => {
        dispatch(UPDATE_THINGS, things)
    })
}

