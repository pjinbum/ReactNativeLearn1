import { createContext , useState} from 'react';

const UserContext = createContext({ 
  user :{ name:'' },
  dispatch:()=>{},
});

const UserProvider = ({ children}) =>{
  const[ name, setName] =useState('이순신');
  const value = { user : { name }, dispatch:setName };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;