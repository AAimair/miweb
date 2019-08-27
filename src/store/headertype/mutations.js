export default{
    updateType(state,payload){
        state.sx = payload;
    },
    updateIstab(state,val){
        state.istab = val;
    },
    updatehome(state,val){
        state.hometype = val;
    },
    updatepath(state,val){
        state.path = val;
    }
}