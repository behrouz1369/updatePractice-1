import { useEffect } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorAlert from './ErrorAlert';
import SuccessAlert from './SuccessAlert';
import WarningAlert from './WarningAlert';

export default function AlertMessage({alertMessage ,type}) {
    switch (type) {
        case 'errorM':
            return <ErrorAlert alertMessage={alertMessage}/>
        case 'successM':
            return <SuccessAlert alertMessage={alertMessage} />
        case 'warningM':
            return <WarningAlert alertMessage={alertMessage} />

        default:
            return;
    }
}
