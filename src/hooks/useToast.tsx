import toast, { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/style.css';
// import 'react-simple-toasts/dist/theme/dark.css'; // import the desired theme

// specify the theme in toastConfig
toastConfig({
  theme: 'dark',
  clickClosable: true
});

export default function useToast() {

    return { toast }
}