export interface LoginProps {
 'email': string;
 'password': string;
}

export interface SignupProps {
    'full_name': string;
    'email': string;
    'password': string;
}

export interface NavbarProps{
    connected?: boolean
    connectToMetamask? : ()=> void
}

export interface aboutFaqProps {
    question: string;
    answer: string;
  }
  