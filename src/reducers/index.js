const intialState = {
    windows: 0,
    mac: 0,
    linux: 0
}

export default (state = intialState, action) => {
    switch(action.type){
        case 'VOTE_WINDOWS':
        console.log('Vote Windows!')
            return Object.assign({}, state,{
                windows: state.windows + 1
            })
        case 'VOTE_MAC':
        console.log('Vote Mac!')
            return Object.assign({}, state,{
                mac: state.mac + 1
            })
        case 'VOTE_LINUX':
        console.log('Vote Linux!')
            return Object.assign({}, state,{
                linux: state.linux + 1
            })
        default:
            return state
    }
}