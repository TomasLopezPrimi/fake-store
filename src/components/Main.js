import { Box, Heading, useBreakpointValue } from "@chakra-ui/react"
import Sidebar from "./Sidebar"
import { useState } from "react"
import ItemListConteiner from "./ItemListConteiner"

const Main = () => {

    const smVariant = { navigation: 'drawer', navigationButton: true }
    const mdVariant = { navigation: 'sidebar', navigationButton: false }

    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)


    return (
        <Box>
            <Sidebar 
                variant={variants?.navigation}
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
            />
            <Box ml={!variants?.navigationButton && 200}>
                <ItemListConteiner
                    showSidebarButton={variants?.navigationButton}
                    onShowSidebar={toggleSidebar}
                />
            </Box>
        </Box>
    )
}

export default Main