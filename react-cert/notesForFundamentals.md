const array1 = ['stuff', 'thing', 'cool']
const array2 = [1,2,3] 
const reducer = (previousValue, currentValue) => previousValue + currentValue;

--.filter would only get 'cool' because it is less than or equal to 4 in length 
array.filter(word => word.length <= 4>)

--.reduce will equal 6
array2.reduce(reducer)



I did not use useEffect durring project.
useEffect monitors a variable and runs the function if the monitored varable changes

let thing = 1
useEffect((thing)=>{
    function(thing){
        thing + array 2
        return thing
    }

},[array1])
--if array1 changes then the use effect will run

--useMemo - my understanding is that its a combination of useEffect and useState. it remembers the cached result for the next time it is needed to run. it will only recompute the value if what it is watching has changed. 

useMemo(()=>{
    const [state, setState] = useState('')

    //big function that you dont want being run on every render. 

}, [thing])