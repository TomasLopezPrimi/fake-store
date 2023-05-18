import { Box } from "@chakra-ui/react"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"

const ItemListConteiner = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            })
    },[])

    return (
        <Box 
            //display={'flex'} flexWrap={'wrap'} justifyContent='center'
            >
            {products.map((product) => <ItemDetail product={product} key={product.id} />)}
        </Box>
    )
}

export default ItemListConteiner