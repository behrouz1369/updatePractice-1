import { useEffect } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ErrorAlert({alertMessage}) {
    const notify = () => toast.error(`Message Error : ${alertMessage}`,{
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
