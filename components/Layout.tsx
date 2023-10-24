import {Component} from "react";
import {ThemeProvider} from "next-themes";
import { ModalProvider } from "@/components/providers/modal-provider";

class Layout extends Component<{
    children: any
}> {
    render() {
        let {children} = this.props;
        return (
            <div>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <nav />
                    <ModalProvider />
                    {children}
                </ThemeProvider>
            </div>
        );
    }
}

export default Layout;
