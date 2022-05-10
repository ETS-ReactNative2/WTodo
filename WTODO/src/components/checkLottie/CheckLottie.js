import React,{useEffect,useRef} from "react";
import LottieView from 'lottie-react-native'

const CheckLottie = () => {
    const ref = useRef();
    useEffect(()=>{
        if (ref.current) {
            ref.current?.play(0,80)
        }
    },[ref.current])
    return(
        <LottieView source={require('../../assets/WelcomeCheck.json')} loop={false} ref={ref} autoPlay={false} resizeMode={'cover'} />
    )
}
export default CheckLottie