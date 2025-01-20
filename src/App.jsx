
import './App.css'
import ProductCard from './components/productCard'

function App() {

  return (


    <>

    <ProductCard name="Audio Setup" price="32650" img="https://img.drz.lazcdn.com/g/kf/S6cfb0ee8d9f74ebb9660fd04b3622e364.jpg_400x400q75.jpg_.webp" description="JBL Charge Mini 3+ Portable Wireless Bluetooth Speaker With FM Radio JBL" />
    

    <ProductCard 
    name="Studio Headphones" 
    price="45900" 
    img="data:image/jpeg;base64,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" 
    description="Sony WH-1000XM4 Wireless Premium Noise Canceling Headphones"
/>

<ProductCard 
    name="Professional Microphone" 
    price="89500" 
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQK4XnUcnv-6bVSJ-xRYnmTQuepqPhJK4MQ&s" 
    description="Shure SM7B Vocal Dynamic Microphone for Studio Recording"
/>

<ProductCard 
    name="Portable Speaker" 
    price="35750" 
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6X_K7iVHrpQu8pwjFCo2NsEbf3wa_nq2Yw&s" 
    description="Marshall Emberton Portable Bluetooth Speaker with 20+ Hours Playtime"
/>

<ProductCard 
    name="MIDI Controller" 
    price="52000" 
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_MvZrSBko_pE1JiComhznfsdNzmpvE9rDA&s" 
    description="Native Instruments Komplete Kontrol M32 MIDI Keyboard Controller"
/>

<ProductCard 
    name="Audio Interface" 
    price="68500" 
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRJok-Si4tD8_qyIexgWxEImeCQhbldVYPg&s" 
    description="Focusrite Scarlett 2i2 3rd Gen USB Audio Interface for Recording"
/>



      
    </>
  )
}

export default App
