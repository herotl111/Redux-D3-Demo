function counter(state, action) {
    if(action.type === 'INCREMENT'){
        return Object.assign({},state,{
            count:state.count + 1
        });
    }else if(action.type === 'DECREMENT'){
        return Object.assign({},state,{
            count:state.count - 1
        });
    }
    else if(action.type === 'ADD_COUNT'){
        state.countList.push(state.count);
        return Object.assign({},state,{
            countList: state.countList
        });
    }
    else{
        return state;
    }
}