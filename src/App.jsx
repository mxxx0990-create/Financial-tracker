import './App.css'
import Header from './MYcomponents/Header/Header'
import Form from './MYcomponents/Form/Form'
import { useSelector, useDispatch } from 'react-redux'
import { store } from './store'



function App() {

    const theme = useSelector((state) => state.theme)
    const dispatch = useDispatch()

 
    return (
        <>
        <div style={{
            background: theme === '🌙' ? '#333' : '#fff',
            color: theme === '🌙' ? '#fff' : '#000',
            minHeight: '100vh',
            padding: '2rem'
            
        }}> 
        
           <Header />
           <Form />
        </div>
   
        </>
    )
}

export default App
