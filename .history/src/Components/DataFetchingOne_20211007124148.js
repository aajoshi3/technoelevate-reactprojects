import axios from 'axios'



const initialState={
    loading:true,
    data:{},
    err:'',
};
const reducer=(prevState,action)=>{
    switch (action.type){
        case 'FETCH_SUCCESS':
            return {
                ...prevState,
                loading:false,
                 err:action.payload,            
            };
            default:
                return prevState;
    }
}
function DataFetchingTwo(){
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        getUsers()
    }, []);
    const getUsers=async()=>{
        const res=await axios.get(
            'https://jsonplaceholder.typicode.com/users/1');
            dispatch({type:'FETCH_SUCCESS',payload:res.data});
    
    }catch(err){
        dispatch({type:'FETCH_ERROR',payload:err.message})
    }
}
