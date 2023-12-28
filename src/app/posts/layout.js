
import {FileProvider} from "../../context/FileProvider"

export default function RootLayout({children}) {
    return (
            <FileProvider>
                <main>{children}</main>
            </FileProvider>
    )
}
