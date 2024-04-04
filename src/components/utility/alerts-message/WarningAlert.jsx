import { useEffect } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WarningAlert({alertMessage}) {
    const notify = () => toast.warning(`Message Error : ${alertMessage}`,{
        position: "top-right",
        transition:Bounce,
        theme: "light",
        progress: undefined,
        closeOnClick: true,
    });

    useEffect(()=>{
        notify()
    },[])
    return (
        <>
             <div >
                <ToastContainer />
            </div>
        </>
    )

}
