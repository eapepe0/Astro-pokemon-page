import { createSignal, type Component, type JSX } from "solid-js"
// el createSignal es como el useState de React


// creamos una interface con las props que vamos a utilizar
interface Props {
  initValue : number;
  children? : JSX.Element; /* recibimos un children el cual es un elemento JSX*/
}

// Counter : es un Component que recibe unas <Props> la cual  recibimos en props
export const Counter: Component<Props> = (props) => {

    // usamos el initValue como valor inicial
    const [counter , setCounter] = createSignal(props.initValue)


  return (
    <div class="space-y-5">
        {props.children}
        <h3 class="text-xl">Value : {counter()}</h3>

        <button onClick={()=> setCounter((prev)=> ++prev)} class="bg-blue-500 p-2 mr-2 rounded">+1</button>
        <button onClick={()=> setCounter((prev)=> --prev)} class="bg-blue-500 p-2 mr-2 rounded">-1</button>
    </div>
  )
}
