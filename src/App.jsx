import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa0} from '@fortawesome/free-solid-svg-icons';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

function App() {
  let iconsArray = Object.entries(Icons);
  let transformedArrayIcons = iconsArray.map(icon => {
        if(icon[0].length < 5){
          icon["status"] = "free" 
          return icon;
        }else if(icon[0].length < 10){
          icon["status"] = "paid" 
          return icon;
        }else{
          icon["status"] = "others" 
          return icon;
        }
      }
  )
  
  const [transformedIcons, setTransformedIcons] = useState(transformedArrayIcons)
  
  
  
  // useEffect(()=>{
  //   setTransformedIcons(transformedArrayIcons)
  // },[transformedArrayIcons])

  // console.log(transformedIcons)
  const handleFreeIcon = () =>{
    const freeIcon = transformedArrayIcons.filter(icon => icon.status === 'free');
    console.log(freeIcon)
    setTransformedIcons(freeIcon)
  }
  const handlePaidIcon = () =>{
    const paidIcon = transformedArrayIcons.filter(icon => icon.status === 'paid');
    console.log(paidIcon)
    setTransformedIcons(paidIcon)
  }
  const handleOthersIcon = () =>{
    const othersIcon = transformedArrayIcons.filter(icon => icon.status === 'others');
    console.log(othersIcon)
    setTransformedIcons(othersIcon)
  }
  // console.log(transformedIcons[0][1].iconName)

  function compare( a, b ) {
    if ( a[1].iconName < b[1].iconName ){
      return 1;
    }
    if ( a[1].iconName > b[1].iconName ){
      return -1;
    }
    return 0;
  }
  function compare2( a, b ) {
    if ( a[1].iconName < b[1].iconName ){
      return -1;
    }
    if ( a[1].iconName > b[1].iconName ){
      return 1;
    }
    return 0;
  }
  
  

  const handleDcendant = () =>{
    
    const decendantIcon = transformedIcons.slice().sort( compare );
    console.log("decendant icon", decendantIcon)
    setTransformedIcons(decendantIcon);
    console.log(transformedIcons)

  }
  
  const handleAccending = () =>{
    const accendingIcon = transformedIcons.slice().sort( compare2 );
    console.log("accending icon", accendingIcon)
    setTransformedIcons(accendingIcon);
    console.log(transformedIcons)
  }

  const ref = useRef();
  console.log(transformedArrayIcons)
  const searchIcon = () =>{
    console.log("first")
      const searchValue = ref.current.value;
      const searchIcons = transformedArrayIcons.filter(icon => icon[1]?.iconName?.includes(searchValue) === true);
      // const searchIcons = transformedArrayIcons.map(icon => icon[1].iconName = "ok");
      console.log(searchIcons)
      console.log("search")
      setTransformedIcons(searchIcons)

  }

  return (
    <>
      <input ref={ref} type='text' placeholder='search-icon'/>
      <button onClick={searchIcon}>Search</button>
    <div>
      <button onClick={handleFreeIcon}>Free</button>
      <button onClick={handlePaidIcon}>Paid</button>
      <button onClick={handleOthersIcon}>Others</button>
      <button onClick={handleDcendant}>Short By Decendant Order</button>
      <button onClick={handleAccending}>Short By Accending Order</button>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', justifyContent:"space-between"}}>
      {
        transformedIcons.map(singleIcon => {
       return  <div key={singleIcon[0]}>
       <button style={{display: 'inline-block', fontSize: "40px"}} ><FontAwesomeIcon  icon={singleIcon[1]} /></button>
       <p>Font Name: {singleIcon[1].iconName}</p>
       <p>{singleIcon.status}</p>

     </div>
        })
      }
    </div>
      
    </>
  )
}

export default App
