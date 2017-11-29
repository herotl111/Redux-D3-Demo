function initializeState(){
    return {type: 'INIT_STATE'};
}

function increment(){
    return { type: 'INCREMENT' };
}

function decrement(){
    return { type: 'DECREMENT' };
}

function addCount(){
    return {type:'ADD_COUNT'}
}

function req_AddCount(){
    return {type:'REQ_ADD_COUNT'}
}
function res_AddCount(){
    return {type:'RES_ADD_COUNT'}
}

function asyncAddCount(){
    return function(dispatch){
        dispatch(req_AddCount());
        setTimeout(function(){
            dispatch(res_AddCount());
          }, 1000);

    }
}

